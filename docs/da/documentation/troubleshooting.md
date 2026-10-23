# Fejlfinding

Start med at kontrollere den **aktive konfiguration**, adgangen til de fælles ressourcer og om **Automatic Styling** er slået til. Følg derefter de relevante trin herunder.

## Konfiguration og adgang

??? question "Jeg har fået en JSON-konfiguration. Hvordan indlæser jeg den?"
    1. Åbn **Settings → Options → StyleCore → Configuration**.
    2. Vælg **Load configuration…**, eller indsæt hele JSON-stien i feltet, og indlæs den.
    3. Kontrollér aktivt konfigurationsnavn, og test en fælles template eller QML.
    Se [Konfiguration – i QGIS](configuration.md).

??? question "Den fælles JSON eller netværksmappe er utilgængelig"
    1. Kontrollér forbindelsen til netværket/VPN.
    2. Find stien i Stifinder.
    3. Genindlæs **samme JSON-sti**, når forbindelsen virker igen. StyleCore husker den valgte sti i stedet for automatisk at skifte konfiguration.

??? question "Jeg har oprettet en konfiguration, men ingen styles eller layouts vises"
    StyleCore opretter **ressourcemapperne**, men ikke QML/QPT/QGS/QGZ-filerne. Læg filerne i de rigtige mapper, og prøv igen.

## Flyttede mapper eller fællesdrev

Brug denne vejledning, hvis en mappe har fået nyt navn, et drevbogstav ændres (fx `P:` → `S:`), UNC-stien ændres, eller ressourcerne flyttes.

1. **Find ændringen:** Er JSON-filen flyttet, er rodmappen flyttet, eller er en datakilde i et QGIS-projekt flyttet?
2. **Ved JSON-mappen som rod (`root_mode: config_dir`):** Flyt JSON-filen og ressourcemapperne samlet, og bevar undermappenavne og relativ struktur.
3. **Ved separat rodmappe (`root_mode: custom`):** Indlæs konfigurationen, åbn **Developer**, og ret den fælles rodmappe til den nye tilgængelige sti. Gem med developer code.
4. **Hvis JSON-filen har fået ny sti:** Alle kolleger skal bruge **Load configuration…** til at vælge JSON-filen på **den nye placering**.
5. **Kontrollér eksterne henvisninger:** Stier til eksterne templates og absolutte QML-/ressourcestier skal måske også rettes.
6. **Test opsætningen:** Tilføj et stylet lag, åbn en template og et QPT-layout, og kontrollér eventuelle fonts.
7. **Reparér QGIS-datakilder separat:** StyleCore ændrer ikke automatisk ugyldige fil-/Oracle-/WMS-/WFS-stier inde i eksisterende QGIS-projekter.

!!! tip "Forebyg samme problem"
    Hold JSON og ressourcemapper samlet via **Use configuration file folder as resource root**, og brug relative stier, hvor det er muligt. UNC-stier er ofte mere robuste end maskinspecifikke drevbogstaver, hvis arbejdspladsen understøtter dem.

## Styling

??? question "Et nyt lag får ingen QML-style"
    1. Kontrollér **Automatic Styling** i StyleCore-menuen.
    2. Kontrollér, at JSON og fælles styles-mappe er tilgængelige.
    3. Kontrollér Personal Overrides, Shared Rules, File Suffix Rules og matchende QML-filnavne i den rækkefølge.
    4. Se i QGIS' **StyleCore-log** efter manglende eller ugyldige QML-stier. Se [Lagstyling](layer-styling.md).

??? question "Mit Personal Override bruges ikke"
    Kontrollér aktiv konfiguration, præcist lagnavn og den valgte QML. Personal Overrides bruges ved matchende **nytilføjede** lag – ikke automatisk på alle åbne projektlag.

??? question "En File Suffix Rule matcher en forkert kilde"
    Reglen matcher **filnavnet uden filtype**. Kontrollér filtypen (`.geojson`, `.shp`, `*` osv.). Længste suffix vinder. Ved GeoPackage er det **pakkens filnavn**, ikke navnet på en intern tabel.

??? question "Et eksisterende projekt blev ikke restylet ved åbning"
    Det er forventet. Eksisterende projekters styles bevares. Brug **StyleCore → Manual Style Update…**, anvend QML på det valgte lag, og gem projektet.

## Skabeloner, layouts og skrifttyper

??? question "En skabelon mangler under New from Template"
    1. Kontrollér, at kildefilen `.qgs`/`.qgz` findes og kan tilgås.
    2. Kontrollér **Developer → Templates → Active**.
    3. Hvis det er en ekstern skabelon, skal den tilknyttede sti kontrolleres.
    4. Åbn **New from Template**-menuen igen. Se [Projektskabeloner](project-templates.md).

??? question "En skabelon opdaterer ikke sine styles"
    Kontrollér, at **Refresh** er valgt for skabelonen, **Automatic Styling** er slået til, og at skabelonen blev åbnet via **StyleCore → New from Template**. Kontrollér også matchende QML-filer.

??? question "Skabelonen åbner med manglende lag"
    Åbn kildens `.qgs`/`.qgz` i QGIS, og reparér dens **datakildestier eller tjenesteforbindelser**. En fungerende placering af selve template-filen betyder ikke nødvendigvis, at dens datakilder virker.

??? question "Print Layouts er tom, eller main_map virker ikke"
    Kontrollér, at layouts-mappen indeholder `.qpt`-filer. Ved kortautomatik skal kortelementet have **Item ID** `main_map` (præcis stavning). Muligheden for automatisk Move Item Content kan afhænge af QGIS-versionen. Se [Printlayouts](print-layouts.md).

??? question "En SVG eller skrifttype mangler"
    Ved SVG skal QPT'ens Picture **Item ID** matche `.svg`-filnavnet i layouts-mappen. Ved fonts placeres lovligt delbare `.ttf`/`.otf` i den valgfrie `root/fonts`-mappe. Genindlæs konfigurationen eller genstart QGIS ved behov.

## Developer-indstillinger

??? question "Ændringer kan ikke gemmes under Developer"
    Kontrollér developer code, skriverettigheder og den aktive JSON. Hvis en anden har ændret den fælles JSON under redigeringen, skal den genindlæses før gemning. Se [Udviklerværktøjer](developer-tools.md).

??? question "Gamle templates vises stadig på QGIS-velkomstskærmen"
    Det kan stamme fra en tidligere installation, som lagde kopier i QGIS' lokale `project_templates`-mappe. Den aktuelle StyleCore åbner skabeloner direkte fra kilden. Kontrollér den lokale skabelonmappe i QGIS-profilen, slet kun bekræftede forældede kopier, og genstart eventuelt QGIS. Slet ikke dine egne andre skabeloner.

## Rapportér et problem

Hvis trinene ikke hjælper, kan du bruge [Report an Issue](https://github.com/vnaru42/StyleCore/issues). Oplys version af QGIS og StyleCore, trin til at gentage fejlen og relevante StyleCore-logbeskeder. **Fjern private stier, adgangsoplysninger, tokens og developer codes**, før du offentliggør en fejlrapport.
