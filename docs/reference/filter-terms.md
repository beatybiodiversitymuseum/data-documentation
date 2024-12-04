---
title: "Portal Filter Terms"
icon: material/filter
tags: 
    - dictionary
---

# Portal Filter Terms

!!! note

    `?` is the wildcard for a single character
    `*` is the wildcard for one or more characters

| Term | Wildcards Supported? | Description |
| ---- | -------------------- | ----------- |
| Text Search | :x: | Simple full-text search parameter. The value for this parameter can be a simple word or a phrase. |
| Catalogue Number | :white_check_mark: | An identifier of any form assigned by the source within a physical collection or digital dataset for the record which may not be unique, but should be fairly unique in combination with the institution and collection code. |
| Dataset | :x: | The exact name of the dataset. |
| Verbatim Scientific Name | :white_check_mark: | The scientific name provided to GBIF by the data publisher, before interpretation and processing by GBIF. |
| State province | :white_check_mark: | The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs. This term does not have any data quality checks; see also the GADM parameters. |
| Recorded by | :white_check_mark: | The person(s) who recorded the occurrence. |
| Record Number | :white_check_mark: | An identifier given to the record at the time it was recorded in the field. |
| Identified by | :white_check_mark: | The person(s) who provided the taxonomic identification of the occurrence. |
| Basis of record | :x: | Basis of record, as defined in the BasisOfRecord vocabulary. Available values : PRESERVED_SPECIMEN, FOSSIL_SPECIMEN, LIVING_SPECIMEN, OBSERVATION, HUMAN_OBSERVATION, MACHINE_OBSERVATION, MATERIAL_SAMPLE, LITERATURE, MATERIAL_CITATION, OCCURRENCE, UNKNOWN. |
| Collection | :x: | A GRSciColl collection. Limited to the scope of the portal |
| Continent | :x: | Continent, as defined in the Continent vocabulary. Available values : AFRICA, ANTARCTICA, ASIA, OCEANIA, EUROPE, NORTH_AMERICA, SOUTH_AMERICA |
| Coordinate Uncertainty | :x: | The horizontal distance (in metres) from the given decimalLatitude and decimalLongitude describing the smallest circle containing the whole of the Location. Supports range queries, entered as `lower,upper`|
| Country or area | :x: | The 2-letter country code (as per ISO-3166-1) of the country in which the occurrence was recorded. |
| Depth | :x: | Depth in metres relative to altitude. For example 10 metres below a lake surface with given altitude. Supports range queries, entered as `lower,upper` |
| DWCA Extension | :x: | A known Darwin Core Archive extension RowType. Limits the search to occurrences which have this extension, although they will not necessarily have any useful data recorded using the extension. |
| Elevation | :x: |Elevation (altitude) in metres above sea level. Supports range queries, entered as `lower,upper` |
| Establishment means | :x: | Whether an organism or organisms have been introduced to a given place and time through the direct or indirect activity of modern humans, as defined in the [GBIF EstablishmentMeans vocabulary](https://registry.gbif.org/vocabulary/EstablishmentMeans/concepts). |
| Administrative area | :x: | Search based on the [GADM Global Administrative Database](https://gadm.org/) |
| Location | :x: | Geospatial search for records. See [Searching for specimens on the portal](../portal/tutorials/searching.md#using-a-coordinate-polygon) for a guide on how to use this filter |
| Higher Geography | :x: | Geographic name less specific than the information captured in the locality term. |
| Identified by ID | :x: | Identifier (e.g. ORCID) for the person who provided the taxonomic identification of the occurrence. |
| Is in cluster | :x: | **Experimental**. Searches for records which are part of a cluster. See the documentation on clustering. |
| IUCN Global Red List Category | :x: | A threat status category from the IUCN Red List. Available values: EXTINCT, EXTINCT_IN_THE_WILD, REGIONALLY_EXTINCT, CRITICALLY_ENDANGERED, ENDANGERED, VULNERABLE, NEAR_THREATENED, LEAST_CONCERN, DATA_DEFICIENT, NOT_APPLICABLE, NOT_EVALUATED |
| Locality | :white_check_mark: | The specific description of the place. |
| Media type | :x: | The kind of multimedia associated with an occurrence as defined in our MediaType enumeration. |
| Month | :x: | The month of the year. Available values: JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER |
| Occurrence id | :x: | A globally unique identifier for the occurrence record. The Beaty Museum uses UUID identifiers. Example: de9acf41-9f92-47f7-8b76-7f4544335146  |
| Issues and flags | :x: | A specific interpretation issue as defined in the OccurrenceIssue enumeration. Available values: ZERO_COORDINATE, COORDINATE_OUT_OF_RANGE, COORDINATE_INVALID, COORDINATE_ROUNDED, GEODETIC_DATUM_INVALID, GEODETIC_DATUM_ASSUMED_WGS84, COORDINATE_REPROJECTED, COORDINATE_REPROJECTION_FAILED, COORDINATE_REPROJECTION_SUSPICIOUS, COORDINATE_ACCURACY_INVALID, COORDINATE_PRECISION_INVALID, COORDINATE_UNCERTAINTY_METERS_INVALID, COORDINATE_PRECISION_UNCERTAINTY_MISMATCH, FOOTPRINT_SRS_INVALID, FOOTPRINT_WKT_MISMATCH, FOOTPRINT_WKT_INVALID, COUNTRY_COORDINATE_MISMATCH, COUNTRY_MISMATCH, COUNTRY_INVALID, COUNTRY_DERIVED_FROM_COORDINATES, CONTINENT_COORDINATE_MISMATCH, CONTINENT_COUNTRY_MISMATCH, CONTINENT_INVALID, CONTINENT_DERIVED_FROM_COUNTRY, CONTINENT_DERIVED_FROM_COORDINATES, PRESUMED_SWAPPED_COORDINATE, PRESUMED_NEGATED_LONGITUDE, PRESUMED_NEGATED_LATITUDE, RECORDED_DATE_MISMATCH, RECORDED_DATE_INVALID, RECORDED_DATE_UNLIKELY, TAXON_MATCH_FUZZY, TAXON_MATCH_HIGHERRANK, TAXON_MATCH_AGGREGATE, TAXON_MATCH_SCIENTIFIC_NAME_ID_IGNORED, TAXON_MATCH_TAXON_CONCEPT_ID_IGNORED, TAXON_MATCH_TAXON_ID_IGNORED, SCIENTIFIC_NAME_ID_NOT_FOUND, TAXON_CONCEPT_ID_NOT_FOUND, TAXON_ID_NOT_FOUND, SCIENTIFIC_NAME_AND_ID_INCONSISTENT, TAXON_MATCH_NONE, TAXON_MATCH_NAME_AND_ID_AMBIGUOUS, DEPTH_NOT_METRIC, DEPTH_UNLIKELY, DEPTH_MIN_MAX_SWAPPED, DEPTH_NON_NUMERIC, ELEVATION_UNLIKELY, ELEVATION_MIN_MAX_SWAPPED, ELEVATION_NOT_METRIC, ELEVATION_NON_NUMERIC, MODIFIED_DATE_INVALID, MODIFIED_DATE_UNLIKELY, IDENTIFIED_DATE_UNLIKELY, IDENTIFIED_DATE_INVALID, BASIS_OF_RECORD_INVALID, TYPE_STATUS_INVALID, MULTIMEDIA_DATE_INVALID, MULTIMEDIA_URI_INVALID, REFERENCES_URI_INVALID, INTERPRETATION_ERROR, INDIVIDUAL_COUNT_INVALID, INDIVIDUAL_COUNT_CONFLICTS_WITH_OCCURRENCE_STATUS, OCCURRENCE_STATUS_UNPARSABLE, OCCURRENCE_STATUS_INFERRED_FROM_INDIVIDUAL_COUNT, OCCURRENCE_STATUS_INFERRED_FROM_BASIS_OF_RECORD, GEOREFERENCED_DATE_UNLIKELY, GEOREFERENCED_DATE_INVALID, AMBIGUOUS_INSTITUTION, AMBIGUOUS_COLLECTION, INSTITUTION_MATCH_NONE, COLLECTION_MATCH_NONE, INSTITUTION_MATCH_FUZZY, COLLECTION_MATCH_FUZZY, INSTITUTION_COLLECTION_MISMATCH, POSSIBLY_ON_LOAN, DIFFERENT_OWNER_INSTITUTION | 
| Organism quantity | :x: | A number or enumeration value for the quantity of organisms. |
| Project ID | :x: | The identifier for a project, which is often assigned by a funded programme. |
| Recorded by ID | :x: | Identifier (e.g. ORCID) for the person who recorded the occurrence. |
| Sampling protocol | :white_check_mark: | The name of, reference to, or description of the method or protocol used during a sampling event. |
| Type Status | :x: | Nomenclatural type (type status, typified scientific name, publication) applied to the subject. Available values: TYPE, TYPE_SPECIES, TYPE_GENUS, ALLOLECTOTYPE, ALLONEOTYPE, ALLOTYPE, COTYPE, EPITYPE, EXEPITYPE, EXHOLOTYPE, EXISOTYPE, EXLECTOTYPE, EXNEOTYPE, EXPARATYPE, EXSYNTYPE, EXTYPE, HAPANTOTYPE, HOLOTYPE, HYPOTYPE, ICONOTYPE, ISOLECTOTYPE, ISONEOTYPE, ISOPARATYPE, ISOSYNTYPE, ISOTYPE, LECTOTYPE, NEOTYPE, NOTATYPE, ORIGINALMATERIAL, PARALECTOTYPE, PARANEOTYPE, PARATYPE, PLASTOHOLOTYPE, PLASTOISOTYPE, PLASTOLECTOTYPE, PLASTONEOTYPE, PLASTOPARATYPE, PLASTOSYNTYPE, PLASTOTYPE, PLESIOTYPE, SECONDARYTYPE, SUPPLEMENTARYTYPE, SYNTYPE, TOPOTYPE |
| Water body | :white_check_mark: | The name of the water body in which the Locations occurs. |
| Year | :x: | The 4 digit year. A year of 98 will be interpreted as AD 98. Supports range queries, entered as `lower,upper`|


