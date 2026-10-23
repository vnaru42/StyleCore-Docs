# Print Layouts

StyleCore reads **QGIS print-layout templates (`.qpt`)** directly from the configured shared `layouts` folder. Users can insert a shared layout into their current project from the StyleCore menu.

## 1. Open a shared layout

1. Open the QGIS project and set the canvas to the area you want to print.
2. Open **StyleCore → Print Layouts** and choose a layout.
3. StyleCore inserts a **new layout** into the current project and opens **QGIS Layout Designer**.
4. Where a map with Item ID `main_map` exists, its extent is initialized from the canvas and **Move Item Content** is activated where supported.
5. Adjust the layout, then export or print it using QGIS.

Opening the same QPT again creates another layout with a unique name, rather than replacing the one already in the project.

## 2. Create a shared QPT template

1. In QGIS, open **Project → New Print Layout**.
2. Set page size, map frames, legend, scale bar, logos and other items.
3. Set the map **Item ID** to `main_map` for the principal map; optionally use `mini_map` for a smaller map.
4. For automatic SVG images, create Picture items with an **Item ID** that matches the SVG filename without `.svg`.
5. Save/export the layout as a **QGIS layout template (`.qpt`)**.
6. Place the QPT and any matching SVGs in the configured shared **layouts folder**.
7. Open it through **StyleCore → Print Layouts** in a separate QGIS project to test it.

## 3. Understand the Item ID rules

| Item ID | Behavior |
|---|---|
| `main_map` | Initializes extent from the current QGIS canvas, selects the map, and activates **Move Item Content** where supported |
| `mini_map` | Also initializes its extent from the canvas; does **not** automatically create an overview-map relationship |
| `CompanyLogo` | A Picture item with this ID can use `CompanyLogo.svg` from the layouts folder |

Set **Item ID** in the relevant item's **Item Properties** in Layout Designer. Names must match exactly. SVGs are discovered in the configured layouts folder, not installed automatically into other programs.

## 4. Update or maintain a layout

1. Open the source QPT/layout in QGIS and make your changes.
2. Export the updated `.qpt` to the **same shared layout location** (or use a new filename for a separate layout).
3. Check any SVG, fonts or images used by the template are available to colleagues.
4. Open the updated layout from StyleCore and confirm the map frames and picture assets.

**Already-created layouts in existing QGIS projects are not replaced automatically.** The updated QPT is used for layouts created after the change.

See [Configuration](configuration.md) for shared folder setup and [Troubleshooting](troubleshooting.md) for missing resources.
