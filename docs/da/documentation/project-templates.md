# Projektskabeloner

Projektskabeloner (`.qgs` og `.qgz`) er fælles udgangspunkter for nye QGIS-projekter. **StyleCore åbner skabeloner direkte fra den konfigurerede skabelonmappe** og kopierer dem ikke til hver brugers QGIS-profil.

## Åbn en fælles skabelon

1. Gem `.qgs`- og `.qgz`-filerne i den konfigurerede `template_projects`-mappe (eller den mappe, som konfigurationen angiver).
2. Vælg en skabelon med **Active** slået til under **StyleCore → New from Template**.
3. Skabelonen åbnes som et nyt projekt, der endnu ikke er gemt. Gem projektet under et separat filnavn.

Datakilderne i skabelonen skal være tilgængelige for brugerne. Brug egnede fælles eller relative stier, og kontrollér dem i QGIS.

## Opret eller opdater en skabelon

1. Forbered et QGIS-projekt med de ønskede lag, koordinatsystem, kortudsnit, synlighed og styles.
2. Kontrollér adgang til projektets datakilder.
3. Gem som `.qgs` eller `.qgz` i den fælles skabelonmappe. Undermapper kan bruges til at organisere skabeloner.
4. Åbn den via **New from Template**, og kontrollér resultatet.

Opdater den fælles `.qgs`/`.qgz`-kildefil, når skabelonen skal ændres. Der kræves ingen lokal skabelonsynkronisering.

## Active og Template Refresh

I **Settings → Options → StyleCore** styrer **Active**, om en skabelon vises i StyleCores skabelonmenu. **Refresh** er et selvstændigt valg: for en skabelon med Refresh slået til kan StyleCore opdatere eksisterende lags styles efter de aktuelle QML-regler, når skabelonen åbnes (forudsat at Automatic Styling er slået til).

Skabeloner uden **Refresh** bevarer de styles, som er gemt i skabelonen. Almindelige gemte QGIS-projekter får ikke automatisk ændret deres styles ved åbning. Brug [Manual Style Update](layer-styling.md#manual-style-update), hvis du vil opdatere et eksisterende projekt.

## Flere skabeloner til forskellige teams

Kontor- og måleskabeloner kan ligge i den samme fælles mappe. Forskellige lagnavne og QML-regler kan understøtte både præsentation og feltarbejde uden at duplikere hele StyleCore-konfigurationen.
