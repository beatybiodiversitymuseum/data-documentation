---
title: Learning how to batch edit for the first time
date: 2025-07-09
authors: [phb]
slug: learning-to-batch-edit
description: >
    Batch edits are included in the latest Specify.
categories:
  - General
---

Notes from today's Specify 7.11 release with the new Batch Edit feature:

- Queries are required to be saved before running a batch edit
- There is a limit to the number of characters in a SEM# query (likely same as Acession#, 65 000 chars)
- Validation is required before committing, revalidation is applied to all cells again after error fixing (I've requested this be limited to modified cells)
- After a commit it asks you to potentially create a Record Set (big blue button), but this is not necessary to make the commit complete. You can just press close.
- There is only one worker for uploads (running a separate docker instance) so it stops other users from uploading
- I broked the Entomology updates into batches of 3000 on Excel by just highlighting the cell I'm currently on. It's slow and annoying and I'll consider using the API later, but for now it's probably useful to go through a frustrating process to work out the bugs for end users.
- Highlighting became annoying, so I ended up making a column on the far right and put an "X" in it, scrolled 3000 cells down, put another "X" there, then, pressed command-up to get to the first "X", paste overtop of the second "X", so it basically gave me an automatic 3000 cell length marker.
- Copied the SEM#s into a text document and find-replaced return with comma to get into the SEM In field
- Save -> Validate -> Fix Errors -> Validate -> Commit