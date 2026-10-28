# Layer Styling

StyleCore uses **QML files** to style newly added QGIS layers consistently. Shared rules are maintained centrally while Personal Overrides stay local.

## 1. Create a QML style

1. Style a layer under **Layer Properties → Symbology / Labels**.
2. Export its style as a `.qml` file in the configured `layer_styles` folder.
3. If the QML filename matches the layer name, no additional rule is needed.
4. Add a new matching layer to test it.

## 2. Automatic style selection

| Priority | Source | Example |
|---|---|---|
| 1 | Personal Override | Your own `Buildings.qml` |
| 2 | Shared automatic layer style | `Buildings` → `Office_Buildings.qml` |
| 3 | File Suffix Rule | `survey-points.geojson` → `Points.qml` |
| 4 | Matching QML filename | `Roads` → `Roads.qml` |

## 3. Shared automatic layer styles

<figure class="sc-shot "><img src="../../assets/images/screenshots/developer-shared-styles.png" alt="Shared rules"><figcaption>Associate the visible layer name with a specific QML file.</figcaption></figure>

1. Open **Settings → Options → StyleCore** and enable Developer Mode.
2. Add or select a row in **Shared automatic layer styles**.
3. Enter the layer name and QML, save with the developer code, then test with a new layer.

## 4. File Suffix Rules

<figure class="sc-shot "><img src="../../assets/images/screenshots/developer-file-suffix-rules.png" alt="Suffix rules"><figcaption>Use the source filename rather than the visible layer name for matching.</figcaption></figure>

1. Open **Developer → File Suffix Rules** and click **Add suffix**.
2. Enter the suffix, file type, and QML file, then save with the developer code.
3. Test with a matching file-based layer.

| Suffix | File type | QML | Matches |
|---|---|---|---|
| `-points` | `*` | `points.qml` | `test-points.geojson` |
| `-observations` | `.geojson` | `obs.qml` | `well-observations.geojson` |

## 5. Personal Overrides

Personal Overrides affect only your own setup, not the shared rules used by your colleagues.

<figure class="sc-shot sc-shot--small"><img src="../../assets/images/screenshots/personal-overrides.png" alt="Personal Overrides, showing individual QMLs and shared defaults."><figcaption>Personal Overrides, showing individual QMLs and shared defaults.</figcaption></figure>

1. Open **Settings → Options → StyleCore → Personal Overrides**.
2. Click **Add personal override**, choose a layer name and QML file.
3. Save and test with a new layer. Use **Reset to shared default** or **Reset all personal styles** to undo.

## 6. Manual Style Update — existing layers

<figure class="sc-shot sc-shot--small"><img src="../../assets/images/screenshots/manual-style-update.png" alt="The Manual Style Update dialog."><figcaption>The Manual Style Update dialog.</figcaption></figure>

1. Open **StyleCore → Manual Style Update…**.
2. Select an existing layer.
3. Review the suggested QML or choose a different one with **Browse…**.
4. Click **Use Style**, then save the QGIS project. This does not modify shared automatic rules.

## 7. Save shared QML from QGIS

<figure class="sc-shot sc-shot--small"><img src="../../assets/images/screenshots/developer-save-layer-styles.png" alt="Save layer styles"><figcaption>Use Save layer styles… to update shared QML files from the current project.</figcaption></figure>

1. Style the layers in QGIS and open **Save layer styles…**.
2. Select only the layers to save.
3. Confirm destination, developer code and any overwrites.
4. Test with a newly added layer or a template.
