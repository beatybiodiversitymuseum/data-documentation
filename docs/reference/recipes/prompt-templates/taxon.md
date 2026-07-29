---
title: "Taxon Tree Operation"
icon: material/file-tree-outline
---

# Taxon Tree Operation

Problem: &lt;fill in your problem here&gt;

## 1. Correct process

Use this recipe when a user is trying to perform a taxon tree operation in Specify 7, including viewing, searching, editing, moving, adding, merging, synonymizing, or troubleshooting taxon nodes.

Primary Specify reference:

- Trees in Specify: <https://discourse.specifysoftware.org/t/trees-in-specify/534>

Before recommending any change, confirm what kind of tree operation the user is attempting:

- View or search for a taxon node
- Add a new taxon node
- Edit values on an existing taxon node
- Move a node to a different parent
- Merge duplicate taxon nodes
- Synonymize one taxon to another
- Undo synonymy
- Change tree ranks or tree definition
- Import taxonomy through the WorkBench
- Query or export tree-related data

Correct general process:

1. Identify the tree and scope.

    - Confirm this is the Taxon tree.
    - Confirm the collection and discipline the user is working in.
    - Remember that the Taxon tree is scoped at the Discipline level, so changes may affect all collections within that discipline, not only the current collection.

2. Locate the relevant node.

    - Open Trees from the Specify 7 navigation.
    - Select the Taxon tree.
    - Search for the node using the tree search.
    - If needed, check whether search preferences are affecting results, such as case sensitivity, search algorithm, or whether search uses Name versus Full Name.

3. Confirm the intended operation.

    - Do not assume that “fix the taxon” means edit, move, merge, synonymize, or delete.
    - Ask what final state the user wants:

        - Should the taxon remain accepted?
        - Should it become a synonym?
        - Should it move under a different parent?
        - Should two duplicate nodes become one?
        - Should a missing rank or parent be added?
        - Should existing collection object determinations remain unchanged?

4. Check permissions and edit mode.

    - Confirm the user has permission to edit the Taxon tree.
    - Confirm no conflicting tree or form edit session is preventing edits.
    - If a tree or corresponding form is already open for editing, another view may be read-only.

5. Check rank rules before changing the tree.

    - Tree ranks must exist in the tree definition before nodes can be added at that rank.
    - Enforced ranks cannot be skipped.
    - A move may fail if it violates rank enforcement.
    - Changing ranks or tree definitions can have broad effects and should be treated as a higher-risk operation.

6. Check downstream effects.

    - Taxon tree changes can affect determinations, collection object display names, queries, reports, labels, Darwin Core exports, GBIF publishing, and public-facing data.
    - Do not recommend bulk edits, merges, synonymy changes, rank changes, SQL, or WorkBench uploads without warning the user about production-data risk.

7. Recommend the safest operation-specific path.

    - For simple value edits, edit the taxon node values.
    - For parent/child placement changes, use the tree move operation rather than editing a parent field on a form.
    - For duplicate taxa, investigate whether merge or synonymy is appropriate.
    - For accepted-name relationships, use synonymy tools rather than manually altering fields unless documentation explicitly supports that action.
    - For rank-definition problems, consult tree-definition documentation before making changes.
    - For large additions or bulk changes, consider WorkBench only after backup/testing.

8. If the issue is unclear, collect evidence before giving instructions.

    - Screenshot of the tree around the affected node
    - Exact taxon name and rank
    - Current parent and intended parent
    - Whether the taxon has children
    - Whether the taxon is accepted or synonymized
    - Whether collection objects are linked to it
    - Exact error message
    - User role and collection/discipline

## 2. Common mistakes / user-editable error descriptions

The user can add to, delete from, or check off this list before sending the problem to the agent.

Common taxon tree mistakes:

- I may be trying to edit the taxon from a form when the operation needs to be done from the tree.
- I may be trying to move a node by editing its parent field instead of using the tree move operation.
- I may be trying to add a taxon at a rank that is not present in the tree definition.
- I may be trying to skip an enforced rank.
- I may be trying to move a node under a parent with an incompatible rank.
- I may be trying to edit a tree or form while another tree/form edit session is open.
- I may not have permission to edit the Taxon tree.
- I may be looking at the right taxon name but in the wrong discipline or collection context.
- I may be confusing an accepted taxon with a synonym.
- I may be expecting synonymy to cascade automatically to child taxa.
- I may be trying to synonymize or merge a node that has children.
- I may be trying to delete a taxon that is still linked to determinations, collection objects, children, synonyms, or other records.
- I may be using the wrong search setting, such as searching Name when I should search Full Name.
- I may be seeing unexpected results because the Taxon tree is shared across collections in the same discipline.
- I may be trying to fix a Darwin Core / GBIF export problem by editing taxonomy before checking the export mapping.
- I may be trying to make a bulk taxonomy change directly in production instead of testing first.
- I may be trying to import taxonomy through WorkBench without confirming the mapping, ranks, and backup plan.
- I may be trying to change tree ranks when the issue is actually node placement, synonymy, or data entry.
- I may be assuming a display problem in queries/reports/labels means the tree itself is wrong.

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
2. The correct Specify 7 process for this kind of tree operation.
3. Step-by-step troubleshooting or fix instructions.
4. Relevant Beaty, Specify documentation, forum, GitHub issue, Darwin Core, or GBIF references.
5. Warnings about actions that could affect data integrity, permissions, tree ranks, determinations, collection objects, reports, labels, exports, public portals, or production systems.
6. What information is still missing if the issue cannot be diagnosed confidently.
7. A concise recommended next action.

Rules:

- Do not guess beyond the sources above.
- Prefer Beaty-specific documentation when the issue involves local workflows, collection practices, data standards, app resources, public data, or institutional conventions.
- Prefer official Specify documentation and forum posts for general Specify 7 tree behavior.
- Use GitHub only when documentation is insufficient, the problem appears technical, or source-code behavior matters.
- Treat Taxon tree changes as potentially high-impact because the Taxon tree is discipline-scoped and may affect multiple collections.
- Before recommending a tree edit, confirm whether the intended operation is edit, move, merge, synonymize, delete, rank change, or import.
- Before recommending a rank change, confirm that the problem cannot be solved by adding, moving, merging, or synonymizing nodes.
- Before recommending merge, synonymy, delete, SQL, WorkBench import, or bulk edit, warn about production-data risk.
- For SQL, API, WorkBench, batch edit, schema, rank-definition, or app-resource changes, recommend testing in a safe copy or non-production environment before applying changes to production.
- For Darwin Core, GBIF, and other biodiversity data publishing issues, check mappings, required terms, controlled vocabularies, identifiers, licenses, basisOfRecord, occurrenceID, scientificName, event/location fields, and any Beaty-specific export conventions before recommending taxon tree changes.
- If the answer depends on Beaty’s configuration, database schema, permissions, deployment, collection-specific setup, or local data-publishing workflow, say so clearly and tell me exactly what to check next.
