# Troubleshooting

Start with the **active configuration**, your connection to shared resources, and whether **Automatic Styling** is enabled. Use the sections below to fix the most common problems in order.

## Configuration and access

??? question "I received a JSON configuration. How do I load it?"
    1. Open **Settings → Options → StyleCore → Configuration**.
    2. Click **Load configuration…**, or paste the full JSON path into the path field and load it.
    3. Check the active configuration name, then test a shared template or QML.
    See [Configuration – In QGIS](configuration.md).

??? question "The shared JSON or network folder is unavailable"
    1. Confirm that you are connected to your workplace network/VPN.
    2. Check the shared path in File Explorer.
    3. Reload the **same JSON path** when access is restored; StyleCore remembers the selected path rather than silently switching to another configuration.

??? question "I created a configuration but there are no styles or layouts"
    StyleCore creates **resource directories** but not the QML/QPT/QGS/QGZ files. Put your files into the configured folders and try again.

## Moved folders or network drives

Use these steps if a folder was renamed, a drive letter changed (for example `P:` → `S:`), the UNC server path changed, or the resource directory was moved.

1. **Find the change:** Did the JSON file move, did the root folder move, or did a QGIS project/data source move?
2. **If using the JSON directory as root (`root_mode: config_dir`):** Move the JSON and its resource folders together. Keep subfolder names and relative layout unchanged.
3. **If using a separate root (`root_mode: custom`):** Load the configuration, open **Developer** and change the shared root path to the new accessible location; save with the developer code.
4. **If the JSON path changed:** Every colleague should use **Load configuration…** to select the JSON at its **new** location.
5. **Check references outside the root:** External template paths and absolute QML/resource paths may need updating.
6. **Test the result:** Load a style, open a template, open a QPT layout and check optional fonts.
7. **Repair QGIS project data sources separately:** StyleCore does not automatically rewrite broken file/Oracle/WMS/WFS references inside existing project files.

!!! tip "Avoid problems next time"
    Keep the JSON and resource folders together with **Use configuration file folder as resource root**, and prefer relative resource references where possible. UNC paths are often preferable to workstation-specific mapped drive letters when supported by your environment.

## Styling

??? question "A new layer does not get a QML style"
    1. Check **Automatic Styling** in the StyleCore menu.
    2. Confirm the correct JSON and shared styles folder are accessible.
    3. Check Personal Overrides, Shared Rules, File Suffix Rules and matching QML filenames in that order.
    4. Check the **StyleCore** QGIS log for missing or invalid QML paths. See [Layer Styling](layer-styling.md).

??? question "My Personal Override is not applied"
    Check the active configuration, exact layer name and chosen QML. Personal Overrides are applied to matching **newly added** layers, not automatically to all already-open project layers.

??? question "A File Suffix Rule matches the wrong source"
    Match the **filename without extension**, and ensure the extension is correct (`.geojson`, `.shp`, `*`, etc.). The longest suffix wins. For GeoPackages, the source is the **package filename**, not an internal table name.

??? question "Opening an existing project did not update its styles"
    This is expected. Existing saved project styling is preserved. Use **StyleCore → Manual Style Update…**, apply QML to the selected layer and save the project.

## Templates, layouts and fonts

??? question "A template is missing from New from Template"
    1. Check that the source `.qgs`/`.qgz` exists and is accessible.
    2. Check **Developer → Templates → Active**.
    3. If it is an external template, verify the linked path.
    4. Reopen the **New from Template** menu. See [Project Templates](project-templates.md).

??? question "A template is not refreshing its styles"
    Make sure **Refresh** is selected for this template, **Automatic Styling** is on, and you opened it specifically via **StyleCore → New from Template**. Check that matching QMLs exist.

??? question "My template opens with missing layers"
    Open the source `.qgs`/`.qgz` in QGIS and repair its **data-source paths or service connections**. A working template location alone does not guarantee all of its project data is accessible.

??? question "Print Layouts is empty or main_map does not work"
    Confirm that the configured layouts folder contains `.qpt` files. For map automation, the intended map item must have **Item ID** `main_map` (exact spelling). QGIS support for activating Move Item Content may depend on the version. See [Print Layouts](print-layouts.md).

??? question "An SVG or font is missing"
    For SVG images, check the QPT Picture **Item ID** against the `.svg` filename in the layouts folder. For fonts, put permitted `.ttf`/`.otf` files in the optional `root/fonts` directory; reload the configuration or restart QGIS if needed.

## Developer settings

??? question "Developer changes cannot be saved"
    Confirm the correct developer code, write permissions and active JSON. If another maintainer changed the shared JSON during editing, reload it before saving. See [Developer Tools](developer-tools.md).

??? question "Old template entries are still on the QGIS Welcome screen"
    This can be left over from an earlier installation that placed template copies in QGIS' local `project_templates` directory. Current StyleCore opens templates directly from their sources. Check the local QGIS profile template folder, remove only confirmed obsolete copies, and restart QGIS if needed. Do not delete your own unrelated templates.

## Report a problem

If the steps above do not help, use [Report an Issue](https://github.com/vnaru42/StyleCore/issues). Include your QGIS and StyleCore versions, steps to reproduce, and relevant QGIS StyleCore log messages. **Remove private paths, credentials, tokens and developer codes** before publishing a report.
