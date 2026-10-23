# Konfiguration – i QGIS

En **konfiguration** fortæller StyleCore, hvor QML-styles, QGIS-projektskabeloner og printlayouts ligger, og hvilke fælles stylingregler der skal bruges. Konfigurationen er en JSON-fil, men den kan oprettes og administreres direkte fra QGIS. Denne side beskriver arbejdsgangen i QGIS; [Konfiguration JSON](configuration-json.md) gennemgår selve filen.

Hvis en kollega allerede vedligeholder teamets konfiguration, bør du **indlæse den eksisterende fil fra en fælles placering i stedet for at lave en kopi**. Hvis du er ansvarlig for opsætningen på arbejdspladsen, kan du oprette en ny konfiguration.

Ved fælles opsætninger er det ofte bedst, at én eller nogle få personer står for vedligeholdelsen.

---

## Indlæs en eksisterende konfiguration

1. Kontrollér, at du har adgang til JSON-filen og dens tilknyttede ressourcer, også eventuelle netværksmapper.
2. Åbn **Settings → Options → StyleCore** i QGIS, og fold **Configuration** ud.
3. Vælg **Load configuration…**, og find `.json`-filen. Du kan også indsætte en lokal sti eller UNC-sti i stifeltet og bruge indlæsningsknappen ved siden af.
4. Kontrollér, at **Active configuration** viser det rigtige navn.
5. Kontrollér, at de forventede skabeloner og PRINT-layouts findes. Tilføj eventuelt et lag med en kendt fælles style for at teste stylingen.

Filvælgeren åbner som udgangspunkt i StyleCores `config/`-mappe, men JSON-filen kan ligge overalt, hvor du har adgang.

!!! tip "Brug af en teamkonfiguration"
    Behold **én fælles JSON-fil** på et delt drev, og giv kollegerne stien, eksempelvis `\\server\GIS\StyleCore\office.json`. Brugere behøver normalt kun læseadgang; udviklere skal have skriveadgang for at gemme ændringer. Alle skal også kunne tilgå de ressourcemapper, som JSON-filen henviser til.

!!! warning "Afbrudt netværksforbindelse"
    Hvis den valgte JSON-fil midlertidigt ikke kan nås, husker StyleCore stadig stien. Genopret netværks- eller VPN-forbindelsen, og indlæs konfigurationen igen.

---

## Opret en ny konfiguration

En ny konfiguration kan bruges til en personlig opsætning eller af den person, som vedligeholder teamets fælles ressourcer.

### 1. Vælg placering til ressourcer

Det er her, StyleCore **opretter** ressourcemapperne. Vælg, om de skal ligge på din egen computer eller et fællesdrev, som kollegerne kan tilgå. Placeringen kaldes **rodmappen** (root folder). En typisk struktur er:

```text
StyleCore_resources/
├── layer_styles/        # QML-stylefiler
├── template_projects/   # QGS/QGZ-projektskabeloner
├── layouts/             # QPT-printlayouts og SVG-grafik
└── fonts/               # Valgfri; oprettes manuelt
```

Navnene på de tre almindelige ressourcemapper kan ændres. **Når du gemmer en ny konfiguration, opretter StyleCore `layer_styles`, `template_projects` og `layouts`** (med de navne, du har valgt). Den opretter ikke selve QML-, QGS/QGZ-, QPT- eller SVG-filerne. Dem tilføjer du bagefter. Den valgfrie `fonts`-mappe oprettes ikke automatisk.

### 2. Brug New configuration i QGIS

1. Åbn **Settings → Options → StyleCore → Configuration**.
2. Vælg **New configuration…**.
3. Indtast et **Name**, og vælg stien til **Configuration file**, fx `office.json`, via `...`-knappen.
4. Behold **Use configuration file folder as resource root** markeret, hvis ressourcerne skal følge JSON-filens mappe. Fjern markeringen for at vælge en særskilt **Root folder**.
5. Kontrollér ressourcemapperne, angiv og bekræft **Developer code**, og tryk **Save configuration**.
6. Konfigurationen aktiveres med det samme. Læg dine styles, projektskabeloner og printlayouts i de tilhørende mapper.

??? info "Konfigurationsfelter i QGIS"
    | Felt | Eksempel | Betydning |
    |---|---|---|
    | Name | `Office` | Navnet på den aktive konfiguration i QGIS |
    | Configuration file | `C:/GIS/StyleCore/office.json` | Placering af den fælles JSON-fil |
    | Use configuration file folder as resource root | Markerede | Ressourcemapper følger JSON-filen ved flytning |
    | Root folder | `C:/GIS/StyleCore_resources` | Separat placering, når afkrydsningen er slået fra |
    | Styles folder | `layer_styles` | Mappe med QML-styles |
    | Templates folder | `template_projects` | Kildemappe til fælles QGIS-projektskabeloner |
    | Print layouts folder | `layouts` | Mappe med QPT- og SVG-filer |
    | Developer code | Angives af den ansvarlige | Bekræftelse ved ændringer af fælles indstillinger |

!!! info "Developer code og rettigheder"
    Koden er en bekræftelse inde i StyleCore, **ikke en erstatning for filrettigheder**. Brug rettigheder på serveren eller mapperne til at styre, hvem der må ændre JSON- og QML-filer.

### 3. Del konfigurationen med kolleger

Læg JSON-filen og ressourcerne et sted, kollegerne kan tilgå, del **stien til JSON-filen**, og bed dem indlæse den under **Configuration**. Undgå at uddele uafhængige kopier, hvis alle skal kunne få de samme ændringer. Når den ansvarlige ændrer JSON-filen, kan kollegerne indlæse konfigurationen igen for at hente de nye indstillinger.

---

## Forstå lokale og fælles ressourcer

StyleCore bruger tre placeringer til forskellige formål:

| Placering | Hvad ligger der? | Hvem berøres? |
|---|---|---|
| Aktiv konfigurations-JSON | Fælles mappings, File Suffix Rules, valgte skabeloner til refresh og ressourcestier | Alle, der bruger JSON-filen, når den indlæses igen |
| Ressourcernes rodmappe | QML-filer, `.qgs`/`.qgz`-skabeloner, `.qpt`-layouts, valgfrie skrifttyper og SVG-filer | Alle med adgang til mapperne |
| Din QGIS-profil | Sti til valgt konfiguration, automatisk styling til/fra og personlige overrides | Kun din egen QGIS-profil |

StyleCore åbner projektskabeloner direkte fra den konfigurerede skabelonmappe uden at kopiere dem til den lokale QGIS-profil. QML- og QPT-filer læses ligeledes fra deres angivne placeringer.

## Valgfrie fælles skrifttyper

Hvis dine QGIS-lagstyles eller printlayouts bruger skrifttyper, som ikke er installeret på alle kollegers computere, kan du selv oprette en mappe med navnet **`fonts`** direkte i konfigurationens **rodmappe**. Læg skrifttypefiler (`.ttf` eller `.otf`) i mappen, fx `fonts/Roboto-Regular.ttf`. Husk eventuelle licensfiler, som skal følge med ved distribution af skrifttyperne.

StyleCore registrerer automatisk skrifttyperne i QGIS, når konfigurationen indlæses. Det fungerer både med lokale mapper og tilgængelige fælles netværksmapper, herunder UNC-stier. Skrifttyperne behøver **ikke** være installeret i Windows, og du skal **ikke** ændre JSON-filen eller tilføje indstillinger.

Mappen er helt valgfri. Hvis den ikke findes, fungerer StyleCore som normalt. Den skal oprettes manuelt og er ikke en af de tre mapper, som **New configuration** opretter.

## Skift mellem konfigurationer

Brug **Settings → Options → StyleCore → Configuration → Load configuration…** eller stifeltet til at vælge en anden JSON-fil. Hver konfiguration kan bruge sine egne rodmapper, regler, skabeloner og layouts. Dine personlige overrides er knyttet til den valgte konfiguration og blandes derfor ikke sammen med andre opsætninger.

## Vedligehold en fælles konfiguration

Under **Developer** kan du styre fælles rodmappe, mapping af lagnavne til QML, File Suffix Rules og hvilke projektskabeloner der skal opdateres ved åbning. Den ansvarlige kan gemme ændringerne i den aktive JSON-fil. Kollegerne kan derefter indlæse konfigurationen igen. Andre brugere kan fortsat arbejde med personlige overrides uden at redigere den fælles fil.

Læs også [Lagstyling](layer-styling.md), [Projektskabeloner](project-templates.md), [Printlayouts](print-layouts.md) og [Udviklerværktøjer](developer-tools.md).

---

Se [Konfiguration JSON](configuration-json.md) for filens struktur, felter og eksempler.
