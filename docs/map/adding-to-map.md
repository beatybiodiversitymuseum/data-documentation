---
title: "Adding to the Map"
icon: material/map
---

The [Wayfinding Pathfinder](https://beatybiodiversitymuseum.github.io/data-documentation/map/) features a new and not-yet-debugged indoor map of the Beaty's museum floor. If you are interested in geolocation and accessibility, there are many opportunities to contribute.

## IMDF and GeoJson
The Beaty's map is based on a standard mapping format called the [Indoor Mapping Data Format](https://www.ogc.org/standards/indoor-mapping-data-format/) which uses a data type called [GeoJson](https://en.wikipedia.org/wiki/GeoJSON). These standards provide ways to format data so that many different mapping programs can interpret the data.

The Beaty has its wayfinding code available at: [https://github.com/beatybiodiversitymuseum/wayfinding](https://github.com/beatybiodiversitymuseum/wayfinding). There, you can search for "geojson" to find the [GeoJSON](https://github.com/beatybiodiversitymuseum/wayfinding/tree/main/public/geojson) files that define the museum's fixtures. We'll be adding other GeoJson files to become completely compliant with the IMDF as we work on this project.

You can play around with loading and editing GeoJson at [GeoJson.io](https://geojson.io/). Try loading some of the Beaty's GeoJson files to test it out, e.g., the [cabinet_fixture.geojson](https://github.com/beatybiodiversitymuseum/wayfinding/blob/main/public/geojson/cabinet_fixtures.geojson) file. 

If you want to add a new item to the map, you can create a new GeoJson feature in the editor at [GeoJson.io](https://geojson.io/). For example, if you would like to mark out where the bathrooms are, or where another point of interest might be, you can add points using the editor. You can also draw shapes with the editor, if you want to add more complex points of interest that have footprints. Try it out!