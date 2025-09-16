---
title: Creating the Herbarium Label System
date: 2025-09-16
authors: [phb]
description: >
    Making labels using InDesign and TSV/CSV as an exchange format.
categories:
  - General
search:
  # boost: 0.01  # Lower boost
  exclude: true
---

## Exchange Formats
One of the core problems in the museum right now is that there are programs and formats that people use for what I'll call "improvisational" data management, and they do not especially line up with other systems directly. Everyone is fairly used to Excel spreadsheets as an interaction metaphor. The data is very inspectable, and they can make direct changes through the variety of shortcuts that they've learned throughout the years. Getting the data clean means making the Excel document look good, and people are generally experts in their own systems.

However, Specify is not Excel. There is some ability to map Excel columns to Specify fields, but since Specify uses a relational database system, there is not as clear of a mapping between a record in a table and an Excel table. Yes, there is a tool that makes those mappings, but the mental model is quite different.

This is similar to the reason that many systems end up using JSON as an exchange format. Even though it has limited overall power, it's inspectable. I would argue that Excel (and by extension, TSV/CSV) is even more inspectable than JSON.

Seeing this, I've decided that the more we can make things translatable to Excel, the better. Even if things can supposedly "work with one click," having a clear mental model is more important to allow users the freedom to troubleshoot and amend their systems.

## Labels and InDesign
InDesign is a powerful print design tool, but it is limited in many computational respects. There is an ability to add extensions through scripts, but, like any program, unless they're very actively maintained, it's hard to keep them working. 

InDesign supports the Data Merge function, but it is barely better than a lot of scripts. However, it works well enough at the moment for a label system, and I decided to use this because there was enough familiarity with InDesign in the museum that I felt confident people could troubleshoot.

Data Merge works by reading a TSV (or a CSV, but there are many encoding problems) and mapping the columns to text variables. You can layout roughly with the text variables (although they get treated like normal text, so you can get erroneous overset text). Then, when you press "Merge", InDesign takes each row of the TSV and turns it into a separate document with the variables filled. You can then edit the document directly without any impact on the original template.

Now, Specify is integrated with JasperSoft, and that "works" too in a similar fashion. As far as I can tell, there's not a big functional difference, but InDesign is fully made for print design, vs. JapserSoft which is not a dedicated design software. Some Collections have chosen to use JasperSoft templates, and the system is basically the same.

## Next Steps
I've created a template for the Herbarium, and we'll see how it works out.