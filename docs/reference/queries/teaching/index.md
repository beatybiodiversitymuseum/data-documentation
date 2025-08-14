---
title: "Search the Teaching and Learning Schema"
tags:
    - queries
    - search
    - schema
icon: material/graph
---
## Introduction
This is a quick searchable reference of the database table schema. Type in the "Search..." area below to test your search. If you want to use extended search, see the [Extended Search reference below](#extended-search).

## Search
  <input type="text" id="searchInput" placeholder="Search...">
  <ul id="results"></ul>

<script type="module" src="/data-documentation/assets/js/query-browser.mjs"></script>

## Extended Search

<p>This form of advanced searching allows you to fine-tune results.</p>
<p>White space acts as an <strong>AND</strong> operator, while a single pipe (<code>|</code>) character acts as an <strong>OR</strong> operator. To escape white space, use double quote ex. <code>="scheme language"</code> for exact match.</p>
<table><thead><tr><th>Token</th><th>Match type</th><th>Description</th></tr></thead><tbody><tr><td><code>jscript</code></td><td>fuzzy-match</td><td>Items that fuzzy match <code>jscript</code></td></tr><tr><td><code>=scheme</code></td><td>exact-match</td><td>Items that are <code>scheme</code></td></tr><tr><td><code>'python</code></td><td>include-match</td><td>Items that include <code>python</code></td></tr><tr><td><code>!ruby</code></td><td>inverse-exact-match</td><td>Items that do not include <code>ruby</code></td></tr><tr><td><code>^java</code></td><td>prefix-exact-match</td><td>Items that start with <code>java</code></td></tr><tr><td><code>!^earlang</code></td><td>inverse-prefix-exact-match</td><td>Items that do not start with <code>earlang</code></td></tr><tr><td><code>.js$</code></td><td>suffix-exact-match</td><td>Items that end with <code>.js</code></td></tr><tr><td><code>!.go$</code></td><td>inverse-suffix-exact-match</td><td>Items that do not end with <code>.go</code></td></tr></tbody></table>