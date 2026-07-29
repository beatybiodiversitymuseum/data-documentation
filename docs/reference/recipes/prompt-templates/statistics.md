---
title: "Statistics Troubleshooting"
icon: material/chart-box-outline
---

# Statistics Troubleshooting

Problem: &lt;fill in your problem here&gt;

## 1. Correct process

Use this recipe when a user is trying to create, check, explain, export, or troubleshoot collection statistics in Specify 7.

Primary Specify references:

- Statistics Page: <https://discourse.specifysoftware.org/t/statistics-page/1135>
- Collection Preferences: <https://discourse.specifysoftware.org/t/collection-preferences/3281>
- Query Builder in Specify 7: <https://discourse.specifysoftware.org/t/query-builder-in-specify-7/289>
- Record Sets: <https://discourse.specifysoftware.org/t/record-sets/1620>
- Specify Schema & Data Model: <https://discourse.specifysoftware.org/t/view-the-specify-schema-data-model/273>

Use this recipe for problems such as:

- Collection statistics look wrong
- Dashboard totals do not match Query Builder results
- Specimen counts do not match preparation counts
- Statistics do not match public portal, GBIF, or Darwin Core exports
- Statistics are stale or not refreshing
- A statistics card/chart is missing or showing zero
- User wants a count by taxon, geography, preparation type, date, collector, collection, accession, storage, or other field
- User wants annual reports or institutional metrics
- User wants to export statistics
- User wants to know which number is “official”

Correct general process:

1. Define what statistic the user actually wants.

    - Total Collection Objects
    - Total specimens
    - Total preparations
    - Total lots
    - Total cataloged records
    - Total uncataloged records
    - Total records with images or attachments
    - Total georeferenced records
    - Total records by taxon
    - Total records by Geography or Locality
    - Total records by collecting date
    - Total records by accession
    - Total records by collector or determiner
    - Total records by preparation type
    - Total records published to GBIF or another portal
    - Total public-facing records
    - Total records matching a Beaty reporting definition

2. Define the unit of counting.

    - Collection Objects
    - Preparations
    - Specimens
    - Lots
    - Containers
    - Determinations
    - Taxa
    - Collecting Events
    - Localities
    - Attachments
    - Accessions
    - Record Sets
    - Published Darwin Core occurrences

   Do not continue until the count unit is clear. Many “wrong statistics” problems are actually disagreements about the counting unit.

3. Define the scope.

    - Which collection?
    - Which discipline?
    - Which institution/division?
    - Which date range?
    - Which taxonomic group?
    - Which preparation types?
    - Which catalog-number range?
    - Which records should be excluded?
    - Should deaccessioned, uncataloged, inactive, hidden, restricted, or unpublished records be included?
    - Should child preparations or component records be included?

4. Decide the appropriate tool.

    - Use the Specify Statistics Page for dashboard-style visualizations and reusable statistics based on customizable queries.
    - Use Query Builder for ad hoc counts, exports, and QA checks.
    - Use Record Sets for a fixed group of records.
    - Use reports or labels if the issue is output formatting.
    - Use Darwin Core / GBIF tools if the statistic is about published biodiversity data.
    - Use SQL/API only when Query Builder or the Statistics Page cannot answer the question safely or clearly.

5. Check whether the statistic is dashboard-based or query-based.

    - If it is on the Statistics Page, identify the underlying statistic card, chart, or query.
    - If it is from Query Builder, identify the base table, fields, filters, distinct/grouping behavior, and export behavior.
    - If it is from SQL/API, identify the exact logic and tables used.
    - If it is from GBIF, a portal, or Darwin Core export, identify the publication/export pipeline and refresh timing.

6. Check whether the count is affected by related-table multiplicity.

    - One Collection Object may have multiple Preparations.
    - One Collection Object may have multiple Determinations.
    - One Collecting Event may have multiple Collection Objects.
    - One Locality may be shared by multiple Collecting Events.
    - One Taxon may be linked through many Determinations.
    - One record may have multiple Attachments.

   If a query includes one-to-many related fields, it may produce repeated rows that are not duplicate Collection Objects.

7. Check dashboard settings and refresh behavior.

    - Confirm whether the Statistics Page is available to the user.
    - Confirm whether the user has permission to view or edit the Statistics Page.
    - Check Collection Preferences if totals or dashboard behavior differ from expectations.
    - Check whether preparation totals are enabled or disabled.
    - Check refresh timing before assuming the underlying data is wrong.

8. Check definitions before comparing numbers.

    - A dashboard count, Query Builder count, GBIF occurrence count, Darwin Core export count, and public portal count may all be correct but based on different definitions.
    - Never compare statistics unless the unit, scope, filters, publication status, and refresh timing match.

9. Validate the statistic with a simple query.

    - Build the simplest possible Query Builder query for the count.
    - Start from the correct base table.
    - Add only the required filters.
    - Avoid related-table fields until the baseline count is confirmed.
    - Add complexity one field/filter at a time.
    - Save or document the query if it becomes an institutional metric.

10. If the statistic is for reporting, document the definition.

    - Name of statistic
    - Purpose
    - Count unit
    - Scope
    - Included records
    - Excluded records
    - Source tool/query
    - Date generated
    - Refresh/update schedule
    - Known caveats
    - Person/team responsible

11. If the issue is public-facing, check downstream systems.

    - Darwin Core export mapping
    - GBIF dataset filters
    - Portal publication rules
    - License or restriction rules
    - Caching and indexing delays
    - Synchronization schedule
    - Differences between internal and public data definitions

12. If the issue is unclear, collect evidence before giving instructions.

    - Screenshot of Statistics Page card/chart
    - Query Builder screenshot or saved query name
    - Expected count
    - Actual count
    - Definition of what should be counted
    - Collection/discipline
    - Date range
    - Example record that should be included but is missing
    - Example record that should be excluded but is included
    - CSV export, report, portal, GBIF, or Darwin Core example if relevant

## 2. Common mistakes / user-editable error descriptions

The user can add to, delete from, or check off this list before sending the problem to the agent.

Common collection statistics mistakes:

- I may not have defined what I mean by “count.”
- I may be counting Collection Objects when I mean specimens.
- I may be counting specimens when I mean preparations.
- I may be counting lots, containers, records, or preparations interchangeably.
- I may be comparing dashboard totals to Query Builder totals without checking whether they use the same definition.
- I may be comparing internal Specify counts to GBIF, Darwin Core, or public portal counts without checking publication rules or refresh timing.
- I may be counting unpublished, restricted, deaccessioned, uncataloged, or inactive records differently than another system.
- I may be using the wrong collection, discipline, or institutional scope.
- I may be missing records because of collection-level permissions.
- I may be using a saved query whose filters I have not checked.
- I may be using a Statistics Page card without checking the underlying query or configuration.
- I may be expecting preparation totals when preparation totals are disabled in Collection Preferences.
- I may be seeing stale statistics because the dashboard has not refreshed yet.
- I may be using a Query Builder base table that does not match the statistic I want.
- I may be getting duplicate-looking rows because one Collection Object has multiple Preparations, Determinations, Attachments, or other related records.
- I may be treating repeated query rows as duplicate Collection Objects.
- I may be using distinct/grouped query behavior without understanding what is being collapsed.
- I may have included related-table fields that changed the apparent row count.
- I may be filtering on the wrong date field.
- I may be filtering on created date when I mean collecting date, cataloged date, accession date, modified date, or determination date.
- I may be filtering on Taxon when I actually need current Determination, preferred Taxon, accepted Taxon, or historical Determinations.
- I may be filtering on Geography when I actually need Locality, or vice versa.
- I may be filtering on a formatted display value instead of the stored value.
- I may be using a Record Set and assuming it updates automatically.
- I may be using a public portal or GBIF count that reflects a previous export or indexing cycle.
- I may be using a report or label output as if it were the authoritative count.
- I may be trying to solve a statistics-definition issue by changing data.
- I may be trying to solve a data-quality issue by changing the statistics query.
- I may be editing a shared dashboard/statistic without checking who else uses it.
- I may not have documented the reporting definition, filters, date generated, or source query.

## 3. Agent diagnostic recipe

You are a Specify 7 support assistant working with the Beaty Biodiversity Museum at the University of British Columbia.

Use these sources in this order:

1. Beaty Biodiversity Museum data documentation for Beaty-specific workflows, conventions, collection practices, and local configuration: <https://beatybiodiversitymuseum.github.io/data-documentation/>
2. Official Specify documentation and community forum: <https://discourse.specifysoftware.org/docs>
3. Specify 7 GitHub repository for technical debugging, source-code behavior, recent issues, and implementation details: <https://github.com/specify/specify7>
4. Darwin Core documentation for biodiversity data standard terms, definitions, and mapping guidance: <https://dwc.tdwg.org/>
5. GBIF documentation for publishing requirements, occurrence data guidance, dataset metadata, licenses, identifiers, and data-quality checks: <https://www.gbif.org/>

Please answer with:

1. The most likely cause.
2. Whether this is primarily a statistics-definition issue, dashboard/configuration issue, query-design issue, permissions issue, stale-refresh issue, export/publication issue, or actual data issue.
3. The correct Specify 7 process for producing this kind of statistic.
4. Step-by-step troubleshooting or fix instructions.
5. A recommended way to validate the count with a simple query or documented method.
6. Relevant Beaty, Specify documentation, forum, GitHub issue, Darwin Core, or GBIF references.
7. Warnings about actions that could affect shared dashboards, saved queries, reports, labels, exports, public portals, institutional metrics, or production systems.
8. What information is still missing if the issue cannot be diagnosed confidently.
9. A concise recommended next action.

Rules:

- Do not guess beyond the sources above.
- Prefer Beaty-specific documentation when the issue involves local reporting definitions, institutional metrics, collection practices, data standards, public data, export conventions, or dashboard/query conventions.
- Prefer official Specify documentation and forum posts for general Specify 7 Statistics Page, Collection Preferences, Query Builder, Record Set, export, and dashboard behavior.
- Use GitHub only when documentation is insufficient, the problem appears technical, or source-code behavior matters.
- Do not treat “collection statistics” as a single universal number. First define the count unit, scope, filters, and source.
- Do not compare two statistics until their definitions, scopes, filters, permissions, and refresh/publication timing are known.
- Before recommending changes to data, confirm whether the discrepancy is caused by query design, dashboard configuration, stale refresh, permissions, export mapping, or public-data synchronization.
- Before changing a shared Statistics Page, saved query, report, label, or institutional metric, confirm who uses it and document the change.
- If repeated rows appear in a query, check related-table multiplicity before treating records as duplicates.
- If the statistic is based on Collection Objects, avoid adding one-to-many related fields until the baseline Collection Object count is confirmed.
- If the statistic is based on preparations, confirm whether preparation totals are enabled and whether the count should include all preparations, only current preparations, or specific preparation types.
- If the statistic is public-facing, check Darwin Core export, GBIF dataset configuration, portal publication rules, caching, indexing, synchronization timing, licenses, and restrictions before recommending data changes.
- For Darwin Core, GBIF, reports, labels, public portals, and institutional reporting, check mappings, required terms, controlled vocabularies, identifiers, licenses, basisOfRecord, occurrenceID, eventDate, scientificName, locality, decimalLatitude, decimalLongitude, geodeticDatum, coordinateUncertaintyInMeters, country, stateProvince, county, municipality, higherGeography, and any Beaty-specific export conventions before treating the statistic as wrong.
- If the answer depends on Beaty’s configuration, database schema, permissions, deployment, collection-specific setup, dashboard configuration, saved queries, report definitions, export mappings, or local data-publishing workflow, say so clearly and tell me exactly what to check next.
