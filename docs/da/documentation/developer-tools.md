# Udviklerværktøjer

**Developer Mode** er beregnet til den person, der vedligeholder en StyleCore-konfiguration og teamets fælles QML-ressourcer. Det er ikke nødvendigt ved almindelig brug af StyleCore.

## Aktivér Developer Mode

1. Åbn **Settings → Options → StyleCore**.
2. Fold **Developer** ud, og aktivér **Developer Mode**.
3. Gennemgå de fælles indstillinger, du vil administrere.
4. Når du gemmer fælles ændringer, indtaster du den **developer code**, som hører til den aktive konfiguration.

Developer Mode giver adgang til at redigere fælles indstillinger. Koden bekræfter, at de skal gemmes, men **erstatter ikke filrettigheder**.

## Hvad kan administreres?

| Udviklerfunktion | Hvad ændres? | Vejledning |
|---|---|---|
| Root folder | Hvor StyleCore finder fælles styles, skabeloner og layouts | [Konfiguration – i QGIS](configuration.md) |
| Shared automatic layer styles | Fælles mapping fra lagnavn til QML i aktiv JSON | [Lagstyling](layer-styling.md#shared-automatic-layer-styles) |
| File Suffix Rules | Hvilke filbaserede lag der får en bestemt QML-style | [Lagstyling](layer-styling.md#file-suffix-rules) |
| Template refresh | Hvilke skabeloner der får opdateret eksisterende lagstyles ved åbning | [Projektskabeloner](project-templates.md#template-refresh-opdater-styles-ved-abning) |
| Save layer styles | Gemmer de valgte QGIS-lags aktuelle styles som fælles QML-filer | [Gem QML-styles fra QGIS](#gem-qml-styles-fra-qgis) |

Foretag altid fælles ændringer i den **rigtige aktive konfiguration**, særligt hvis du administrerer flere forskellige kontor- eller feltopsætninger.

## Gem ændringer til en fælles konfiguration

1. Indlæs den rigtige konfiguration, og kontrollér navn og sti.
2. Åbn **Developer**, foretag ændringerne, og vælg **Apply / OK** i QGIS-indstillingerne.
3. Indtast udviklerkoden, når du bliver bedt om det.
4. Bed kollegerne **genindlæse den fælles konfiguration**, så de får de opdaterede mappings og indstillinger.

StyleCore gemmer de fælles indstillinger i den aktive JSON-fil og undersøger, om en anden person har ændret filen, mens du arbejdede. Hvis det er tilfældet, skal du genindlæse den, før du foretager nye ændringer, så du ikke overskriver en kollegas arbejde.

!!! warning "Beskyt de fælles ressourcer"
    Enhver med skriveadgang kan muligvis redigere JSON- eller QML-filer uden om StyleCore. Developer code er en bekræftelse i brugerfladen, ikke adgangskontrol. Brug passende rettigheder på server eller mapper, og koordinér samtidige ændringer.

## Gem QML-styles fra QGIS

Du kan eksportere udvalgte lags aktuelle QGIS-styling direkte til den konfigurerede fælles stylemappe:

1. Foretag de ønskede ændringer af symboler og labels i QGIS-laget.
2. Åbn **Settings → Options → StyleCore → Developer → Save layer styles…**.
3. Vælg de lag, der skal gemmes. De står i samme rækkefølge som i QGIS' lagpanel. Ingen lag er valgt på forhånd.
4. Vælg **Save selected**, indtast udviklerkoden, og bekræft handlingen.
5. Gennemgå oversigten over gemte, fejlede og udeladte filer, og kontrollér QML-resultatet.

StyleCore kontrollerer dublerede lagnavne, lader dig prøve igen ved forkert udviklerkode uden at miste valget og opretter `.qml.bak`-backups, når eksisterende fælles QML-filer overskrives. På grund af fælles mappings eller File Suffix Rules kan destinationsfilen have et andet navn end det synlige lagnavn.

!!! important "Personlige og fælles styles er forskellige"
    Hvis et lag har et Personal Override, gemmer **Save layer styles** stadig til teamets **fælles QML-fil**, ikke til brugerens personlige indstillinger. StyleCore advarer, inden handlingen gennemføres.

## Hvilke ændringer påvirker kollegerne?

| Handling | Gemmes hvor? | Ændrer kollegernes opsætning? |
|---|---|---|
| Tilføj eller nulstil Personal Override | Din QGIS-profil | Nej |
| Ændr fælles lag-mappings | Aktiv fælles JSON | Ja, når den genindlæses |
| Ændr File Suffix Rules | Aktiv fælles JSON | Ja, når den genindlæses |
| Ændr valg til Template refresh | Aktiv fælles JSON | Ja, når den genindlæses |
| Gem fælles QML | Konfigureret fælles stylemappe | Kan påvirke nye lag og udvalgte skabeloner |
| Opdater fælles QPT- eller QGS/QGZ-skabelon | Konfigureret ressourcemappe | Påvirker senere anvendelse af layouts og skabeloner |

Se [Lagstyling](layer-styling.md) for den daglige QML-anvendelse og personlige overrides. Se [Konfiguration – i QGIS](configuration.md) og [Konfiguration JSON](configuration-json.md) for fælles opsætning og filplaceringer.
