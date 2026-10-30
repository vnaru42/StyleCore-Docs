# Konfiguration – i QGIS

En konfiguration er den **JSON-fil**, som fortæller StyleCore, hvor de fælles styles, projektskabeloner, printlayouts og eventuelle fonte ligger. Denne side forklarer den **praktiske arbejdsgang i QGIS**. Se [Konfiguration JSON](configuration-json.md) for felterne i selve JSON-filen.

![options-main-open.png](../../../assets/images/screenshots/options-main-open.png){ width="100%" }
*StyleCores hovedside i QGIS-indstillingerne. Almindelige brugere arbejder typisk med **Personal Overrides** og **Configuration**. Vedligeholdere bruger også **Developer**.*

## 1. Indlæs en eksisterende konfiguration

Brug dette, hvis en kollega allerede har oprettet den fælles opsætning.

1. Opret forbindelse til det relevante fællesdrev, VPN eller netværksplacering.
2. Åbn **Settings → Options → StyleCore**.
3. Fold **Configuration** ud.
4. Brug **Load configuration…** og vælg JSON-filen, eller indsæt hele stien og klik **Load path**.
5. Bekræft navnet under **Active configuration**.
6. Test konfigurationen fra StyleCore-menuen, fx **New from Template** eller **Print Layouts**.

![options-configuration-section.png](../../../assets/images/screenshots/options-configuration-section.png){ width="82%" }
*Configuration-sektionen viser stien til den aktive JSON-fil og giver adgang til **Load configuration…** og **New configuration…**.*

!!! tip "Del en sti – ikke flere kopier"
    Kollegaer bør normalt indlæse den **samme fælles JSON-fil**. Den fælles adfærd ligger dér. Personal Overrides bliver i hver brugers lokale QGIS-profil.

## 2. Opret en ny konfiguration

Brug dette én gang, når du sætter StyleCore op for et team eller til dig selv.

1. Åbn **Settings → Options → StyleCore → Configuration**.
2. Klik **New configuration…**.
3. Indtast et **Name**.
4. Vælg stien til **Configuration file**.
5. Vælg, hvordan rodmappen skal fungere:
   - **Anbefalet:** lad **Use configuration file folder as resource root** være slået til.
   - **Alternativ:** slå den fra og vælg en separat **Root folder**.
6. Behold eller omdøb de tre standardmapper: **Styles**, **Templates** og **Print layouts**.
7. Indtast og bekræft **Developer code**.
8. Klik **Save configuration**.
9. Læg dine faktiske ressourcefiler i de oprettede mapper.
10. Test konfigurationen og del derefter JSON-stien med kolleger.

### Anbefalet: JSON-mappen er også rodmappe

![new-config-config-dir.png](../../../assets/images/screenshots/new-config-config-dir.png){ width="78%" }
*Dette er den enkleste og mest flytbare løsning. JSON-filen og ressourcemapperne ligger samlet.*

Typisk struktur:

```text
StyleCore/
├── office.json
├── layer_styles/
├── template_projects/
├── layouts/
└── fonts/                # valgfri, oprettes manuelt hvis den skal bruges
```

### Alternativ: separat rodmappe

![new-config-custom-root.png](../../../assets/images/screenshots/new-config-custom-root.png){ width="78%" }
*Brug dette, hvis JSON-filen skal ligge ét sted, men de fælles ressourcer skal ligge et andet sted, fx på et dedikeret drev eller UNC-sti.*

## 3. Tilføj eller opdater fælles ressourcer

Efter oprettelsen laver StyleCore mappestrukturen, men **ikke** selve indholdet. Tilføj derfor selv ressourcerne:

1. **Styles:** Læg `.qml`-filer i styles-mappen. Hvis lagnavn og QML-filnavn ikke matcher, så lav regler i Developer-indstillingerne. Se [Lagstyling](layer-styling.md).
2. **Templates:** Læg `.qgs` / `.qgz`-filer i template-mappen, eller tilføj eksterne templates. Se [Projektskabeloner](project-templates.md).
3. **Printlayouts:** Læg `.qpt`-filer (og eventuelle tilhørende `.svg`-filer) i layouts-mappen. Se [Printlayouts](print-layouts.md).
4. **Fonte (valgfrit):** Opret en `fonts`-mappe i rodmappen og læg licenserede `.ttf` / `.otf`-filer der.

## 4. Skift eller genindlæs en konfiguration

1. Gå tilbage til **Settings → Options → StyleCore → Configuration**.
2. Indlæs den ønskede JSON-fil.
3. Bekræft navnet på den aktive konfiguration.
4. Test en kendt template, et printlayout eller en lagstyle.

Brug dette efter ændringer i fælles indstillinger eller når du skifter mellem fx kontor-, felt- eller testopsætninger.

## 5. Flyt eller omdøb en konfiguration eller et fællesdrev

1. Find ud af, hvad der har ændret sig:
   - placeringen af JSON-filen,
   - placeringen af rodmappen,
   - eller stier til templates / data.
2. Hvis JSON-mappen også er rodmappe, skal du flytte JSON-filen **sammen med** ressourcemapperne.
3. Hvis konfigurationen bruger en separat rodmappe, skal en vedligeholder opdatere den i **Developer**.
4. Hvis JSON-stien ændres, skal hver kollega genindlæse konfigurationen.
5. Test templates, styles, layouts og fonte bagefter.

Se [Fejlfinding – Flyttede mapper eller netværksdrev](troubleshooting.md).

## 6. Vedligehold fælles indstillinger for et team

Almindelige brugere har primært brug for konfigurationsstien. Vedligeholdere har også brug for **Developer Mode**.

![options-developer-section.png](../../../assets/images/screenshots/options-developer-section.png){ width="82%" }
*Developer Mode åbner de fælles vedligeholdelsesområder.*

Brug Developer Mode, når du skal:

- ændre fælles rodmappe,
- vedligeholde fælles lagregler,
- vedligeholde File Suffix Rules,
- vedligeholde template-tilgængelighed,
- eller gemme fælles QML-styles.
