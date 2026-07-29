---
title: "Use GenAI with Specify"
icon: material/robot-outline
tags:
    - queries
    - search
    - schema
---

# Use GenAI with Specify

This section contains practical recipes for using GenAI as a Specify 7 support assistant for Beaty Biodiversity Museum data work.

The recipes are meant to help you ask better questions, not to replace judgment. They encourage the assistant to use Beaty documentation first, then official Specify documentation, source code, and biodiversity data standards when needed.

## Start here

Use the prompt builder when you want the quickest path:

- [Prompt builder](prompt.md)

The prompt builder lets you choose a recipe, edit the prompt in the browser, and copy the finished text into a GenAI assistant.

Use the prompt-template pages when you want to read the full recipe:

- [Prompt template overview](prompt-templates/index.md)

The template pages include the workflow checklist, common mistakes, and the copy-paste diagnostic prompt for each topic.

## What these recipes are for

Use these recipes for Specify 7 questions such as:

- Why a Query Builder result looks wrong
- How to diagnose repeated rows in a query
- How to edit or troubleshoot Specify 7 data entry forms and app resources
- How to prepare or troubleshoot a WorkBench upload
- Whether a locality problem is really a Locality, Geography, coordinate, or export-mapping problem
- How to approach taxon tree edits, moves, merges, synonymy, or rank issues
- Why a collection statistic differs from a dashboard, query, GBIF dataset, Darwin Core export, or public portal
- What information to gather before asking for help

They are especially useful when the issue touches multiple systems, such as Specify records, saved queries, reports, labels, exports, Darwin Core, GBIF, KML, or public portals.

## How to use a recipe

1. Choose the closest recipe.
2. Replace `<fill in your problem here>` at the top with the problem.
3. Read the correct process if the task is unfamiliar or high-risk.
4. Review the common mistakes list and keep anything that might apply.
5. Copy the finished prompt into your GenAI assistant.
6. Check the answer against Beaty practice, Specify documentation, and production-data risk before acting.

If you are not sure which recipe to use, start with the generic Specify 7 problem template.

## What to include

A good support prompt usually includes:

- User role or permissions
- Collection or discipline
- The exact workflow being attempted
- What you expected to happen
- What happened instead
- Exact error messages
- Saved query names, upload plans, field names, row counts, or example records
- Screenshots or export snippets when they clarify the issue
- Whether the issue affects production data, shared records, reports, labels, exports, or public-facing systems

For WorkBench uploads, include whether a small representative test batch has been mapped, validated, uploaded, and checked.

For statistics, define the count unit and scope before comparing numbers.

For locality or taxon changes, include whether the record or tree node is shared and what downstream output may be affected.

## Safety notes

Ask the assistant to flag risk before recommending changes that could affect:

- Production data
- Shared Locality, Taxon, Geography, Agent, Collecting Event, or Collection Object records
- Tree ranks or synonymy
- WorkBench uploads or Batch Edit
- SQL or API changes
- Shared saved queries
- Reports and labels
- App resources
- Darwin Core, GBIF, KML, or public portal output

For bulk edits, imports, schema changes, app-resource edits, SQL, API changes, or public-data publishing changes, test in a safe copy or non-production environment before applying changes to production.
