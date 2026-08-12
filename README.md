# Welcome to the Data Documentation Repo for the Beaty Biodiversity Museum

[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v2/monitor/1njyp.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

This repository holds the source code for the museum's data documentation. This documentation includes three main components.

1. Information about the CMS system.
2. Information about the hosted portal (portal).
3. Reference information

## Contributing

Each page of the documentation will have two icons in the top-right corner (a sheet with an eyeball and a sheet with a pencil). These can be used to view and propose edits to a page.

## Local development

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install mkdocs-material mkdocs-glightbox material-plausible-plugin mkdocs-video
mkdocs serve
```

Open <http://127.0.0.1:8000>. Before publishing a change, run:

```bash
mkdocs build --strict
```

Merges to `main` publish the site through the repository's GitHub Actions
workflow; there is no separate manual deployment command.

## Feedback

Feedback is always welcome. If you spot an issue in the documentation, you may leave an issue in this repository. Alternatively, you may use the thumbs up or thumbs down buttons at the bottom of each page to leave anonymous feedback for that particular page. Thanks!
