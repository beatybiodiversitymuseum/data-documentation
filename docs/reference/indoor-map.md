---
title: "Indoor mapping"
icon: material/layers-triple-outline
---

# Beaty Indoor Map

The [Beaty Indoor Map](https://apps.beatymuseum.ubc.ca/map) is the current
viewer for the museum's indoor mapping data. Use it to explore mapped museum
features, search for fixtures, inspect feature details, and create walking
routes between supported destinations.

The map and its data are maintained separately from this documentation in the
[beatybiodiversitymuseum/indoor-mapping repository](https://github.com/beatybiodiversitymuseum/indoor-mapping/).
That repository is the source of truth for the map's code, GeoJSON data,
technical documentation, validation, and contribution workflow.

## Explore the map

The viewer provides:

- layer controls for showing or hiding different types of map data;
- ground and basement filtering;
- search for mapped fixtures and other supported features;
- an inspector showing useful feature properties and source-issue details; and
- fixture-to-fixture pedestrian routing.

To create a route:

1. [Open the Indoor Map](https://apps.beatymuseum.ubc.ca/map).
2. Search for a fixture or select one on the map.
3. In the inspector, choose **Start here**.
4. Select the destination and choose **Route here**.

Routes follow only the confirmed pedestrian lines in
[`geojson/navigation.geojson`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/geojson/navigation.geojson).
The routing system minimizes distance along those approved lines. It does not
treat the whole museum floor as freely walkable, pass through cabinets as
shortcuts, or invent a route where no approved connection exists.

## What is mapped

The canonical files are stored in the repository's
[`geojson` directory](https://github.com/beatybiodiversitymuseum/indoor-mapping/tree/main/geojson).
They use GeoJSON for points, lines, and polygons and are organized using Indoor
Mapping Data Format concepts plus local museum extensions.

The principal layers include:

| Layer | Contents |
|---|---|
| `venue`, `building`, and `footprint` | The overall venue and locally confirmed building footprints. |
| `level` and `unit` | The underground gallery level and Museum Floor area. |
| `fixture` | Display cabinets and drawer/island box polygons. |
| `amenity` | Visitor-facing exhibit and destination points, including cabinet, drawer, and fossil excavation exhibits. |
| `detail` | Walkable glass-covered fossil excavation polygons. |
| `navigation` | Confirmed pedestrian nodes, walking paths, and connections to fixtures or exhibits. |
| `exhibit` | Active exhibit content associated with mapped fixtures and amenities. |
| `archive` | Preserved exhibit records that are no longer active display content. |

Some standard layers, such as openings, kiosks, occupants, relationships, and
sections, may exist without any confirmed features. Do not assume an empty
layer means the physical feature does not exist; it means it has not yet been
added to the canonical map data.

See the repository's
[`DATA_DICTIONARY.md`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/DATA_DICTIONARY.md)
for field definitions and locally used values.

## Data quality and provenance

The map combines museum-maintained data with locally reviewed public reference
data. Building and footprint records include OpenStreetMap-derived geometry
with source URLs, licence information, attribution, and local interpretation.
Museum-floor geometry, fixtures, exhibits, and navigation lines record how
they were created and their review status.

Useful provenance fields include:

- `review_status`, which identifies locally confirmed or derived features;
- `geometry_source` and `geometry_method`, which describe how geometry was
  produced;
- `source_url`, `source_license`, and `source_attribution`, which retain the
  external source trail; and
- `source_issue_number`, `source_issue_title`, and `source_url`, which connect
  proposed features to their GitHub review history.

Read
[`DATA_SOURCES.md`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/DATA_SOURCES.md)
for the current derivation methods and review decisions.

## Report a correction or add a location

You do not need to edit GeoJSON to contribute. Use the repository's
[issue templates](https://github.com/beatybiodiversitymuseum/indoor-mapping/issues/new/choose)
to propose a new or corrected amenity or opening.

Provide as much of the following as possible:

- the visitor-facing name;
- what kind of location or feature it is;
- where a visitor should stand, look, or arrive;
- how the location was confirmed;
- whether visitors can see or access it;
- whether it should be searchable or usable as a route destination;
- its related cabinet, drawer, island, or fixture, if known; and
- photos, measurements, coordinates, landmarks, and uncertainty notes.

Indoor phone GPS can be inaccurate. When possible, take several readings and
also measure from a fixed reference such as a wall corner, doorway, column,
stair, elevator entrance, or confirmed fixture. Avoid measuring from movable
objects.

Submitted issues can be converted into candidate GeoJSON and a pull request.
The pull request is the approval gate: maintainers review and correct the
candidate data before it is merged into the canonical layers.

## Review GeoJSON directly

For a visual review of the data, load the repository's
[`preview.geojson`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/preview.geojson)
into [geojson.io](https://geojson.io/). This combined file places the main
layers in a useful drawing order so that amenities remain visible above larger
polygons.

If you propose a point directly:

- use a unique feature ID;
- keep coordinates in `[longitude, latitude]` order;
- retain the correct underground `level_id`;
- test the complete data in geojson.io; and
- do not guess at unknown fields—include a note for maintainers instead.

## Technical standards

The project is moving toward Indoor Mapping Data Format conventions while
remaining easy to review with common GeoJSON tools. Pedestrian routing is a
local extension because IMDF 1.0 does not define a standard routing-graph
layer.

Technical references:

- [OGC Indoor Mapping Data Format 1.0](https://docs.ogc.org/cs/20-094/index.html)
- [GeoJSON, RFC 7946](https://www.rfc-editor.org/rfc/rfc7946)
- [Indoor mapping repository](https://github.com/beatybiodiversitymuseum/indoor-mapping/)
