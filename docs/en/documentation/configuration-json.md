# Configuration JSON

StyleCore configurations are JSON files. You normally do not need to edit them manually; create and manage them in [Configuration – In QGIS](configuration.md). This reference explains the file structure when reviewing an existing config, moving resources or troubleshooting a shared installation.

??? info "Example configuration (expand to view)"
    ```json
    {
      "name": "Office",
      "config_id": "unique-id-created-by-stylecore",
      "root_mode": "config_dir",
      "root_folder": "",
      "save_paths": "relative",
      "folders": {
        "styles": "layer_styles",
        "templates": "template_projects",
        "layouts": "layouts"
      },
      "style_rules": [
        {"layer": "Buildings", "style": "Buildings.qml"}
      ],
      "file_suffix_styles": [
        {"suffix": "-control-points", "extension": ".geojson", "style_filename": "ControlPoints.qml"}
      ],
      "restyle_on_open": ["Base_Map"],
      "developer_code": "set-your-own-code"
    }
    ```

## JSON fields

| JSON key | What it controls |
|---|---|
| `name` | Display name of the configuration |
| `config_id` | Unique identifier generated for a newly created configuration; helps keep personal preferences isolated |
| `root_mode` | `config_dir`: use the JSON file folder; `custom`: use a separate root |
| `save_paths` | Path storage preference for the configuration |
| `root_folder` | Resource root path when using a separate (`custom`) root |
| `folders.styles` | Resource subfolder for QML files |
| `folders.templates` | Resource subfolder for project templates |
| `folders.layouts` | Resource subfolder for print layouts and associated SVG graphics |
| `style_rules` | Shared mappings from QGIS layer name to QML path |
| `file_suffix_styles` | Shared rules that match file-backed layers by filename suffix and file extension |
| `restyle_on_open` | Names of selected templates whose existing layers can be refreshed when opened |
| `developer_code` | Confirmation code for shared developer changes |

## Shared layer mappings

In the JSON file, layer mappings will be saved as:

```json
"style_rules": [
  {"layer": "Buildings", "style": "red_build_2.qml"},
  {"layer": "Survey Points", "style": "survey_points.qml"}
]
```

The QML path can be relative to the styles folder, which makes sharing easier, or an accessible absolute path. Individual personal overrides are stored in the user's QGIS profile, **not** in `style_rules`.

## File Suffix Rules

In the JSON file, file suffix rules will be saved as:


```json
"file_suffix_styles": [
  {"suffix": "-control-points", "extension": ".geojson", "style_filename": "ControlPoints.qml"},
  {"suffix": "-points", "extension": "*", "style_filename": "GenericPoints.qml"}
]
```

The suffix is checked against the filename **without its extension**. The longest matching suffix wins; if two matching suffixes are equally long, an exact extension wins over `*`. The file must be loaded successfully by QGIS. See [File Suffix Rules](layer-styling.md#file-suffix-rules) for examples and limitations.

## Template refresh selection

In the JSON file, template refresh selections will be saved as:


```json
"restyle_on_open": ["Base_Map", "Survey_Map"]
```

Use template names without `.qgz`/`.qgs`. Only the explicitly selected, recognized templates have their existing layers refreshed on open; opening a regular saved project leaves its saved layer styling intact.

!!! warning "Editing a shared JSON by hand"
    Prefer StyleCore's Developer settings for routine changes. Saving shared settings from StyleCore checks for concurrent changes and writes the JSON safely. Back up shared settings and coordinate changes with other maintainers.
