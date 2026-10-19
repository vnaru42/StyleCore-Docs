# Configuration – In QGIS

A **configuration** tells StyleCore where to find its QML styles, QGIS project templates and print layouts, and which shared styling rules to use. It is a JSON file, but you can create and manage it using the StyleCore settings in QGIS. This page covers the QGIS workflow; [Configuration JSON](configuration-json.md) explains the file itself.

If a colleague already maintains a configuration for your team, **load that existing file from a shared location rather than making another copy**. If you are responsible for managing StyleCore at your workplace you need to create a new configuration.

For shared setups, it is usually easiest to appoint one or a few people to maintain the configuration.

---

## Load an existing configuration

1. Make sure you can access the configuration file and its linked resources, including any network folders.
2. In QGIS, open **Settings → Options → StyleCore** and expand **Configuration**.
3. Select **Load configuration…** and browse to the `.json` file. Alternatively, paste its local or UNC path into the configuration-path field and use the adjacent load button.
4. Confirm that **Active configuration** displays the correct name.
5. Check that the expected templates and PRINT layouts are available. Add a layer with a known shared style to check styling.

The file picker initially opens in StyleCore's `config/` folder, but the JSON can live anywhere you have access to. 

!!! tip "Using a team configuration"
    Keep a **single JSON file on a shared location** and give colleagues its path, for example `\\server\GIS\StyleCore\office.json`. Users normally only need read access; developers need write access to save shared configuration changes. Users must also be able to access the resource folders referenced by the JSON.

!!! warning "Disconnected network share"
    If the selected JSON becomes temporarily unavailable, StyleCore keeps the selected path until it is available again. Reconnect the network or VPN, then load it again.

---

## Create a new configuration

A new configuration is suitable for an individual setup or for the person responsible for maintaining the resources used by a team.

### 1. Choose the resource location

This is where StyleCore **will create** resource folders. Decide where the resources should live: on your own computer or on a shared drive accessible to colleagues. This location is the **root folder**. A typical structure is:

```text
StyleCore_resources/
├── layer_styles/        # QML style files
├── template_projects/   # QGS / QGZ project templates
└── layouts/             # QPT layout templates and SVG graphics
```

The subfolder names are configurable. **When you save a new configuration, StyleCore creates those resource subfolders**. It does not create your actual QML, QGS/QGZ, QPT or SVG files. Add those separately.

### 2. Use New configuration in QGIS

1. Open **Settings → Options → StyleCore → Configuration**.
2. Select **New configuration…**.
3. Enter a **Name**, choose the **Root folder**, and confirm the three resource folder names.
4. Enter a **Developer code**, and enter it again for confirmation. 
5. Click **Save configuration**, choose where to save the JSON file, and give it a meaningful name such as `office.json`.
6. The new configuration becomes active immediately. Place your QML styles, templates and layouts in the corresponding folders.

??? info "Configuration fields in QGIS"
	| Field | Example | Purpose |
	|---|---|---|
	| Name | `Office` | Shown as the active configuration in QGIS |
	| Root folder | `C:/GIS/StyleCore_resources` | Base location for resource folders |
	| Styles folder | `layer_styles` | Where StyleCore looks for QML styles |
	| Templates folder | `template_projects` | Source folder for shared QGIS project templates |
	| Print layouts folder | `layouts` | Folder containing QPT and related SVG files |
	| Developer code | Set by the maintainer | Confirms changes to shared settings |

!!! info "Developer code and permissions"
    The code is a confirmation mechanism inside StyleCore, **not a substitute for file permissions**. For shared resources, use server or folder permissions to control who can modify the JSON and QML files.

### 3. Share the configuration with colleagues

Put the JSON and resources somewhere colleagues can reach, share the **path to the JSON**, and ask them to load it from **Configuration**. Avoid distributing independent copies if you want everybody to receive shared changes. When a maintainer updates the JSON, colleagues should reload that configuration to pick up the new settings.

---

## Understand local and shared resources

StyleCore uses three different locations with different purposes:

| Location | What is stored there? | Who is affected? |
|---|---|---|
| Active configuration JSON | Shared mappings, File Suffix Rules, selected template refresh, resource paths | Everyone using that shared JSON after reloading |
| Resource root folders | Actual QML files, `.qgs`/`.qgz` templates, `.qpt` layouts and SVG files | Everyone with access to the folders |
| Your QGIS profile | Selected configuration path, automatic-styling toggle, personal style overrides | Only your own QGIS profile |

Project templates are a special case: StyleCore **copies** project templates from the configured resource folder into each user's local QGIS `project_templates` directory. QML and QPT files are used from their configured locations rather than being included inside the JSON.

## Switch between configurations

Use **Settings → Options → StyleCore → Configuration → Load configuration…** or the path field to select a different JSON. Each setup can point to different root folders and contain different shared rules, templates and layouts. Your personal style overrides are scoped to the configuration you selected, so preferences for one setup do not spill into another.

## Maintain a shared configuration

The **Developer** section contains controls for the shared root, layer-to-QML mappings, File Suffix Rules and template-refresh selections. An authorized maintainer can make changes and save them to the selected JSON. Shared settings saved in Developer Mode are written to the active JSON; colleagues using that file can load the updated settings. Other users can continue working with personal overrides without editing that file.

See [Layer Styling](layer-styling.md), [Project Templates](project-templates.md), [Print Layouts](print-layouts.md) and [Developer Tools](developer-tools.md) for instructions on managing these resources.

---

For the structure, fields and examples inside the file itself, see [Configuration JSON](configuration-json.md).
