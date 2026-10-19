# Project Templates

Project templates are reusable QGIS projects (`.qgz` or `.qgs`) that provide a consistent starting point for colleagues. StyleCore makes shared templates available through QGIS' regular new-project/template workflow.

## How shared templates become local templates

```text
Shared resource folder
    template_projects/
         Base_Map.qgz
                |
                | StyleCore syncs missing or updated files
                v
Each colleague's QGIS profile
    project_templates/
         Base_Map.qgz
                |
                v
QGIS New Project / Templates
```

The configured template folder is the **shared source**. StyleCore copies missing or updated `.qgz` and `.qgs` files to the standard `project_templates` directory of each user's QGIS profile. These are local copies for QGIS to discover, not a second master location.

The template still contains its own layer connections. Everyone opening it must have access to all the referenced data sources. As is normal in QGIS.

## Create a new project template

1. Create a QGIS project with the intended layers, coordinate reference system, map extent, layer order, visibility and styling.
2. Check the layer sources and avoid paths that other colleagues cannot access.
3. Save the project as `.qgz` or `.qgs` in the **configured shared template folder**.
4. Let StyleCore synchronize the shared folder to the local QGIS templates folder.
5. Open a new project from that template through QGIS and check the result.

If the templates list does not immediately refresh in a running session, reload the plugin or restart QGIS and check the configured source path.

## Update an existing template

Edit the **shared source template** when you want colleagues to receive the update. StyleCore copies it to all configuration-users again when it detects an updated source.

If you want a **edited version of shared templates**, you need to make a copy with a different name in store it in your local template folder.

A shared template update and a QML update are **different things**. Editing the `.qgz` changes the project structure; editing a referenced QML changes how StyleCore can style matching layers when rules apply.

## Template refresh: update styles when a template opens

A maintainer can choose specific templates whose existing layers should receive the latest matching QML styles on open.

1. Open **Settings → Options → StyleCore → Developer**.
2. Under template refresh, select the template names that should be checked on opening.
3. Apply/save the shared configuration and authorize the change.
4. Ensure **Automatic styling** is enabled when testing the refresh.
5. Open one of the selected templates and confirm its intended layers are styled.

The selection is stored in `restyle_on_open` in the active JSON and uses template names without `.qgz` or `.qgs`. Only selected, recognized templates are eligible for this restyling.

!!! important "Ordinary projects keep their saved styles"
    Opening an unrelated saved QGIS project does not make StyleCore restyle its existing layers. Use [Manual Style Update](layer-styling.md#manual-style-update) if you want to change a layer in an existing project.

## Multiple templates for different teams

A configuration can expose multiple shared templates, such as an office template and a field-survey template. They may use the same data sources but have differently named layers and separate QML styles, filters and visibility settings. You do not need a special inheritance system to create these differences.

Keep the templates' shared content coordinated when you edit them, and test each template after updating the source files.
