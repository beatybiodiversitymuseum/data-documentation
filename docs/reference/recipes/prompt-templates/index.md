---
title: "GenAI Prompt Templates"
tags:
    - prompt
    - genai
---

# GenAI Prompt Templates

These prompt templates help Beaty Biodiversity Museum staff ask a GenAI assistant clear, structured questions about Specify 7 workflows.

They are designed for support and troubleshooting. Each template gives the assistant enough context to check Beaty data documentation first, then official Specify documentation, source code, and biodiversity publishing standards when relevant.

## Fastest way to use them

Use the interactive prompt builder:

- [Prompt builder](../prompt.md)

Choose a recipe, fill in the bracketed fields, remove anything that is not relevant, then copy the finished prompt into your GenAI assistant.

## Choose a template

Start with the most specific template that matches the problem:

- Generic Specify 7 problem: use when the issue does not clearly fit one of the other recipes.
- Locality operation: use for Locality records, Geography confusion, coordinates, georeferencing, GEOLocate, KML, or locality-related publishing output.
- Query Builder troubleshooting: use for saved queries, filters, base tables, relationship paths, repeated rows, CSV exports, KML exports, or Record Sets created from queries.
- Collection statistics troubleshooting: use for counts, dashboards, annual reporting, collection metrics, dashboard-vs-query differences, or GBIF/public portal count differences.
- Taxon tree operation: use for taxon tree viewing, searching, editing, moving, merging, synonymy, ranks, or taxonomy imports.
- WorkBench upload: use for imports, mapping, validation, matching, upload plans, attachments, stuck validation, or bulk data-loading problems.

If more than one template seems relevant, choose the one closest to the action you are about to take. For example, if a bad query result is making a statistic look wrong, start with Query Builder. If a statistic definition is unclear, start with Collection statistics.

## Fill in bracketed fields

Square brackets mark fields for you to edit.

- Replace bracketed text with the real details when you know them.
- Leave `unknown` when that is the honest answer.
- Delete lines that are not relevant.
- Keep examples concrete: record numbers, saved query names, exact field names, error messages, row counts, screenshots, export snippets, or affected records.
- Do not include passwords, API keys, private credentials, or personal data that is not needed for the support question.

Fields such as `[Choose one or more: ...]` are menus. Pick every option that applies, or replace the whole bracket with your own wording.

Fields grouped under headings such as `Query details`, `Dataset details`, `Scope`, or `Taxon details` are prompts for evidence. Fill as many as you can. The assistant should say what is still missing if it cannot diagnose the issue confidently.

## Use the page sections

Each detailed template has three main parts:

1. Correct process: a checklist for how the workflow should be approached.
2. Common mistakes: a user-editable list of likely causes or misunderstandings.
3. Agent diagnostic recipe: the copy-paste prompt to send to an assistant.

For a quick question, use only the agent diagnostic recipe. For a higher-risk task, read the correct process and common mistakes first.

## Treat risky changes carefully

Some Specify 7 actions can affect many records or shared configuration. Be especially cautious with:

- WorkBench uploads
- Batch Edit
- SQL or API changes
- Taxon, Geography, or Locality merges
- Tree rank changes
- Shared saved queries
- Reports and labels
- App resources
- Darwin Core, GBIF, KML, or public portal output

For these cases, include the collection, discipline, permissions, target records, test-batch status, and whether the change is being tried in production. The assistant should warn before recommending actions that may affect production data, shared records, exports, or public-facing systems.

## Good prompt habits

Good prompts are specific about the goal and the evidence.

- Say what you were trying to do.
- Say what happened instead.
- Include the exact error message when there is one.
- Include one example record that should appear and one that should not, when relevant.
- Include expected and actual counts for statistics or query problems.
- Include the source file shape for WorkBench problems: file type, row count, columns, mapping, validation status, and whether a test batch was used.
- Include the downstream target when the problem involves reports, labels, Darwin Core, GBIF, KML, or a public portal.

The goal is not to make the prompt long. The goal is to give the assistant enough context to avoid guessing.
