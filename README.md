# StyleCore Documentation

This repository contains the official documentation for **StyleCore**, a QGIS plugin for managing shared layer styles, project templates, and print layouts.

## Documentation

Visit the documentation website:

**[StyleCore Docs](https://vnaru42.github.io/StyleCore-Docs/)**

## About StyleCore

StyleCore helps QGIS users and teams work with consistent styles, project templates, and print layouts through shared or local configurations.

For the plugin's source code, releases, and issue tracking, visit the [StyleCore GitHub repository](https://github.com/vnaru42/StyleCore).

## Built with

This documentation website is built using [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
## Languages

The documentation is available in **English** and **Danish**. English is the default language at the website root; Danish is available at `/da/` through the language selector. Source files live in `docs/en/` and `docs/da/`, with shared assets in `docs/assets/`.

To preview locally:

```bash
pip install -r requirements.txt
mkdocs serve
```

To publish:

```bash
mkdocs gh-deploy
```

Edit each language's Markdown files separately. The language switcher is provided by `mkdocs-static-i18n`.
