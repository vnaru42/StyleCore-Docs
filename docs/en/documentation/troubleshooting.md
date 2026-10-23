# Troubleshooting

Start by checking the **active configuration**, whether the referenced folders are accessible, and whether **Automatic styling** is enabled. Most problems can be diagnosed without changing the plugin code.

??? question "There are templates in the QGIS home screen that has been removed from shared location"
    An earlier version of StyleCore copied templates from the shared location, to make them appear in the QGIS home screen. This funktion has been removed from the plugin, when StyleCore started to handle the templates itself. These old templates can be deleted from its local location, usually: `C:\Users\(User)\AppData\Roaming\QGIS\QGIS3\profiles\default\project_templates`

??? question "I received a JSON configuration. Where do I load it?"
    In QGIS open **Settings → Options → StyleCore → Configuration**. Use **Load configuration…** or paste its local/UNC path. The file can be outside the plugin folder. See [Configuration](configuration.md#load-an-existing-configuration).

??? question "I created a configuration but there are no styles or layouts"
    New configuration creation makes the resource **subfolders**, but not the QML, QPT, SVG or QGIS project files. Add the resources to their corresponding folders. See [Configuration](configuration.md#create-a-new-configuration).

??? question "My shared configuration is temporarily unavailable"
    Reconnect the network or VPN and reload the JSON. StyleCore keeps your selected configuration path; it does not silently switch to another setup.

??? question "A colleague cannot see a shared rule change"
    Confirm that you saved to the correct shared JSON, using the developer code and appropriate write permissions. Ask the colleague to reload that configuration. Their Personal Override may take priority for the same layer.

??? question "My personal style override is not being used"
    Check the active configuration, the layer name, and the selected QML file. Automatic styling must be enabled for newly added layers. Reopening an ordinary saved QGIS project does not automatically restyle its layers.

??? question "My new layer has no automatic style"
    Check that Automatic styling is enabled, the configuration is available, and that a QML matches through the layer name, personal/shared mapping or File Suffix Rule. If no usable QML exists, StyleCore leaves the layer's appearance unchanged. See [Layer Styling](layer-styling.md).

??? question "A File Suffix Rule matches the wrong file or not at all"
    The suffix is matched against the **filename without the extension**. Confirm the source was loaded as a valid QGIS layer, and the rule's extension matches or is `*`. The longest suffix wins; for equal lengths, a specific extension wins over `*`.

??? question "My template does not appear in QGIS"
    Make sure a valid `.qgs` or `.qgz` exists in the **shared template folder** and is accessible. Templates are opened directly from the configured folder through **StyleCore → New from Template**. Check that the template is **Active** and accessible. See [Project Templates](project-templates.md).

??? question "An ordinary saved project was not restyled"
    This is expected: StyleCore preserves its saved styles. Use **Manual Style Update** to apply a style explicitly to one layer, then save that QGIS project.

??? question "A selected template is not refreshing its existing layers"
    Check the template's name under **Developer → Template refresh**, its QML availability, and the Automatic styling toggle. Only explicitly selected, recognized templates are refreshed.

??? question "The PRINT menu is empty"
    Verify that the active configuration points to an accessible layouts folder containing `.qpt` files. See [Print Layouts](print-layouts.md).

??? question "Move Item Content does not activate when opening a QPT"
    Open the QPT in QGIS Layout Designer and check that the intended map item has the exact **Item ID** `main_map`. Also check your QGIS version's Layout Designer support.

??? question "Developer changes cannot be saved"
    Confirm the code, shared filesystem permissions, and active configuration. If another person updated the JSON while you were editing, reload before making changes again.

## Report a problem

When creating a [GitHub issue](https://github.com/vnaru42/StyleCore/issues), include your QGIS version, StyleCore version, the action that failed and relevant StyleCore log messages. Remove private network paths, tokens and developer codes from anything you post publicly.

## Existing configurations after an update

Configurations created before the configuration-folder root option remain supported. If the JSON has a separate absolute resource root, it will keep using that root unless changed explicitly. To make a configuration portable, choose the configuration-file-folder root option and keep the resource subfolders next to the JSON. Back up the JSON before changing resource locations.
