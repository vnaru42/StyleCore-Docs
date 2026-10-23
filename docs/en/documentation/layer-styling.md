# Layer Styling

StyleCore uses **QML files** to style newly added QGIS layers consistently. Shared rules are maintained centrally; personal overrides stay local. This page covers **creating, applying, changing and maintaining** styles.

## 1. Create a QML style

1. Open a QGIS project and style a layer using **Layer Properties → Symbology / Labels**.
2. Export its style to a `.qml` file in the configured `layer_styles` folder.
3. If the QML name matches the visible layer name, no explicit shared rule is needed.
4. Add a new matching layer to test it.

## 2. Understand automatic style selection

When a new layer is added, StyleCore tries these sources in order:

| Priority | Source | Example |
|---|---|---|
| 1 | **Personal Override** | Your own `Buildings.qml` |
| 2 | **Shared automatic layer style** | `Buildings` → `Office_Buildings.qml` |
| 3 | **File Suffix Rule** | `survey-points.geojson` → `Points.qml` |
| 4 | **Matching QML filename** | Layer `Roads` → `Roads.qml` |

If a higher-priority style cannot be used, StyleCore tries the next one.

## 3. Maintain shared automatic layer styles

![developer-shared-styles.png](../../assets/images/screenshots/developer-shared-styles.png){ width="92%" }
*Shared automatic layer styles are used when a layer name should point to a specific QML file.*

1. Open **Settings → Options → StyleCore**.
2. Enable **Developer Mode**.
3. In **Shared automatic layer styles**, add or select a row.
4. Enter the layer name and choose the QML file.
5. Save with the developer code.
6. Test by adding a new matching layer.

## 4. Maintain File Suffix Rules

![developer-file-suffix-rules.png](../../assets/images/screenshots/developer-file-suffix-rules.png){ width="92%" }
*Use File Suffix Rules when styling should depend on the source filename rather than the visible layer name.*

1. In **Developer**, go to **File Suffix Rules**.
2. Click **Add suffix**.
3. Enter the suffix, file type and target QML file.
4. Save with the developer code.
5. Test with a matching file-based layer.

Example rules:

| Suffix | File type | QML file | Matches |
|---|---|---|---|
| `-points` | `*` | `points.qml` | `test-points.geojson`, `field-points.kml` |
| `-observations` | `.geojson` | `obs.qml` | `well-observations.geojson` |
| `polygons` | `.shp` | `poly.qml` | `area_polygons.shp` |

## 5. Set a Personal Override

1. Open **Settings → Options → StyleCore → Personal Overrides**.
2. Click **Add personal override**.
3. Choose or type the layer name.
4. Choose your QML file.
5. Save and test by adding a matching layer.
6. Use **Reset to shared default** or **Reset all personal styles** to undo.

## 6. Update an existing project's layer manually

1. Open **StyleCore → Manual Style Update…**.
2. Select the layer.
3. Review the suggested QML or browse to another one.
4. Click **Use Style**.
5. Save the QGIS project.

## 7. Update a team QML safely

![developer-save-layer-styles.png](../../assets/images/screenshots/developer-save-layer-styles.png){ width="65%" }
*Use **Save layer styles…** to write updated shared QML files back to the shared styles folder.*

1. Edit the layer style in QGIS.
2. Open **Save layer styles…**.
3. Select only the layers you want to save.
4. Confirm destination, developer code and overwrites.
5. Test with a new layer or a refreshed template.
