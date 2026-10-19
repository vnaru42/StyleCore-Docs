# Print Layouts

StyleCore makes reusable QGIS **print-layout templates** (`.qpt`) available in the **PRINT** dropdown of its toolbar menu. A user can open the desired layout without browsing through folders every time.

## Open a shared print layout

1. Open or create the QGIS project you want to print from.
2. Open the **StyleCore** toolbar menu.
3. Under **PRINT**, choose one of the layouts from the configured shared `layouts` folder.
4. StyleCore creates a new layout in the current project and opens **QGIS Layout Designer**.

The layout is read directly from the configured folder. If a layout with the same name is already in the project, StyleCore gives the new one a unique name with a numeric suffix.

## Create a new shared layout

1. In QGIS, create a new print layout in **Project → New Print Layout**.
2. Set the page size, map frames, legend, scale bar, text and other items as required.
3. For maps that should be initialized by StyleCore, assign the appropriate **Item ID** in each map item's properties.
4. Export/save the layout as a **QGIS template (`.qpt`)**.
5. Place the `.qpt` file in the configured shared `layouts` folder. It will be discovered in the StyleCore PRINT menu.
6. Test the layout in a different project to verify that all intended elements behave correctly.

!!! tip "Keep source assets available"
    QPT files can refer to images, fonts and other project resources. Make those assets available to users of the shared configuration. StyleCore does not package all external dependencies automatically.

## Map Item ID rules

Use these exact IDs for StyleCore's map-handling features:

| Item ID | What happens when opening the QPT |
|---|---|
| `main_map` | Fits the map to the current QGIS map canvas, selects that item and activates **Move Item Content** when the Layout Designer supports it |
| `mini_map` | Sets the initial extent from the same QGIS canvas; does not automatically create a QGIS overview-map relationship |

In QGIS Layout Designer, click the map item, open **Item Properties**, and set its **Item ID**. The IDs are case-sensitive. StyleCore preserves the map frame's proportions when fitting the extent.

The `main_map` shortcut means you can usually start moving the map contents immediately after opening the layout. `mini_map` can be configured further using ordinary QGIS layout features.

## SVG files and Picture Item IDs

You can keep `.svg` files in the same shared layouts folder as your `.qpt` files. A Picture item in the QPT can be linked automatically when its **Item ID** matches the SVG filename without `.svg`.

```text
Shared layouts folder:
    CompanyLogo.svg

QGIS Layout Picture Item ID:
    CompanyLogo
```

StyleCore uses the matching SVG from the configured folder when it opens the layout. Exact filenames and IDs matter.

## Updating a layout

Edit the source layout in QGIS, export it as an updated `.qpt`, and replace the file in the configured shared layouts folder. Future layouts created from the StyleCore menu use the current shared QPT. **Layouts already created inside existing QGIS projects are not automatically replaced.**
