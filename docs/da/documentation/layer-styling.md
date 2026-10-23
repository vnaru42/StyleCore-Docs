# Lagstyling

StyleCore bruger **QML-filer** til at style nye QGIS-lag ensartet. Fælles regler vedligeholdes centralt, mens Personal Overrides bliver lokale. Denne side dækker **oprettelse, brug, ændring og vedligeholdelse** af styles.

## 1. Opret en QML-style

1. Åbn et QGIS-projekt og style et lag via **Layer Properties → Symbology / Labels**.
2. Eksportér stilen til en `.qml`-fil i den valgte `layer_styles`-mappe.
3. Hvis QML-navnet matcher det synlige lagnavn, behøver du ingen ekstra regel.
4. Tilføj et nyt matchende lag for at teste det.

## 2. Forstå automatisk style-valg

Når et nyt lag tilføjes, prøver StyleCore disse kilder i rækkefølge:

| Prioritet | Kilde | Eksempel |
|---|---|---|
| 1 | **Personal Override** | Din egen `Buildings.qml` |
| 2 | **Shared automatic layer style** | `Buildings` → `Office_Buildings.qml` |
| 3 | **File Suffix Rule** | `survey-points.geojson` → `Points.qml` |
| 4 | **Matchende QML-filnavn** | Lag `Roads` → `Roads.qml` |

## 3. Vedligehold Shared automatic layer styles

![developer-shared-styles.png](../../assets/images/screenshots/developer-shared-styles.png){ width="92%" }
*Shared automatic layer styles bruges, når et lagnavn skal pege på en bestemt QML-fil.*

1. Åbn **Settings → Options → StyleCore**.
2. Slå **Developer Mode** til.
3. Tilføj eller vælg en række under **Shared automatic layer styles**.
4. Indtast lagnavnet og vælg QML-filen.
5. Gem med developer-koden.
6. Test ved at tilføje et nyt matchende lag.

## 4. Vedligehold File Suffix Rules

![developer-file-suffix-rules.png](../../assets/images/screenshots/developer-file-suffix-rules.png){ width="92%" }
*Brug File Suffix Rules, når styling skal afhænge af kildefilens navn i stedet for kun det synlige lagnavn.*

1. Gå til **File Suffix Rules** under **Developer**.
2. Klik **Add suffix**.
3. Indtast suffix, filtype og mål-QML.
4. Gem med developer-koden.
5. Test med et matchende filbaseret lag.

Eksempelregler:

| Suffix | Filtype | QML-fil | Matcher |
|---|---|---|---|
| `-points` | `*` | `points.qml` | `test-points.geojson`, `field-points.kml` |
| `-observations` | `.geojson` | `obs.qml` | `well-observations.geojson` |
| `polygons` | `.shp` | `poly.qml` | `area_polygons.shp` |

## 5. Sæt en Personal Override

1. Åbn **Settings → Options → StyleCore → Personal Overrides**.
2. Klik **Add personal override**.
3. Vælg eller skriv lagnavnet.
4. Vælg din QML-fil.
5. Gem og test ved at tilføje et matchende lag.
6. Brug **Reset to shared default** eller **Reset all personal styles** for at nulstille.

## 6. Opdater et eksisterende lag manuelt

1. Åbn **StyleCore → Manual Style Update…**.
2. Vælg laget.
3. Gennemgå den foreslåede QML eller vælg en anden.
4. Klik **Use Style**.
5. Gem QGIS-projektet.

## 7. Opdater en fælles QML sikkert

![developer-save-layer-styles.png](../../assets/images/screenshots/developer-save-layer-styles.png){ width="65%" }
*Brug **Save layer styles…** til at skrive opdaterede fælles QML-filer tilbage til den fælles styles-mappe.*

1. Redigér lagets style i QGIS.
2. Åbn **Save layer styles…**.
3. Vælg kun de lag, du vil gemme.
4. Bekræft destination, developer-kode og eventuelle overskrivninger.
5. Test med et nyt lag eller en template med Refresh.
