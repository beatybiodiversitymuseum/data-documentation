---
title: "Using the Indoor Map"
icon: material/navigation-variant-outline
---

# Using the Beaty Indoor Map

The [Beaty Indoor Map](https://apps.beatymuseum.ubc.ca/map) is the current
viewer for the museum's indoor mapping data. The map application is hosted
separately from this documentation and replaces the previous
documentation-hosted viewer.

Use the current map to:

- show or hide indoor mapping layers;
- switch between ground and basement features;
- search for mapped fixtures and destinations;
- select a feature and inspect its properties; and
- create a walking route between supported fixtures or exhibits.

## Find a feature

Use the search control to find a mapped fixture or destination, or select a
feature directly on the map. The inspector displays the information recorded
for the selected feature, including useful identifiers and source-issue
details when available.

The map distinguishes physical fixtures from visitor-facing destinations:

- **Fixtures** are polygons representing cabinets and drawer/island boxes.
- **Amenities** are searchable exhibit or viewing points associated with
  fixtures or fossil excavations.
- **Details** include mapped physical features such as the walkable,
  glass-covered fossil excavation areas.

## Create a route

1. [Open the Indoor Map](https://apps.beatymuseum.ubc.ca/map).
2. Search for a fixture or select one on the map.
3. In the inspector, choose **Start here**.
4. Select another supported feature.
5. Choose **Route here**.

The route follows only locally confirmed pedestrian paths and connections. It
does not treat the entire museum-floor polygon as freely walkable, route
through cabinets, or invent a shortcut when no approved connection exists. If
a destination is not connected to the confirmed routing network, the viewer
reports that no approved route is available.

## Understand route results

Routing minimizes distance along the approved line network stored in
[`geojson/navigation.geojson`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/geojson/navigation.geojson).
Intersections between confirmed walking and connection lines form routing
junctions. Connections ending at fixtures remain terminal so a route cannot
pass through a cabinet on the way to another destination.

If a route or feature appears incorrect, do not edit this documentation.
Follow [Adding to the Indoor Map](adding-to-map.md) to report the correction
to the map's source repository.

## More information

- [Indoor mapping data reference](../reference/indoor-map.md)
- [Indoor mapping source repository](https://github.com/beatybiodiversitymuseum/indoor-mapping/)
- [Open the Beaty Indoor Map](https://apps.beatymuseum.ubc.ca/map)
