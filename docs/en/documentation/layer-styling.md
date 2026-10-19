# Layer Styling

StyleCore applies QML styles to layers added in QGIS and gives users ways to customize styles **without changing their colleagues' settings**. Maintainers can also define shared rules for consistent layer appearance.

## Automatic styling

When **Automatic styling** is enabled and you add a layer, StyleCore looks for a usable QML file. It can find one by the layer name, an explicit shared mapping, your personal override, or a File Suffix Rule. If nothing matches or none of the QML files can be loaded, it leaves the layer's current style unchanged.

Use the StyleCore toolbar's automatic-styling toggle or **Settings → Options → StyleCore** to enable or disable this behavior.

!!! note "Existing projects are preserved"
    Reopening an ordinary saved QGIS project does **not** automatically overwrite its saved layer styles. StyleCore can refresh layers in selected templates and provides **Manual Style Update** for deliberate changes to existing project layers.

## Creating and saving QML styles

Create or edit a layer's style using QGIS' normal **Layer Properties → Symbology / Labels**, then save/export it as a `.qml` file in the configured styles folder. Choose a filename that matches the layer, or set up a shared mapping or File Suffix Rule pointing to the QML.

Maintainers can also use **Developer → Save layer styles…** to select project layers and write their current styles to the configured shared folder. This may overwrite team QMLs and requires developer authorization. See [Developer Tools](developer-tools.md#save-qml-styles-from-qgis).

## Layer name matching

The simplest approach is to keep a QML file whose name matches the visible QGIS layer name in your configured styles folder:

| QGIS layer | QML file |
|---|---|
| `Buildings` | `Buildings.qml` |
| `Roads` | `Roads.qml` |
| `Survey Points` | `Survey Points.qml` |

You can give different instances of the same underlying data different layer names and their own QML files. This is useful when two templates need distinct filters or styles for the same Oracle view.

## Shared automatic layer styles

Shared rules explicitly connect a QGIS **layer name** to a particular QML, even when the QML does not have the same name as the layer.

1. Open **Settings → Options → StyleCore → Developer**.
2. Enable Developer Mode.
3. In **Shared automatic layer styles**, add or edit a layer-to-QML mapping.
4. Apply/save and confirm with the developer code.
5. Ask colleagues to reload the shared configuration to receive the updated mapping.

Shared rules live in the selected JSON, so changes can affect all users of that configuration. Use relative style paths under the shared styles folder where practical. Keep the actual QML files accessible to everyone who needs them.

## File Suffix Rules

A File Suffix Rule identifies a file-backed layer by the **ending of its filename**, together with its file extension. This works with all file formats QGIS can load.

| Suffix | File type | QML file | Example matching source |
|---|---|---|---|
| `-control-points` | `.geojson` | `Control.qml` | `survey-control-points.geojson` |
| `-survey` | `.shp` | `Survey.qml` | `region-survey.shp` |
| `-results` | `*` | `Results.qml` | `run-results.kml` or `run-results.geojson` |

A maintainer sets these fields in **Developer → File Suffix Rules** and saves the shared configuration.

### How matching works

- The **suffix** is matched against the filename **without the extension**.
- **File type** can be `.shp`, `shp`, `.geojson`, `.kml`, another extension, or `*` for any extension. The field is free text.
- Matching is case-insensitive.
- If several rules match, the **longest matching suffix** wins.
- If suffixes are equally long, a rule with a **specific extension** wins over `*`. Configuration order resolves remaining ties.

For `sample-control-points.geojson`, the suffix `-control-points` wins over `-points`. When both use `-control-points`, `.geojson` wins over `*`.

!!! note "What counts as a file source?"
    QGIS must successfully load the file as a layer first. This is not a generic Oracle table-name rule. In a GeoPackage, the source *file* is the basis of the suffix match; different internal layers may therefore match the same suffix rule.

## Style matching priority

StyleCore considers matches in this order:

1. **Personal override** for the layer and active configuration.
2. **Shared automatic layer style mapping**.
3. **File Suffix Rule** matching the file's name and extension.
4. **Layer-name QML fallback**.

If a candidate QML is missing or cannot be applied, StyleCore can fall back to another usable candidate. Within File Suffix Rules, specificity follows the rules described above.

## Personal Overrides

**Personal Overrides** let you choose your own QML for a layer while keeping the shared JSON and the team's styles unchanged.

1. Open **Settings → Options → StyleCore**.
2. In **Personal Overrides**, select **Add personal override**.
3. Choose or enter the layer name.
4. Double-click its personal-style field and select the desired `.qml`.
5. Apply/save the settings, then add the layer to see the personal rule in effect.

The override is stored in your **local QGIS profile**, scoped to the selected configuration. It applies to newly loaded matching layers when automatic styling is enabled, not to every existing saved project.

To return to team defaults, select the personal rule and choose **Reset to shared default**, or use **Reset all personal styles** to clear all personal overrides for that configuration.


## Manual Style Update

Use **Manual Style Update…** from the StyleCore toolbar menu when you want to update a layer in an **existing** QGIS project.

1. Open the menu and choose **Manual Style Update…**.
2. Select a project layer.
3. Review the suggested QML file, or browse to another `.qml`.
4. Click **Use Style**.
5. Save the QGIS project to keep that layer's updated style.

Suggestions can use the visible QGIS layer name or, for suitable Oracle-backed layers, the underlying table/view name. Applying a style is **opt-in for that individual layer**. It does not create a permanent Oracle source association or automatically change other projects.
