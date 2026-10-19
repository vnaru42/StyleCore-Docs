# StyleCores features

A complete overview of StyleCore's functionality.

##  Configuration

| Capability | Details |
|---|---|
| Create configuration | Complete configuration JSON can be created from QGIS settings.|
| Load configuration | Choose an existing JSON or create one from the settings dialog. |
| Local or shared resource roots | Resolve the styles, templates and layout folders relative to a configurable root. |
| Switch configuration | Use **Load configuration…** to change the active JSON without editing plugin code. |
| Remember the active configuration | Remember the last selected file path, including temporarily unavailable network paths. |


  **Read more:** [Configuration – In QGIS](../documentation/configuration.md) · [Configuration JSON](../documentation/configuration-json.md)

---

## Layer Styling

| Capability | Details |
|---|---|
| Automatic layer styling | Apply matching QML styles to newly added layers. |
| Toggle automatic styling | Enable or disable automatic styling without uninstalling StyleCore. |
| Manual Style Update | Explicitly apply a selected QML to known layers. |
| Personal Style Overrides | Use a local QML override for the current configuration without altering the shared JSON. |
| File Suffix Rules (all QGIS-supported file types) | Match filenames by suffix and extension (or `*`), with longest-suffix priority. |
| Save current QGIS layer styles | Developer workflow exports selected layers' styles to the configured style folder. |
| Shared automatic layer mappings | Developers map layer names to QML files in the shared JSON.|

**Read more:** [Layer Styling](../documentation/layer-styling.md) · [Developer Tools](../documentation/developer-tools.md)

---

## Project Templates

| Capability | Details |
|---|---|
| Shared templates | Templates from configured root appear as templates in all shared StyleCore installs |
| Synchronize project templates | Copy missing or newer `.qgs`/`.qgz` files into QGIS' standard template folder. |
| Selective refresh on open | Restyle existing layers only in recognized templates listed in `Template refresh`. |

**Read more:** [Project Templates](../documentation/project-templates.md)

---

## Print Layouts

| Capability | Details |
|---|---|
| One click print | Create common print layout directly from StyleCore toolbar button |
| Open shared QPT layouts | Populate the **PRINT** menu from the configured layout folder and open selected layouts. |
| `main_map` initialization | Fit to canvas, select map item and activate **Move Item Content**, where supported. |
| `mini_map` initialization | Fit the matching map item to the canvas extent on layout creation. |
| Automatic SVG links | Link SVGs to layout Picture items when filenames match Item IDs. |

**Read more:** [Print Layouts](../documentation/print-layouts.md)

---

## Other useful behavior

Additional behaviors that are helpful to know:

- **Saved project protection:** ordinary saved project styles are preserved when reopened.
- **Style selection:** personal overrides take priority over shared mappings; then suffix rules and name-based fallback are checked.
- **Unique layout names:** duplicate layout names receive a numeric suffix.
- **QGIS language integration:** interface translations follow supported QGIS language settings.


