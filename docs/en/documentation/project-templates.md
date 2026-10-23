# Project Templates

Project templates (`.qgs` and `.qgz`) are shared starting points for QGIS projects. **StyleCore opens templates directly from the configured templates folder**; it does not copy them into each user's QGIS profile.

## Open shared templates

1. Keep your `.qgs` and `.qgz` files in the configured `template_projects` folder (or the folder specified in your configuration).
2. In **StyleCore → New from Template**, choose a template marked **Active**.
3. StyleCore opens it as a new, unsaved project. Save your work under a separate project filename.

A template's layer data sources must be accessible to the people using it. Prefer suitable shared or relative paths and verify them in QGIS.

## Create or update a template

1. Prepare a QGIS project with the desired layers, CRS, map extent, visibility and styling.
2. Check access to its data sources.
3. Save it as `.qgs` or `.qgz` in the shared templates folder. Subfolders can be used to organize templates.
4. Choose it from **New from Template** and verify the result.

Edit the source `.qgs`/`.qgz` to change the shared template. There is no local template synchronization step.

## Active and Template Refresh

In **Settings → Options → StyleCore**, **Active** determines whether a template is offered in StyleCore's template menu. **Refresh** is a separate option: when enabled for a template, StyleCore updates matching existing layer styles using the current QML rules when that template opens (with Automatic Styling enabled).

Templates with **Refresh** disabled retain their saved layer styling. Ordinary saved QGIS projects are not automatically restyled on opening. Use [Manual Style Update](layer-styling.md#manual-style-update) for deliberate changes in an existing project.

## Multiple templates for different teams

You can maintain office and field templates in the same shared location. Separate layer names and QML rules can support different presentation or field workflows without duplicating the entire StyleCore configuration.
