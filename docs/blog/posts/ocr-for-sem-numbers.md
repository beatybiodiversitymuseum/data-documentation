---
title: Running OCR on SEM Numbers
date: 2025-07-09
authors: [phb]
description: >
    Running OCR on images that have data "printed" on the image itself to include in metadata.
categories:
  - General
search:
  # boost: 0.01  # Lower boost
  exclude: true
---

There are a series of images that have SEM numbers directly on the specimens. Ideally, it would be helpful to run OCR on the images and extract the SEM number programmatically.

The process that I'm developing for OCR basically looks like:
- Take a best guess using Photoshop at the text colour since it's in a magenta range
- Masking the image so that text not within the magenta range is taken out
- Refining the mask by expanding the magenta range to the sampled area
- Guessing the text regions by height to width ratio
- Cropping the text regions and running OCR
- Accepting the OCR if it has reasonable and well-formatted text
