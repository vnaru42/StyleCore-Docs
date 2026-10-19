# Konfiguration JSON

StyleCores konfigurationer er JSON-filer. Du behøver normalt ikke redigere dem manuelt; opret og administrer dem via [Konfiguration – i QGIS](configuration.md). Denne reference forklarer filstrukturen, når du skal gennemgå en konfiguration, flytte ressourcer eller fejlfinde en fælles opsætning.

??? info "Eksempel på konfiguration (klik for at åbne)"
    ```json
    {
      "name": "Office",
      "config_id": "unique-id-created-by-stylecore",
      "root_folder": "C:/GIS/StyleCore_resources",
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

## JSON-felter

| JSON-nøgle | Funktion |
|---|---|
| `name` | Vist navn på konfigurationen |
| `config_id` | Unikt ID oprettet ved ny konfiguration; holder personlige indstillinger adskilt |
| `root_folder` | Rodmappe til styles, skabeloner og layouts |
| `folders.styles` | Undermappe til QML-filer |
| `folders.templates` | Undermappe til projektskabeloner |
| `folders.layouts` | Undermappe til printlayouts og SVG-filer |
| `style_rules` | Fælles mapping fra QGIS-lagnavn til QML-sti |
| `file_suffix_styles` | Fælles regler baseret på filnavnets endelse og filtypen |
| `restyle_on_open` | Navne på udvalgte projektskabeloner, hvor eksisterende lag kan få opdaterede styles ved åbning |
| `developer_code` | Bekræftelseskode ved fælles udviklerændringer |

## Fælles lag-mappings

I JSON-filen gemmes lag-mappings sådan:

```json
"style_rules": [
  {"layer": "Buildings", "style": "red_build_2.qml"},
  {"layer": "Survey Points", "style": "survey_points.qml"}
]
```

QML-stien kan være relativ til stylemappen, hvilket gør deling nemmere, eller en tilgængelig absolut sti. Personlige overrides ligger i brugerens QGIS-profil, **ikke** i `style_rules`.

## File Suffix Rules

Regler baseret på filendelser gemmes i JSON som:

```json
"file_suffix_styles": [
  {"suffix": "-control-points", "extension": ".geojson", "style_filename": "ControlPoints.qml"},
  {"suffix": "-points", "extension": "*", "style_filename": "GenericPoints.qml"}
]
```

Suffix kontrolleres mod **filnavnet uden filtypen**. Den længste matchende suffix vinder; ved samme længde har en konkret filtype forrang frem for `*`. QGIS skal først kunne indlæse filen. Se [File Suffix Rules](layer-styling.md#file-suffix-rules) for eksempler og begrænsninger.

## Valg af skabeloner til refresh

Valgene gemmes i JSON som:

```json
"restyle_on_open": ["Base_Map", "Survey_Map"]
```

Brug skabelonnavne uden `.qgz` eller `.qgs`. Kun udtrykkeligt valgte, genkendte skabeloner får opdateret styles på eksisterende lag ved åbning. Almindelige gemte projekter beholder deres lagstyling.

!!! warning "Manuel redigering af fælles JSON"
    Brug helst StyleCores Developer-indstillinger til almindelige ændringer. Ved gemning kontrollerer StyleCore, om andre har ændret filen, og skriver den på en sikker måde. Tag backup, og koordinér ændringer med de andre ansvarlige.
