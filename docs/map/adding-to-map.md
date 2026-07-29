---
title: "Adding to the Indoor Map"
icon: material/map-marker-plus-outline
---

# Adding to the Indoor Map

The Beaty Indoor Map's data, code, documentation, validation, and review
workflow are maintained in the
[beatybiodiversitymuseum/indoor-mapping repository](https://github.com/beatybiodiversitymuseum/indoor-mapping/).
Submit map changes there rather than editing the documentation repository.

You do not need to know GeoJSON or write code to contribute. Use the
repository's
[issue templates](https://github.com/beatybiodiversitymuseum/indoor-mapping/issues/new/choose)
to propose a new or corrected amenity or opening.

## Information to collect

Provide as much of the following as possible:

- the name a visitor or staff member would recognize;
- the kind of feature or destination;
- the point where a visitor should stand, look, or arrive;
- how you confirmed the location;
- whether visitors can see or access it;
- whether visitors should be able to search or route to it;
- the related cabinet, drawer, island, or fixture, if known;
- photographs showing nearby fixed landmarks;
- measurements or coordinates; and
- any uncertainty that the reviewer should know about.

Do not invent an identifier or category when you are uncertain. A clear
plain-language description is more useful to reviewers than a guessed value.

## Confirm a location

Indoor phone GPS can be inaccurate. When possible:

1. Take more than one reading.
2. Record that the reading was taken indoors.
3. Measure from a fixed reference point such as a wall corner, doorway,
   column, stair, elevator entrance, or confirmed fixture.
4. Include a photo or marked-up floor-plan image showing the relationship to
   nearby fixed features.

Avoid measuring from chairs, signs, bins, or other movable objects.

The destination point should normally represent where a visitor stands or
looks, not necessarily the geometric centre of the object.

## Review the map data

The canonical layers are in the repository's
[`geojson` directory](https://github.com/beatybiodiversitymuseum/indoor-mapping/tree/main/geojson).
For an easy visual review, open
[`preview.geojson`](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/preview.geojson)
in [geojson.io](https://geojson.io/).

If you submit GeoJSON directly:

- copy a similar existing feature;
- assign a unique feature ID;
- use `[longitude, latitude]` coordinate order;
- retain the correct underground `level_id`;
- test the complete file in geojson.io; and
- explain any unknown or uncertain fields in plain language.

## What happens after submission

Eligible map-data issues can be converted into candidate GeoJSON. The
repository workflow updates the proposed amenity or opening layer, rebuilds
the review preview, creates a review report, and opens or updates a pull
request.

The pull request is the approval gate. Maintainers review and correct the
candidate feature before merging it into the canonical map data. Merging the
reviewed source change—not opening the issue by itself—is what updates the
authoritative dataset.

## Reference material

- [Open the Beaty Indoor Map](https://apps.beatymuseum.ubc.ca/map)
- [Indoor mapping data reference](../reference/indoor-map.md)
- [Data sources and derivation methods](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/DATA_SOURCES.md)
- [Map data dictionary](https://github.com/beatybiodiversitymuseum/indoor-mapping/blob/main/DATA_DICTIONARY.md)
