---
title: Natural Language Processing
date: 2026-03-25
categories:
  - General
search:
  # boost: 0.01  # Lower boost
  exclude: true
---

# NLP: Filtering and Distance

In today’s Bioinformatics Seminar (Room BRC 1012 at 3pm), we’ll be discussing more natural language processing (NLP) topics, in particular, filtering, tokenizing and distance metrics. The basic idea is that we want to transform free text that can include low-information words (like “the”) and turn it into high-information representations that are meaningful for a computer, if not as much for a human. As a quick example, the previous sentence might look like:

basic idea transform free text include low information word turn high information represent meaning computer human.

Unreadable to us, but easier for a computer to process. The utility of this is to be able to identify and extract high-value words. In the Beaty’s case, that might be species names, or human names, which may or may not have regular patterns that we can capture with, say, regex. Then, we want to use distance metrics to guess at word similarities.

## Notes
- [Jupyter Notebook](https://mybinder.org/v2/gh/beatybiodiversitymuseum/edit-distance-example/main?urlpath=%2Fdoc%2Ftree%2Fstart.ipynb)
- [Slides HTML](attachments/assets/10-slides.html)
- [Slides Markdown](attachments/assets/10-slides.md)