---
title: "Specify Schema Browser"
icon: material/file-tree-outline
tags:
    - queries
    - search
    - schema
---

# Specify Schema Browser

The [Specify Schema Browser](https://apps.beatymuseum.ubc.ca/metadata) is the
current searchable reference for the Beaty Biodiversity Museum's Specify
collection schemas. Use it to understand which tables, fields, relationships,
and tree ranks are available before building a query, WorkBench mapping, or
form configuration.

The browser reads collection metadata from Specify and refreshes its published
schema information daily. It replaces the static collection-schema pages that
were formerly included in this documentation.

## What a schema describes

A Specify schema describes how collection information is organized:

- **Tables** represent kinds of records, such as Collection Object, Locality,
  Collecting Event, Taxon, Agent, Determination, Preparation, Attribute, and
  Attachment.
- **Fields** store individual values on those records, such as catalog number,
  locality name, date, remarks, or coordinates.
- **Relationships** connect one table to another. Queries follow these
  connections to include information from related records.
- **Tree ranks** describe levels in hierarchical tables such as Taxon or
  Geography.

Each collection can have a different schema configuration. Always select the
collection in which you will run the query; do not assume that a field,
relationship, label, or rank found in one collection is available in another.

## Choose a collection

1. [Open the Specify Schema Browser](https://apps.beatymuseum.ubc.ca/metadata).
2. Use the **Collection** menu to select the relevant collection.
3. Wait for the collection's tables to load.

Without a search term, the left panel lists the published tables for the
selected collection. Select a table to open its details.

The browser remembers the most recently selected collection in the browser.
Confirm the selection whenever you switch collections or share instructions
with another person.

## Browse a table

Select a table from **Collection schema** to inspect:

- its familiar label and internal technical name;
- its description, when one is published;
- its schema properties;
- the fields published for that table; and
- its relationships to other tables.

Select a field or relationship in the detail panel to inspect that resource
directly. A field may show details such as its data type and whether it is
required. A relationship can show its target table and connection information.

Use table browsing when you know the general kind of record you need but do
not yet know the exact field. For example, browse **Locality** when reviewing
the location values stored on a locality record.

## Search the schema

Enter at least two characters in the search box. Search accepts:

- familiar labels shown in Specify;
- internal technical names;
- descriptions;
- relationship names; and
- tree ranks.

For example, try:

- `catalog number` to find the Collection Object catalog-number field;
- `locality` to find the Locality table, locality-related fields, and
  relationships leading to it;
- `taxon` to find taxonomic tables, fields, relationships, and ranks; or
- a technical name copied from a form, query, API response, or XML file.

Search results are separated into **Tables** and **Fields**. Select a result to
open its description, type, fields, and connections. Matching words are
highlighted in the result and detail panels.

If no result appears:

1. Confirm that the correct collection is selected.
2. Try a broader term or a familiar user-interface label.
3. Try the internal technical name, if known.
4. Search for the related table rather than the final field.
5. Remember that a very recent Specify configuration change may not appear
   until the next daily refresh.

## Rank results from a base table

While searching, use **Rank from** to choose the table where your query or
workflow begins. The browser ranks results using their relationship distance
from that table.

For most specimen queries, choose **Collection Object** because it is the
usual base table. A field reached through fewer relationships will generally
appear ahead of a similarly named field farther away.

Change the base table when your task begins elsewhere. For example:

- choose **Locality** for a locality-focused query;
- choose **Agent** when investigating people or organizations; or
- choose **Taxon** when working directly with the taxon tree.

Relationship-distance ranking helps identify a likely path, but it does not
decide which field is correct. Review the table, relationship path,
description, and data type before using a result.

## Use the browser with Query Builder

The Schema Browser is a reference; it does not create or run a Specify query.
Use it beside Specify's Query Builder:

1. Decide what each result row should represent and select that base table in
   Query Builder.
2. Select the same base table in the Schema Browser's **Rank from** menu.
3. Search for the value you want to display or filter.
4. Open the likely field and note its table and relationships.
5. In Query Builder, follow the corresponding table relationships.
6. Add the field and choose the appropriate operator or display setting.
7. Test the query with a small, recognizable result set.

### Example: add locality information

Suppose a Collection Object query needs the locality name:

1. Select the correct collection.
2. Search for `locality`.
3. Set **Rank from** to **Collection Object**.
4. Compare the Locality-related fields and inspect their table context.
5. In Query Builder, begin at Collection Object and follow the appropriate
   relationship path toward Collecting Event and Locality.
6. Add the intended Locality field.
7. Verify a few known specimens to confirm that the chosen path and field
   produce the expected value.

Do not select a field solely because its label looks right. Similar labels can
belong to different tables or represent different meanings.

## Understand labels and technical names

Specify can expose several names for the same concept:

- a user-facing label in the application;
- an internal schema or field name;
- a name used in form XML;
- a relationship name; or
- a label customized for a collection.

The Schema Browser helps resolve these differences by searching both familiar
labels and technical metadata. When documenting a workflow, record both the
user-facing label and the technical field or table name when possible.

## Use XML form-editing information

Some schema details include an **XML form editing** section with example XML
for a field or relationship. Treat this as a starting point, not a complete
form definition.

Before using generated XML:

- ensure every control ID is unique within the view;
- confirm that the suggested UI type suits the form;
- check whether a relationship control needs form-specific initialization or
  a `viewname`; and
- test the change outside production before publishing the form.

The schema service cannot infer every form-specific setting, permission, or
collection workflow.

## Data freshness and limitations

The browser publishes live collection metadata on a daily refresh cycle.
Consequently:

- recent schema or localization changes may take up to a day to appear;
- the browser shows configured metadata, not whether every field contains
  data;
- a published relationship does not guarantee that every record has a related
  record;
- permissions can affect what a user can query or edit in Specify;
- labels and descriptions can differ between collections; and
- the shortest relationship path is not automatically the curatorially
  correct path.

If the browser and Specify disagree after the refresh window, confirm the
selected collection, user permissions, current Specify configuration, and
whether the difference concerns a field label, schema definition, form
configuration, or query path.

## Related resources

- [Open the Specify Schema Browser](https://apps.beatymuseum.ubc.ca/metadata)
- [Schema Browser API documentation](https://apps.beatymuseum.ubc.ca/metadata/docs)
- [Query resources](index.md)
- [Saved queries](saved-queries.md)
- [Understanding queries](../../specify/tutorials/queries.md)
- [Using WorkBench](../../specify/tutorials/workbench.md)
