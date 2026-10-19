# Lagstyling

StyleCore kan anvende QML-styles på lag, der tilføjes i QGIS, og giver brugerne mulighed for at tilpasse styling **uden at ændre kollegernes indstillinger**. Den ansvarlige kan samtidig definere fælles regler, så lagene ser ens ud.

## Automatisk styling

Når **Automatic styling** er aktiveret, og du tilføjer et lag, leder StyleCore efter en brugbar QML-fil. Den kan findes via lagnavn, en fælles mapping, et personligt override eller en File Suffix Rule. Hvis intet passer, eller QML-filen ikke kan indlæses, bevares lagets nuværende style.

Brug StyleCore-menuens kontakt til automatisk styling eller **Settings → Options → StyleCore** til at slå funktionen til og fra.

!!! note "Eksisterende projekter bevares"
    Når du genåbner et almindeligt gemt QGIS-projekt, bliver de gemte lagstyles **ikke** automatisk overskrevet. StyleCore kan opdatere udvalgte skabeloner og tilbyder **Manual Style Update** til bevidste ændringer i eksisterende projekter.

## Opret og gem QML-styles

Opret eller rediger et lags style via QGIS' normale **Layer Properties → Symbology / Labels**, og gem eller eksportér den som en `.qml`-fil i den konfigurerede stylemappe. Brug et filnavn, der matcher laget, eller opret en fælles mapping eller File Suffix Rule, som peger på QML-filen.

Den ansvarlige kan også bruge **Developer → Save layer styles…** til at vælge projektlag og gemme deres aktuelle styling i den fælles mappe. Det kan overskrive teamets QML-filer og kræver udviklergodkendelse. Se [Udviklerværktøjer](developer-tools.md#gem-qml-styles-fra-qgis).

## Match på lagnavn

Den enkleste løsning er at have en QML-fil med samme navn som det synlige QGIS-lag i den konfigurerede stylemappe:

| QGIS-lag | QML-fil |
|---|---|
| `Buildings` | `Buildings.qml` |
| `Roads` | `Roads.qml` |
| `Survey Points` | `Survey Points.qml` |

Du kan give forskellige forekomster af samme datakilde forskellige lagnavne og deres egne QML-filer. Det er nyttigt, når to skabeloner eksempelvis skal have forskellige filtre eller styles til den samme Oracle-view.

## Shared automatic layer styles

Fælles regler forbinder et bestemt **QGIS-lagnavn** med en QML-fil, også når filnavnet ikke svarer til lagnavnet.

1. Åbn **Settings → Options → StyleCore → Developer**.
2. Aktivér **Developer Mode**.
3. Tilføj eller rediger en mapping mellem lagnavn og QML under **Shared automatic layer styles**.
4. Vælg Apply/Save, og bekræft med udviklerkoden.
5. Bed kollegerne indlæse den fælles konfiguration igen for at få den opdaterede mapping.

Fælles regler gemmes i den aktive JSON-fil, så ændringer kan påvirke alle brugere af konfigurationen. Brug gerne relative filstier under den fælles stylemappe, og sørg for, at alle relevante kolleger kan tilgå QML-filerne.

## File Suffix Rules

En File Suffix Rule identificerer et filbaseret lag ud fra **slutningen af filnavnet** kombineret med filtypen. Reglerne virker med filformater, som QGIS kan indlæse.

| Suffix | Filtype | QML-fil | Eksempel på match |
|---|---|---|---|
| `-control-points` | `.geojson` | `Control.qml` | `survey-control-points.geojson` |
| `-survey` | `.shp` | `Survey.qml` | `region-survey.shp` |
| `-results` | `*` | `Results.qml` | `run-results.kml` eller `run-results.geojson` |

Den ansvarlige angiver felterne under **Developer → File Suffix Rules** og gemmer den fælles konfiguration.

### Sådan fungerer matching

- **Suffix** sammenlignes med **filnavnet uden filtypen**.
- **File type** kan være `.shp`, `shp`, `.geojson`, `.kml`, en anden filendelse eller `*` for alle filtyper. Feltet er fritekst.
- Store og små bogstaver behandles ens.
- Hvis flere regler passer, vinder den **længste matchende suffix**.
- Hvis suffixerne er lige lange, har en **konkret filtype** forrang over `*`. Ved fortsat lighed afgør rækkefølgen i konfigurationen.

For `sample-control-points.geojson` vinder `-control-points` over `-points`. Hvis begge regler bruger `-control-points`, har `.geojson` forrang over `*`.

!!! note "Hvad regnes som en filkilde?"
    QGIS skal først have indlæst filen som et gyldigt lag. Reglen er ikke en generel matching af Oracle-tabelnavne. For en GeoPackage er det **selve filen**, der bruges til suffix-matching; forskellige interne lag kan derfor rammes af den samme regel.

## Prioritering af styles

StyleCore undersøger matches i denne rækkefølge:

1. **Personal override** for laget og den aktive konfiguration.
2. **Shared automatic layer style mapping**.
3. **File Suffix Rule** for filens navn og filendelse.
4. **QML-fil med samme navn som laget** som fallback.

Hvis en QML-fil mangler eller ikke kan anvendes, kan StyleCore forsøge en anden passende kandidat. Inden for File Suffix Rules gælder den prioritering, der er beskrevet ovenfor.

## Personal Overrides

Med **Personal Overrides** kan du vælge en personlig QML-style til et lag uden at ændre den fælles JSON-fil eller teamets styles.

1. Åbn **Settings → Options → StyleCore**.
2. Vælg **Add personal override** under **Personal Overrides**.
3. Vælg eller skriv lagnavnet.
4. Dobbeltklik i feltet for den personlige style, og vælg den ønskede `.qml`.
5. Anvend eller gem indstillingerne, og tilføj laget igen for at se resultatet.

Dit override gemmes i din **lokale QGIS-profil** og knyttes til den valgte konfiguration. Det anvendes på nye matchende lag, når automatisk styling er aktiveret – ikke automatisk på alle lag i allerede gemte projekter.

Hvis du vil tilbage til teamets standard, skal du vælge reglen og klikke på **Reset to shared default**. Med **Reset all personal styles** fjernes alle personlige overrides for den pågældende konfiguration.

## Manual Style Update

Brug **Manual Style Update…** fra StyleCore-menuen, når du vil opdatere et lag i et **eksisterende** QGIS-projekt.

1. Åbn menuen, og vælg **Manual Style Update…**.
2. Vælg et lag i projektet.
3. Gennemgå den foreslåede QML, eller find en anden `.qml`.
4. Klik på **Use Style**.
5. Gem QGIS-projektet for at bevare lagets opdaterede styling.

Forslag kan baseres på det synlige QGIS-lagnavn eller, for relevante Oracle-lag, den underliggende tabel eller view. Ændringen er **et aktivt valg for det enkelte lag**. Den opretter ikke en permanent Oracle-kilderegel og ændrer ikke automatisk andre projekter.
