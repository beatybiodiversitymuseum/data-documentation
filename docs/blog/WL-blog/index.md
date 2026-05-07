# Wendy Frankel's Worklearn Blog

## Week 1, May 5th - 7th

### Task

Using Specify7's API (<https://database.beatymuseum.ubc.ca/documentation/api/tables/>) to get a dataframe matching a specific query on Specify7 of the Algae population. The overall goal of this is to automate queries usually run manually on specify, and from then, automate data upload to GBIF.

The script bypasses Specify7's UI completely.

### Methods

Data was retrieved from the Beaty Biodiversity Museum's Specify 7 collection management system via its REST API. Rather than using the built-in DwCA export, records were fetched programmatically from the collectionobject table using paginated requests to avoid server timeouts, with progress saved to CSV after each page as a crash-safety measure.

Four lookup tables — taxon, geography, collector, and agent — were downloaded in full at the start of each run and stored as local cache files. Each table was transformed into a flat dictionary indexed by integer ID, which reduces tree-walking operations (finding a taxon's kingdom, or a locality's continent) from repeated HTTP calls to O(1) in-memory lookups.

Taxonomic rank resolution (kingdom through species) was handled by walking the taxon tree in-memory using parent ID pointers, matching on rank IDs. Cross-cutting concerns such as retry logic and execution timing were applied as Python decorators, keeping each function focused on a single responsibility.

### Resolved Problems

Making that many individual API calls, resolving the correct geography hierarchy and collector names, and doing a taxon lookup took forever! 500 records fetched in about 11 minutes, but that excluded taxon and geography lookup. For a collection with about 800,000 records, it would be great to make this quicker. Hence the reason why the cached tables were introduced, which, although they take a lot of time to get initially, significantly reduce per-record lookup time.

Collector names had to be resolved by joining the Collector junction table (which holds collectingEvent, agent, and orderNumber) against the Agent table, grouping by collecting event, sorting by orderNumber, and formatting as a pipe-separated string. This correctly handles the one-to-many relationship between collecting events and collectors, which the previous approach did not.

Geography hierarchy (continent, country, state) had to be resolved as well. Decided to be done cache-build time rather than per record, with rank IDs fetched dynamically from the GeographyTreeDefItem table to avoid hardcoding values that vary between Specify instances. Sensitive records were filtered out prior to output using a flag field on the collection object table.

### Next Week

Next week, I want to introduce a configuration-based schema system to formalize the structure of the output dataset. A second validation pass will then consume the schema to check types, apply constraints, and parse the dataset into a clean, validated output.

I'll also work on a hierarchical schema system, where a base schema defines shared fields and constraints common across all exports and collections, and child schemas inherit and override for specific use cases (e.g. algae vs. other collections).

Finally, I want to improve the efficiency of my algorithms. Switching to searched cached data was better, but still, there's a lot of improvements which could be made.

A longer term goal - this task is not just for algae. We'll need it for every collection, to automate data upload. Making my script transferrable across collections could require some adaptations to it - can't wait to get into it!

### Notebooks

[Week 1 – Specify7 API Exploration](https://github.com/beatybiodiversitymuseum/wendyf-worklearn)
