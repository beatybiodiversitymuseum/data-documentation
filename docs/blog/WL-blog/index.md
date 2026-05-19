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

## Week 2, May 12th - 14th

### Task

The main goal this week was getting the scripts working for the Algae collection, and expand into Vascular plants. This was amongst other goals representing better practices in software - refactoring, adding in testing, creating config files, and modularizing the workflow.

### Methods

Instead of one monolithic notebook, I created modules, which each now own a single responsibility. These include session.py for authentication, fetcher.py for paginated API calls, caches.py for the four lookup tables, joins.py for merging cache data into the main DataFrame, taxonomy.py for tree-walking, filters.py and transforms.py for record-level cleanup, and decorators.py for cross-cutting concerns (retry, timing). A top-level run.py orchestrates the pipeline.

I also learned how to use software that was completely new to me to make a configuration layer. Besides a standard config.yaml, I created schemas in CUE to validate, and eventually, hopefully generate my config. I created kind of a hierarchical system, where fields and constraints that are present globally exist in a base schema.cue, but Algae and Vascular plants also have unique schemas matched to them. Collection-specific files (algae-schema.cue, vasc-plant-schema.cue) extend the base via CUE's unification operator (&), adding only the fields unique to that collection. Validation runs as a pre-flight CLI step (cue vet schema.cue algae-schema.cue config.yaml) before the pipeline is invoked, although hopefully it is later automatically done. This was modelled as composition (Config has Schemas) rather than inheritance, following the "prefer composition over inheritance" principle.

Turning the notebook into individual scripts, as well as creating the schema system, were the largest two tasks of the week. However, I also created a logging system (VERY helpful for debugging!), enhanced my readme, created a newer, cleaner repository for downloads, and fixed a lot of bugs!

Finally, I adjusted existing scripts to accomadate for the Vascular Plant collection. This meant downgrading some fields I thought were global, into just algae. After also realizing column order needed to be collection-specific, vascular plant fetching works perfectly! Similar to Algae, I worked by comparing a reference CSV to the one I generated until I had a perfect match.

### Resolved Problems

Initial collector-name spot-checks showed mismatches against the reference CSV - for example, the API returned "Firstname Lastname" where the export had "Firstname M. Lastname". The agent index had been built fetching only id, firstname, lastname, omitting middleinitial. Adding the field to build_agent_index and rebuilding the agent cache resolved the mismatch. A pair of indexing bugs in the same function (reading lastname from the wrong tuple position, and an undefined agent_id) were fixed at the same time, along with a cache format mismatch where save_cache wrote JSON but load_cache expected pickle.

The caches still take forever to build, so cache handling was reworked from an all-or-nothing rebuild into a miss-aware system. When the join phase encounters a missing taxon, geography node, or collecting event during record processing, only that single node is fetched and inserted into the in-memory dict, then persisted back to the pickle on disk. A dedicated test notebook validates the miss-fetch logic by deliberately deleting known-good entries from in-memory dicts and corrupting their on-disk caches, then asserting that the pipeline re-fetches, re-inserts, and re-persists each one correctly before restoring backups. Although cache-building is still slow, knowing that this system works and is in place is really nice.

### Next Week

Unfortunately I still did not get the testing to the extent I wanted it this week, so that's first priority next week for the specify7 API exports project. Testing, along with turning everything into a library and fixing all my docstrings (I'm going to go with numpy-style for this project), is all for next week!

I do have other longer-term goals for this project - for example, setting up CI/CD on github, a version 6 of my notebook which does not contain every single function, and utilizing a better logging library. However, I'm also looking forward to getting into other projects and delegating this one to the background.

### Notebooks

[Week 2 – DwCA Export Package](https://github.com/beatybiodiversitymuseum/DwCA-API-Exports)
