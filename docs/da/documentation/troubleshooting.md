# Fejlfinding

Start med at kontrollere den **aktive konfiguration**, om ressourcemapperne er tilgængelige, og om **Automatic styling** er aktiveret. De fleste problemer kan undersøges uden at ændre pluginets kode.

??? question "Jeg har modtaget en JSON-konfiguration. Hvor indlæser jeg den?"
    Åbn **Settings → Options → StyleCore → Configuration** i QGIS. Brug **Load configuration…**, eller indsæt en lokal sti/UNC-sti. Filen behøver ikke ligge i pluginets mappe. Se [Konfiguration](configuration.md#indlæs-en-eksisterende-konfiguration).

??? question "Jeg har oprettet en konfiguration, men der er ingen styles eller layouts"
    Når du opretter en konfiguration, laver StyleCore **undermapperne**, men ikke QML-, QPT-, SVG- eller QGIS-projektfiler. Læg ressourcerne i de tilsvarende mapper. Se [Konfiguration](configuration.md#opret-en-ny-konfiguration).

??? question "Min fælles konfiguration er midlertidigt utilgængelig"
    Genopret netværksforbindelsen eller VPN'en, og indlæs JSON-filen igen. StyleCore husker den valgte sti og skifter ikke automatisk til en anden opsætning.

??? question "En kollega kan ikke se en ændring af en fælles regel"
    Kontrollér, at du har gemt til den rigtige fælles JSON-fil, med korrekt udviklerkode og de nødvendige skriverettigheder. Bed kollegaen indlæse konfigurationen igen. Et personligt override kan have højere prioritet for samme lag.

??? question "Mit personlige style-override bliver ikke brugt"
    Kontrollér den aktive konfiguration, lagnavnet og den valgte QML-fil. Automatisk styling skal være aktiveret for nye lag. Hvis du genåbner et almindeligt gemt projekt, bliver dets lag ikke automatisk stylet igen.

??? question "Mit nye lag får ingen automatisk style"
    Kontrollér, at Automatic styling er slået til, konfigurationen er tilgængelig, og at der findes en QML via lagnavn, personligt/fælles mapping eller File Suffix Rule. Uden en anvendelig QML bevarer laget sit udseende. Se [Lagstyling](layer-styling.md).

??? question "En File Suffix Rule matcher forkert eller slet ikke"
    Suffix sammenlignes med **filnavnet uden filendelsen**. Kontrollér, at kilden er indlæst som et gyldigt QGIS-lag, og at reglen har den rigtige filtype eller `*`. Den længste suffix vinder; ved samme længde vinder en bestemt filendelse over `*`.

??? question "Min skabelon vises ikke i QGIS"
    Kontrollér, at den **fælles skabelonmappe** indeholder en gyldig og tilgængelig `.qgs`- eller `.qgz`-fil. StyleCore kopierer til QGIS' lokale mappe `project_templates`. Hvis skabelonmenuen endnu ikke er opdateret, kan du prøve at genstarte QGIS. Se [Projektskabeloner](project-templates.md).

??? question "Et almindeligt gemt projekt blev ikke stylet igen"
    Det er forventet: StyleCore bevarer projektets gemte styles. Brug **Manual Style Update** til bevidst at ændre et bestemt lag, og gem derefter QGIS-projektet.

??? question "En udvalgt skabelon opdaterer ikke sine eksisterende lag"
    Kontrollér skabelonnavnet under **Developer → Template refresh**, at QML-filerne findes, og at Automatic styling er slået til. Kun udtrykkeligt valgte og genkendte skabeloner opdateres.

??? question "PRINT-menuen er tom"
    Kontrollér, at den aktive konfiguration peger på en tilgængelig layoutmappe med `.qpt`-filer. Se [Printlayouts](print-layouts.md).

??? question "Move Item Content bliver ikke aktiveret ved åbning af en QPT"
    Åbn QPT-filen i QGIS Layout Designer, og kontrollér, at det ønskede kortelement har det nøjagtige **Item ID** `main_map`. Kontrollér også understøttelsen i din QGIS-versions Layout Designer.

??? question "Ændringer i Developer Mode kan ikke gemmes"
    Kontrollér udviklerkoden, filrettighederne og den aktive konfiguration. Hvis en anden person har ændret JSON-filen undervejs, skal du indlæse den igen, før du prøver at gemme nye ændringer.

## Indberet et problem

Når du opretter en [GitHub-issue](https://github.com/vnaru42/StyleCore/issues), bør du angive QGIS-version, StyleCore-version, handlingen som fejlede, og relevante StyleCore-logbeskeder. Fjern private netværksstier, tokens og udviklerkoder fra det, du offentliggør.
