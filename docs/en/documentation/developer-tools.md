# Developer Tools

**Developer Mode** is intended for the person responsible for maintaining a StyleCore configuration and the team's shared QML resources. It is not necessary for everyday use of StyleCore.

## Enable Developer Mode

1. Open **Settings → Options → StyleCore**.
2. Expand **Developer** and enable **Developer Mode**.
3. Review the shared settings you intend to manage.
4. When saving shared changes, enter the **developer code** associated with the active configuration.

Enabling Developer Mode exposes shared editing controls. The developer code confirms saving shared changes, but it does **not** replace filesystem permissions.

## What can be managed?

| Developer control | What it changes | Detailed instructions |
|---|---|---|
| Resource root folder | Where StyleCore's shared styles, templates and layouts are found | [Configuration – In QGIS](configuration.md) |
| Shared automatic layer styles | Shared layer-name-to-QML mappings in the active JSON | [Layer Styling](layer-styling.md#shared-automatic-layer-styles) |
| File Suffix Rules | Which file sources receive a matching QML style | [Layer Styling](layer-styling.md#file-suffix-rules) |
| Template refresh | Which recognized templates refresh existing layer styles on opening | [Project Templates](project-templates.md#template-refresh-update-styles-when-a-template-opens) |
| Save layer styles | Write selected QGIS layers' current styling to shared QML files | [Save QML styles from QGIS](#save-qml-styles-from-qgis) |

All shared changes should be made against the **correct active configuration**, especially if you manage multiple office or field setups.

## Save changes to a shared configuration

1. Load the correct configuration and check its name and path.
2. Open **Developer**, make the required changes, and choose **Apply / OK** in QGIS settings.
3. Provide the developer code when prompted.
4. Ask colleagues to **reload the shared configuration** to pick up updated mappings and settings.

StyleCore saves shared settings to the active JSON and checks whether it has been changed by someone else while you were editing. If that happens, reload before making a new change to avoid overwriting your colleague's work.

!!! warning "Protect the shared resources"
    Anyone with write access to shared files may be able to change the JSON or QML outside StyleCore. Treat the developer code as a UI confirmation, not access control. Set suitable server or folder permissions and coordinate simultaneous edits.

## Save QML styles from QGIS

You can export selected layers' current QGIS styling directly to the configured shared styles location:

1. Make your symbology and label changes to the appropriate layer in QGIS.
2. Open **Settings → Options → StyleCore → Developer → Save layer styles…**.
3. Select the layers to save. They are listed in the same order as the QGIS Layers panel; nothing is selected automatically.
4. Choose **Save selected**, enter the developer code and confirm the operation.
5. Review the saved/failed/skipped summary and check the resulting QMLs.

StyleCore checks duplicate layer names, allows you to retry an incorrect developer code without losing your selection, and creates `.qml.bak` backups when overwriting existing shared QML files. Depending on the active shared mapping or File Suffix Rule, the target QML may have a different filename from the visible layer name.

!!! important "Personal and shared styles are different"
    If a layer has a Personal Override, **Save layer styles** still writes to the team's shared QML destination, not to the user's personal settings. StyleCore warns before this kind of operation.

## Which changes affect colleagues?

| Action | Saved in | Changes colleagues' setup? |
|---|---|---|
| Add/reset a Personal Override | Your QGIS profile | No |
| Change shared layer mappings | Active shared JSON | Yes, once reloaded |
| Change File Suffix Rules | Active shared JSON | Yes, once reloaded |
| Change template-refresh selection | Active shared JSON | Yes, once reloaded |
| Save a shared QML | Configured shared styles folder | Can affect styling of newly added layers or selected templates |
| Update a shared QPT or QGS/QGZ template | Configured resource folder | Affects layouts or shared templates opened later |

For everyday QML matching and overrides, see [Layer Styling](layer-styling.md). For shared JSON structure and file locations, see [Configuration – In QGIS](configuration.md).
