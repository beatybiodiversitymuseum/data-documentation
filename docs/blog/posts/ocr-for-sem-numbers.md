---
title: Running OCR on SEM Numbers
date: 2025-07-09
authors: [phb]
description: >
    Running OCR on images that have data "printed" on the image itself to include in metadata.
categories:
  - General
---
There are a series of images that have SEM numbers directly on the specimens. Ideally, it would be helpful to run OCR on the images and extract the SEM number programmatically.

The process that I'm developing for OCR basically looks like:
- Take a best guess using Photoshop at the text colour since it's in a magenta range