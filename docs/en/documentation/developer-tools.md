# Developer Tools

Use **Developer Mode** when you maintain the shared StyleCore setup. Ordinary users do not need it. Developer Mode gives access to the shared maintenance sections in StyleCore settings.

![options-developer-section.png](../../assets/images/screenshots/options-developer-section.png){ width="82%" }
*Developer Mode is enabled from the Developer section in the StyleCore settings page.*

## 1. Enable Developer Mode

1. Open **Settings → Options → StyleCore**.
2. Expand **Developer**.
3. Tick **Enable developer mode**.
4. Use the sections that appear below.
5. Save with **Apply / OK** and confirm with the developer code when prompted.

!!! warning "Developer code is a confirmation step"
    The developer code confirms shared changes in StyleCore. Real protection still comes from file and server permissions.

## 2. Know the main maintenance areas

| Area | Used for |
|---|---|
| Resource root | Change a moved or renamed shared root folder |
| Templates | Manage Active, Refresh and external templates |
| Shared automatic layer styles | Maintain layer name → QML mappings |
| File Suffix Rules | Maintain suffix-based rules |
| Save layer styles… | Write shared QML files from styled layers in QGIS |

![developer-root-folder.png](../../assets/images/screenshots/developer-root-folder.png){ width="92%" }
*Use the resource-root section when the shared resource folder moves or changes name.*

## 3. Maintain templates

![developer-templates.png](../../assets/images/screenshots/developer-templates.png){ width="92%" }
*Templates can be activated, refreshed or linked externally from one place.*

Use this section to:

1. show or hide templates in the StyleCore menu,
2. decide which templates should use Refresh,
3. add external templates,
4. edit or remove external templates.

See [Project Templates](project-templates.md) for the step-by-step workflow.

## 4. Maintain shared automatic layer styles

![developer-shared-styles.png](../../assets/images/screenshots/developer-shared-styles.png){ width="92%" }
*Use this table when the visible layer name and the QML filename do not match.*

1. Add or select a row.
2. Enter the layer name.
3. Choose the QML file with the `...` button.
4. Save with the developer code.
5. Ask colleagues to reload the configuration if needed.

See [Layer Styling](layer-styling.md).

## 5. Maintain File Suffix Rules

![developer-file-suffix-rules.png](../../assets/images/screenshots/developer-file-suffix-rules.png){ width="92%" }
*Each rule connects a filename suffix and a file type to a QML file.*

1. Click **Add suffix**.
2. Enter suffix, file type and QML file.
3. Save with the developer code.
4. Test with a matching file-based layer.

## 6. Save shared QML styles from QGIS

![developer-save-layer-styles.png](../../assets/images/screenshots/developer-save-layer-styles.png){ width="65%" }
*Use **Save layer styles…** when you want to write updated shared QML files from the current project.*

1. Style your layers in QGIS.
2. Open **Save layer styles…**.
3. Select only the layers you want to write.
4. Confirm the save and developer code.
5. Review the summary and test the result.

## 7. Remember what affects colleagues

- **Personal Overrides** do **not** affect colleagues.
- **Shared mappings**, **File Suffix Rules**, **template settings** and **saved shared QMLs** do affect colleagues after they reload the configuration.
- Replacing template or layout source files affects future uses of those resources.
