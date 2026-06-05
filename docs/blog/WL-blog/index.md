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

## Week 3, May 19th - 22nd

### Tasks

Within the DwCA export project, the biggest architectural shift was designing and building generator.py, which pulls field definitions (aka, columns which we want to get) directly from the Specify API's saved query endpoint rather than having users hand-author query fields. This shifts the source of truth from config.yaml (which is now slimmed down and kept to only essential fields) to the actual query from Specify.

Shifting into the next project as part of this position, I spent awhile looking into LangGraph and SAM3, and figuring out how they would fit into an OCR (Optical Character Recognition) pipeline.

### Methods

The core of this week's work was building generator.py around the Specify saved query API. The /api/specify/spquery/{id}/ endpoint returns a fields array where each entry carries a stringid, and a position for column ordering. The stringid_to_api_name() function translates each stringid into the field name that the ?fields= parameter expects.

Query fields are classified into three categories during generation: join outputs, which appear in the saved query for column ordering only and are never fetched directly from the API; temporaries, where isdisplay=False signals a field fetched for pipeline use (a join key or filter flag) and dropped before the final CSV; and direct display fields, which are both fetched and kept in the output. A staleness check is run with is_runconfig_stale(), a function comparing file modification times, which ensures the generator only runs when config.yaml or a names file is newer than the existing runconfig.yaml.

Because Specify scopes saved queries to their owner collection, a session authenticated for one collection cannot read another's query. The generator therefore logs in once per collection, fetches the query, then discards the session (login step is part of the collection loop rather than a one-time startup action). Collection and query IDs were moved out of hardcoded config into .env variables, resolved at runtime via resolve_collection_id() and resolve_query_id().

On the LangGraph and SAM2 side, initial research focused on understanding how the two tools might slot into an OCR pipeline for natural history specimen labels, though implementation work had not yet begun by the end of the week.

### Resolved Problems

The /api/specify/spquery/{id}/ endpoint returns a fields array, however, 'columnalias' (the human-readable name present in Specify query outputs) is always null. To handle this, each collection gets a hand-authored <collection-name>-names.yaml file mapping stringid to output name, which the generator merges with the API response at generation time.

Besides this, I spent some time figuring out the capabilities and limitations of CUE, hoping my CUE files would be able to make the query API calls (see here: <https://developers.cuedesk.com/flows/http-requests>) and generate the runconfig.yaml. Eventually though, I had to abandon that idea in favor of keeping everything in Python.

### Next Week

Next week I dive fully into an OCR pipeline capable of extracting text from Herbarium specimen images. This would be hugely helpful to the museum as we have ~48,000 specimen images (see here: <https://collections.beatymuseum.ubc.ca/collection/b44fcb7f-1227-4fa3-8ed2-de27aabb06e0/specimens?view=gallery>).

Parts of this pipeline will incorporate LangGraph and SAM3, so learning about those software is a major goal of next week. I think OCR specifically is a rapidly evolving technology because its so essential not only in museums, but so many other fields as well.

### Notebooks

[Week 3 – DwCA Export Package](https://github.com/beatybiodiversitymuseum/DwCA-API-Exports)

## Week 4, May 26th - 28th

### Tasks

Rather than going straight into an OCR pipeline using Langgraph, this week I collaborated on a pipeline which uses Langgraph, but is designed to resolve duplicate localities.

### Methods

The Langgraph docs were a big help when learning and constructing the graph (<https://docs.langchain.com/oss/python/langgraph/overview>). In the system we created, Langgraph acts as an orchestrator, pulling specimen records using Specify's API, sending them through nodes which find candidate locality matches, and searching for different types of matches within candidate groups.

### Resolved Problems

One of the problems I wanted to highlight for this week was the algorithm which sorts candidate match groups into different levels of matches. The end result we wanted would go through a list of candidates and sort into three groups: perfect matches, spelling matches, and no matches. Perfect matches would be those in which all columns were exactly the same, spelling matches where all columns were the same but locality name may have different cases (e.g. 'Vancouver' vs. 'vancouver'), and no matches where localities, despite possibly sharing a name, were proven to be different by other columns.

The pseudocode / half real-code solution we worked on ended up looking like this:

while candidate_list:
    c = candidate_list.pop(0) #pops off the first locality on the list

    staged_perfect_matches = []
    staged_no_case_matches = []
    staged_no_match = []

    #first for loop to test for perfect equivalency

    for i in candidate_list: #for every candidate in candidate_list, test c against them
        if complete (all columns) match i,c:
            add i (using index) to staged_perfect_matches
            add c to staged perfect matches
        else:
            pass #should move onto testing the next condition - no case match
    for i in candidate_list:
        if i.name.lower == c.name.lower AND all other columns match:
            add i (using index) to staged_perfect_matches
            add c to staged perfect matches
        else:
            add c to staged_no_match

And this, once turned into functioning code, ended up working quite well.

### Next Week

Despite figuring out our sorting algorithm, this project still has a lot more left to do within it! Next steps involve incorporating an LLM and figuring out what happens after candidates have been sorted into groups.

### Notebooks

[Week 3 – Langgraph Locality Orchestration](https://github.com/beatybiodiversitymuseum/Orchestration)
