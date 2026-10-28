# Udviklerværktøjer

Brug **Developer Mode**, når du vedligeholder den fælles StyleCore-opsætning. Almindelige brugere har ikke brug for den. Developer Mode giver adgang til de fælles vedligeholdelsesområder i StyleCore-indstillingerne.

<figure class="sc-shot sc-shot--tiny"><img src="../../assets/images/screenshots/options-developer-section.png" alt="options-developer-section.png"><figcaption>Developer Mode aktiveres fra Developer-sektionen i StyleCore-indstillingerne.</figcaption></figure>

## 1. Slå Developer Mode til

1. Åbn **Settings → Options → StyleCore**.
2. Fold **Developer** ud.
3. Sæt flueben i **Enable developer mode**.
4. Brug de sektioner, der bliver synlige.
5. Gem med **Apply / OK** og bekræft med developer-koden.

!!! warning "Developer-koden er et bekræftelsestrin"
    Developer-koden bekræfter fælles ændringer i StyleCore. Den reelle beskyttelse kommer stadig fra skriveadgang til filer og server.

## 2. Kend de vigtigste vedligeholdelsesområder

| Område | Bruges til |
|---|---|
| Resource root | Ændre en flyttet eller omdøbt fælles rodmappe |
| Templates | Styre Active, Refresh og eksterne templates |
| Shared automatic layer styles | Vedligeholde regler fra lagnavn til QML |
| File Suffix Rules | Vedligeholde suffix-baserede regler |
| Save layer styles… | Skrive fælles QML-filer ud fra styles i QGIS |

<figure class="sc-shot sc-shot--small"><img src="../../assets/images/screenshots/developer-root-folder.png" alt="developer-root-folder.png"><figcaption>Brug resource-root-sektionen, når den fælles ressourcemappe flyttes eller skifter navn.</figcaption></figure>

## 3. Vedligehold templates

<figure class="sc-shot "><img src="../../assets/images/screenshots/developer-templates.png" alt="developer-templates.png"><figcaption>Templates kan aktiveres, opfriskes eller kobles eksternt fra ét samlet sted.</figcaption></figure>

Brug denne sektion til at:

1. vise eller skjule templates i StyleCore-menuen,
2. bestemme hvilke templates der skal bruge Refresh,
3. tilføje eksterne templates,
4. redigere eller fjerne eksterne templates.

## 4. Vedligehold fælles automatiske lagstyles

<figure class="sc-shot "><img src="../../assets/images/screenshots/developer-shared-styles.png" alt="developer-shared-styles.png"><figcaption>Brug denne tabel, når det synlige lagnavn og QML-filnavnet ikke matcher.</figcaption></figure>

1. Tilføj eller vælg en række.
2. Indtast lagnavnet.
3. Vælg QML-filen med `...`-knappen.
4. Gem med developer-koden.
5. Bed kolleger genindlæse konfigurationen, hvis det er nødvendigt.

## 5. Vedligehold File Suffix Rules

<figure class="sc-shot "><img src="../../assets/images/screenshots/developer-file-suffix-rules.png" alt="developer-file-suffix-rules.png"><figcaption>Hver regel kobler et filnavns-suffix og en filtype til en QML-fil.</figcaption></figure>

1. Klik **Add suffix**.
2. Indtast suffix, filtype og QML-fil.
3. Gem med developer-koden.
4. Test med et matchende filbaseret lag.

## 6. Gem fælles QML-styles fra QGIS

<figure class="sc-shot sc-shot--small"><img src="../../assets/images/screenshots/developer-save-layer-styles.png" alt="developer-save-layer-styles.png"><figcaption>Brug **Save layer styles…**, når opdaterede fælles QML-filer skal skrives ud fra det aktuelle projekt.</figcaption></figure>

1. Style dine lag i QGIS.
2. Åbn **Save layer styles…**.
3. Vælg kun de lag, du vil skrive.
4. Bekræft gemningen og developer-koden.
5. Gennemgå opsummeringen og test resultatet.

## 7. Husk hvad der påvirker kolleger

- **Personal Overrides** påvirker **ikke** kolleger.
- **Fælles mappings**, **File Suffix Rules**, **template-indstillinger** og **gemte fælles QML-filer** påvirker kolleger, når de genindlæser konfigurationen.
- Udskiftning af template- eller layout-kildefiler påvirker fremtidig brug af de ressourcer.
