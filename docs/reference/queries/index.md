---
title: "Search the database schema"
tags:
    - queries
    - search
    - schema
---
## Introduction
Queries are the main way of finding data in the database from a collections curator or internal researcher perspective. They are a specific method of searching through the database's tables where you use Boolean logic to filter results. Queries are used in many different parts of the Specify 7 system, and this section is here to help you design, build and save your queries.

## Search the Collection Schemas
Each collection has their own configuration of the underlying database structure and tables, called a "schema." This is a quick searchable reference of each collection's database schema.

- [Algae](algae/index.md)
- [Birds](birds/index.md)
- [Bryophytes](bryophytes/index.md)
- [Entomology](entomology/index.md)
- [Fishes](fishes/index.md)
- [Fungi](fungi/index.md)
- [Herpetology](herpetology/index.md)
- [Lichen](lichen/index.md)
- [Mammals](mammals/index.md)
- [Marine Invertebrates](miv/index.md)
- [Paleontology](paleontology/index.md)
- [Teaching](teaching/index.md)

## Extended Search

<p>This form of advanced searching allows you to fine-tune results.</p>
<p>White space acts as an <strong>AND</strong> operator, while a single pipe (<code>|</code>) character acts as an <strong>OR</strong> operator. To escape white space, use double quote ex. <code>="scheme language"</code> for exact match.</p>
<table><thead><tr><th>Token</th><th>Match type</th><th>Description</th></tr></thead><tbody><tr><td><code>jscript</code></td><td>fuzzy-match</td><td>Items that fuzzy match <code>jscript</code></td></tr><tr><td><code>=scheme</code></td><td>exact-match</td><td>Items that are <code>scheme</code></td></tr><tr><td><code>'python</code></td><td>include-match</td><td>Items that include <code>python</code></td></tr><tr><td><code>!ruby</code></td><td>inverse-exact-match</td><td>Items that do not include <code>ruby</code></td></tr><tr><td><code>^java</code></td><td>prefix-exact-match</td><td>Items that start with <code>java</code></td></tr><tr><td><code>!^earlang</code></td><td>inverse-prefix-exact-match</td><td>Items that do not start with <code>earlang</code></td></tr><tr><td><code>.js$</code></td><td>suffix-exact-match</td><td>Items that end with <code>.js</code></td></tr><tr><td><code>!.go$</code></td><td>inverse-suffix-exact-match</td><td>Items that do not end with <code>.go</code></td></tr></tbody></table>

## Save Queries
Once you have created a query that you're satisifed with and would like to reuse, you can [save your query](saved-queries.md). 