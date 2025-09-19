/**
 * Wayfinding Pathfinder
 * Finds paths between fixtures through waypoints in the wayfinding.geojson graph
 */

/**
 * Load and parse the wayfinding GeoJSON data
 * @param {string} geojsonPath - Path to the wayfinding.geojson file
 * @returns {Promise<Object>} Parsed GeoJSON data
 */
async function loadWayfindingData(geojsonPath) {
    try {
        const response = await fetch(geojsonPath);
        return await response.json();
    } catch (error) {
        console.error('Error loading wayfinding data:', error);
        throw error;
    }
}

/**
 * Load additional fixture data from separate GeoJSON files
 * @returns {Promise<Map>} Map of fixture polygons
 */
async function loadFixturePolygons() {
    const fixturePolygons = new Map();
    const fixtureFiles = [
        './geojson/cabinet_fixtures.geojson',
        './geojson/di_box_fixtures.geojson', 
        './geojson/fossil_excavation_fixtures.geojson',
        './geojson/fixture.geojson'
    ];

    for (const filePath of fixtureFiles) {
        try {
            const response = await fetch(filePath);
            const data = await response.json();
            
            for (const feature of data.features) {
                if (feature.geometry.type === 'Polygon' && feature.properties?.alt_name) {
                    const altName = feature.properties.alt_name;
                    fixturePolygons.set(altName, feature.geometry.coordinates[0]);
                }
            }
        } catch (error) {
            console.warn(`Could not load fixture file ${filePath}:`, error);
        }
    }
    
    return fixturePolygons;
}

/**
 * Build a graph from the GeoJSON data
 * @param {Object} geojsonData - The parsed GeoJSON data
 * @returns {Object} Graph representation with nodes, adjacency list, and node types
 */
function buildGraphFromGeoJSON(geojsonData) {
    const nodes = new Set();
    const adjacencyList = new Map();
    const nodeTypes = new Map();
    const nodeCoordinates = new Map();
    const walkingPaths = [];
    
    // Initialize adjacency list
    const addNode = (nodeId) => {
        if (!adjacencyList.has(nodeId)) {
            adjacencyList.set(nodeId, new Set());
        }
    };
    
    // Process all features
    for (const feature of geojsonData.features) {
        if (feature.geometry.type === 'Point') {
            // Waypoint nodes
            const wayfindingType = feature.properties?.wayfinding_type;
            if (wayfindingType === 'walking_grid_point') {
                const altName = feature.properties?.alt_name;
                if (altName) {
                    nodes.add(altName);
                    nodeTypes.set(altName, 'waypoint');
                    nodeCoordinates.set(altName, feature.geometry.coordinates);
                    addNode(altName);
                }
            }
        } else if (feature.geometry.type === 'LineString') {
            // Edges (walking paths and connection lines)
            const wayfindingType = feature.properties?.wayfinding_type;
            if (wayfindingType === 'walking_path' || wayfindingType === 'connection_line') {
                const source = feature.properties?.source;
                const target = feature.properties?.target;
                
                if (source && target) {
                    nodes.add(source);
                    nodes.add(target);
                    addNode(source);
                    addNode(target);
                    
                    // Add bidirectional edges
                    adjacencyList.get(source).add(target);
                    adjacencyList.get(target).add(source);
                    
                    // Store walking path for visualization
                    if (wayfindingType === 'walking_path' && feature.geometry.coordinates) {
                        walkingPaths.push({
                            path: feature.geometry.coordinates,
                            source: source,
                            target: target,
                            type: 'walking_path'
                        });
                    }
                    
                    // Determine node types based on naming patterns
                    [source, target].forEach(nodeId => {
                        if (!nodeTypes.has(nodeId)) {
                            if (nodeId.startsWith('wp_')) {
                                nodeTypes.set(nodeId, 'waypoint');
                            } else if (nodeId.startsWith('di_')) {
                                nodeTypes.set(nodeId, 'di_box');
                            } else if (nodeId.startsWith('col_') && nodeId.includes('cab_')) {
                                nodeTypes.set(nodeId, 'cabinet');
                            } else if (nodeId.startsWith('fossil_')) {
                                nodeTypes.set(nodeId, 'fossil');
                            } else {
                                nodeTypes.set(nodeId, 'unknown');
                            }
                        }
                    });
                }
            }
        }
    }
    
    // Add coordinates and polygon data for fixture nodes
    const fixturePolygons = new Map();
    
    // First pass: collect all polygon fixtures from the main geojson
    for (const feature of geojsonData.features) {
        if (feature.geometry.type === 'Point' || feature.geometry.type === 'Polygon') {
            const altName = feature.properties?.alt_name;
            if (altName && nodes.has(altName)) {
                if (feature.geometry.type === 'Point') {
                    if (!nodeCoordinates.has(altName)) {
                        nodeCoordinates.set(altName, feature.geometry.coordinates);
                    }
                } else if (feature.geometry.type === 'Polygon') {
                    // Store polygon data for fixtures
                    fixturePolygons.set(altName, feature.geometry.coordinates[0]); // Outer ring of polygon
                    
                    // Use display_point for polygon features if no coordinates yet
                    if (!nodeCoordinates.has(altName)) {
                        const displayPoint = feature.properties?.display_point;
                        if (displayPoint && displayPoint.coordinates) {
                            nodeCoordinates.set(altName, displayPoint.coordinates);
                        }
                    }
                }
            }
        }
    }
    
    return {
        nodes: Array.from(nodes),
        adjacencyList,
        nodeTypes,
        nodeCoordinates,
        walkingPaths,
        fixturePolygons
    };
}

/**
 * Find path between two nodes using BFS with fixture-to-waypoint-to-fixture constraint
 * @param {string} source - Source node ID
 * @param {string} target - Target node ID
 * @param {Map} adjacencyList - Graph adjacency list
 * @param {Map} nodeTypes - Node type mapping
 * @returns {Array|null} Path as array of node IDs, or null if no path exists
 */
function findPath(source, target, adjacencyList, nodeTypes) {
    // Validate inputs
    if (!adjacencyList.has(source) || !adjacencyList.has(target)) {
        console.warn(`Source '${source}' or target '${target}' not found in graph`);
        return null;
    }
    
    if (source === target) {
        return [source];
    }
    
    const sourceType = nodeTypes.get(source);
    const targetType = nodeTypes.get(target);
    
    console.log(`Pathfinding: source='${source}' (type: ${sourceType}), target='${target}' (type: ${targetType})`);
    
    // Allow waypoints as source/target - no restriction needed
    
    // BFS with path tracking
    const queue = [[source]];
    const visited = new Set([source]);
    
    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentNode = currentPath[currentPath.length - 1];
        const currentNodeType = nodeTypes.get(currentNode);
        
        // Explore neighbors
        for (const neighbor of adjacencyList.get(currentNode)) {
            if (visited.has(neighbor)) continue;
            
            const neighborType = nodeTypes.get(neighbor);
            const newPath = [...currentPath, neighbor];
            
            // Check if we found the target
            if (neighbor === target) {
                return newPath;
            }
            
            // Allow all connections: waypoint-to-waypoint, waypoint-to-fixture, fixture-to-waypoint
            // Only restrict direct fixture-to-fixture connections (must go through waypoints)
            let canVisit = false;
            
            if (currentNodeType !== 'waypoint' && neighborType === 'waypoint') {
                // Fixture to waypoint: allowed
                canVisit = true;
            } else if (currentNodeType === 'waypoint' && neighborType !== 'waypoint') {
                // Waypoint to fixture: allowed
                canVisit = true;
            } else if (currentNodeType === 'waypoint' && neighborType === 'waypoint') {
                // Waypoint to waypoint: allowed
                canVisit = true;
            } else if (currentNodeType !== 'waypoint' && neighborType !== 'waypoint') {
                // Fixture to fixture: not allowed (must go through waypoints)
                canVisit = false;
            } else {
                // Default case: allow if we don't know the types
                canVisit = true;
            }
            
            if (canVisit) {
                visited.add(neighbor);
                queue.push(newPath);
            } else {
                console.log(`Cannot visit neighbor '${neighbor}' (type: ${neighborType}) from '${currentNode}' (type: ${currentNodeType})`);
            }
        }
    }
    
    return null; // No path found
}

/**
 * Get detailed path information including coordinates and node types
 * @param {Array} path - Array of node IDs
 * @param {Map} nodeTypes - Node type mapping
 * @param {Map} nodeCoordinates - Node coordinate mapping
 * @returns {Object} Detailed path information
 */
function getPathDetails(path, nodeTypes, nodeCoordinates) {
    if (!path) return null;
    
    return {
        path,
        length: path.length,
        nodes: path.map(nodeId => ({
            id: nodeId,
            type: nodeTypes.get(nodeId) || 'unknown',
            coordinates: nodeCoordinates.get(nodeId) || null
        })),
        summary: {
            start: {
                id: path[0],
                type: nodeTypes.get(path[0])
            },
            end: {
                id: path[path.length - 1],
                type: nodeTypes.get(path[path.length - 1])
            },
            waypointsUsed: path.filter(nodeId => nodeTypes.get(nodeId) === 'waypoint').length
        }
    };
}

/**
 * Main pathfinding function
 * @param {string} source - Source fixture or waypoint ID (e.g., "di_27_18_top", "col_1_cab_01", "wp_001")
 * @param {string} target - Target fixture or waypoint ID (e.g., "fossil_excavation_1", "col_2_cab_15", "wp_025")
 * @param {Object} graph - Pre-built graph object (optional, will load from default path if not provided)
 * @returns {Promise<Object|null>} Detailed path information or null if no path exists
 */
async function findFixturePath(source, target, graph = null) {
    try {
        // Load graph if not provided
        if (!graph) {
            console.log('Loading wayfinding data...');
            const geojsonData = await loadWayfindingData('./geojson/wayfinding.geojson');
            graph = buildGraphFromGeoJSON(geojsonData);
            
            // Load fixture polygons from separate files
            console.log('Loading fixture polygons...');
            const fixturePolygons = await loadFixturePolygons();
            graph.fixturePolygons = fixturePolygons;
            console.log(`Loaded ${fixturePolygons.size} fixture polygons`);
        }
        
        console.log(`Finding path from ${source} to ${target}...`);
        
        // Debug: Check if nodes exist and their types
        console.log(`Source '${source}' exists:`, graph.adjacencyList.has(source));
        console.log(`Target '${target}' exists:`, graph.adjacencyList.has(target));
        console.log(`Source type:`, graph.nodeTypes.get(source));
        console.log(`Target type:`, graph.nodeTypes.get(target));
        console.log(`Source neighbors:`, Array.from(graph.adjacencyList.get(source) || []));
        
        // Find the path
        const path = findPath(source, target, graph.adjacencyList, graph.nodeTypes);
        
        if (!path) {
            console.log(`No path found between ${source} and ${target}`);
            return null;
        }
        
        // Get detailed path information
        const pathDetails = getPathDetails(path, graph.nodeTypes, graph.nodeCoordinates);
        
        console.log(`Path found! Length: ${path.length} nodes`);
        console.log(`Path: ${path.join(' -> ')}`);
        
        return pathDetails;
        
    } catch (error) {
        console.error('Error in pathfinding:', error);
        return null;
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadWayfindingData,
        loadFixturePolygons,
        buildGraphFromGeoJSON,
        findPath,
        getPathDetails,
        findFixturePath
    };
}

// Example usage (can be called directly in browser console or Node.js)
async function exampleUsage() {
    // Example: Find path from a DI box to a fossil excavation
    const result1 = await findFixturePath('di_27_18_top', 'fossil_excavation_1');
    
    if (result1) {
        console.log('Path Details:', result1);
        console.log(`Route: ${result1.nodes.map(n => `${n.id} (${n.type})`).join(' -> ')}`);
    }
    
    // Example: Find path from waypoint to waypoint
    const result2 = await findFixturePath('wp_001', 'wp_025');
    
    if (result2) {
        console.log('Waypoint Path Details:', result2);
        console.log(`Route: ${result2.nodes.map(n => `${n.id} (${n.type})`).join(' -> ')}`);
    }
}

// Uncomment to run example
// exampleUsage();
