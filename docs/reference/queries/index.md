---
title: "Query resources"
tags:
    - queries
    - search
---

## Introduction

Queries are the main way of finding data in the database from a collections curator or internal researcher perspective. They are a specific method of searching through the database's tables where you use Boolean logic to filter results. Queries are used in many different parts of the Specify 7 system, and this section is here to help you design, build and save your queries.

## Specify Schema Browser

The [Specify Schema Browser](https://apps.beatymuseum.ubc.ca/metadata) is a
searchable reference for the fields and relationships available in each Beaty
collection's Specify database. A schema describes how Specify organizes
information into tables, fields, and links between related records. Because
collections can have different configurations, select the collection you are
working with before looking for a field.

Use the browser when you need to:

- find where a piece of information is stored;
- confirm the name, label, type, or description of a field;
- understand how one table relates to another before adding fields to a query;
- resolve differences between names used by Specify's interface, internal
  schema names, and XML tags; or
- check whether a field is available in a particular collection.

For example, if you want a query to include locality information but do not
know which related table or field to select, search for `locality`, review the
matching fields and their table paths, and then reproduce the relevant path in
Specify's Query Builder.

The browser refreshes its schema information from Specify daily. Recent
configuration changes may therefore take up to a day to appear. It replaces
the static collection schema pages formerly included in this documentation.

See the [Specify Schema Browser guide](schema-browser.md) for detailed
instructions on collection selection, table browsing, searching, base-table
ranking, relationship paths, XML form-editing examples, and limitations.

## Save queries

Once you have created a query that you're satisfied with and would like to reuse, you can [save your query](saved-queries.md).
