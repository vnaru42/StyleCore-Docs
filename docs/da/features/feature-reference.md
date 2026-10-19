# StyleCores funktioner

Et samlet overblik over StyleCores funktionalitet.

## Konfiguration

| Funktion | Beskrivelse |
|---|---|
| Opret konfiguration | En komplet JSON-konfiguration kan oprettes fra QGIS-indstillingerne. |
| Indlæs konfiguration | Vælg en eksisterende JSON-fil, eller opret en ny i indstillingsdialogen. |
| Lokale eller fælles rodmapper | Styles, skabeloner og layouts findes relativt til en konfigurerbar rodmappe. |
| Skift konfiguration | Brug **Load configuration…** til at vælge en anden JSON uden at ændre pluginets kode. |
| Husk aktiv konfiguration | Den senest valgte filsti huskes, også hvis et netværksdrev midlertidigt ikke er tilgængeligt. |

**Læs mere:** [Konfiguration – i QGIS](../documentation/configuration.md) · [Konfiguration JSON](../documentation/configuration-json.md)

---

## Lagstyling

| Funktion | Beskrivelse |
|---|---|
| Automatisk lagstyling | Anvend matchende QML-styles på nye lag. |
| Slå automatisk styling til/fra | Funktionen kan aktiveres eller deaktiveres uden at afinstallere StyleCore. |
| Manual Style Update | Vælg aktivt en QML til et bestemt eksisterende lag. |
| Personal Style Overrides | Brug en personlig QML til den aktive konfiguration uden at ændre den fælles JSON. |
| File Suffix Rules (alle QGIS-understøttede filtyper) | Match på suffix og filtype (eller `*`); den længste suffix har forrang. |
| Gem aktuelle lagstyles | En udvikler kan eksportere de valgte QGIS-lags styling til fælles QML-filer. |
| Fælles automatiske lag-mappings | Udviklere kan forbinde lagnavne med QML-filer i den fælles JSON. |

**Læs mere:** [Lagstyling](../documentation/layer-styling.md) · [Udviklerværktøjer](../documentation/developer-tools.md)

---

## Projektskabeloner

| Funktion | Beskrivelse |
|---|---|
| Fælles skabeloner | Skabeloner fra den konfigurerede rodmappe bliver tilgængelige for brugerne af den fælles StyleCore-opsætning. |
| Synkronisering | Manglende eller opdaterede `.qgs`/`.qgz`-filer kopieres til QGIS' standardmappe til skabeloner. |
| Selektiv refresh ved åbning | Eksisterende lag får kun opdaterede styles i genkendte skabeloner valgt under `Template refresh`. |

**Læs mere:** [Projektskabeloner](../documentation/project-templates.md)

---

## Printlayouts

| Funktion | Beskrivelse |
|---|---|
| Print med ét klik | Opret et almindeligt printlayout direkte fra StyleCore-menuen. |
| Åbn fælles QPT-layouts | **PRINT**-menuen viser layouts fra den konfigurerede fælles mappe. |
| Initialisering af `main_map` | Tilpas til kortvinduet, vælg kortelementet, og aktivér **Move Item Content**, hvor det understøttes. |
| Initialisering af `mini_map` | Tilpas det pågældende kort til kortvinduets udsnit ved oprettelse. |
| Automatisk SVG-tilknytning | Knyt SVG-filer til Picture-elementer, når filnavne matcher Item ID'er. |

**Læs mere:** [Printlayouts](../documentation/print-layouts.md)

---

## Andre nyttige funktioner

- **Beskyttelse af gemte projekter:** Styles i almindelige gemte projekter bevares ved genåbning.
- **Styleprioritering:** Personlige overrides har forrang over fælles mappings; derefter følger suffix-regler og match på lagnavn.
- **Unikke layoutnavne:** Hvis layoutnavnet allerede findes, tilføjes et nummer.
- **QGIS-sprog:** Pluginets oversættelser følger de understøttede QGIS-sprogindstillinger.
