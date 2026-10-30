# Daglig brug

Når en konfiguration er indlæst, arbejder StyleCore side om side med normale QGIS-arbejdsgange. Du har **ikke** brug for Developer Mode for at bruge de fælles ressourcer.

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 1. Tjek din opsætning

1. Åbn **StyleCore → Settings…**.
2. Bekræft, at den rigtige konfiguration er aktiv.
3. Hvis du skal oprette eller reparere en konfiguration, se [Konfiguration – i QGIS](../documentation/configuration.md).

</div>
<div class="sc-media-row__visual" markdown>

![StyleCores hovedmenu](../../../assets/images/screenshots/menu-main.png){ width="100%" }
*StyleCore-menuen giver adgang til indstillinger, Automatic Styling, skabeloner, printlayouts og hjælp.*

</div>
</div>

## 2. Tilføj lag og brug Automatic Styling

1. Sørg for, at **Automatic Styling** er slået til i StyleCore-menuen.
2. Tilføj et lag i QGIS som normalt.
3. Hvis der findes en matchende QML, bruger StyleCore den.
4. Hvis ingen regel eller matchende QML findes, beholder laget sit normale udseende.

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 3. Start et projekt fra en fælles skabelon

1. Åbn **StyleCore → New from Template**.
2. Vælg en skabelon.
3. Arbejd videre i det nye projekt.
4. Brug **Save As** til at gemme dit eget projekt under et nyt navn.

</div>
<div class="sc-media-row__visual" markdown>

![New from Template-menu](../../../assets/images/screenshots/menu-new-from-template.png){ width="100%" }
*Skabeloner åbnes direkte fra StyleCore-menuen.*

</div>
</div>

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 4. Tilføj et printlayout

1. Åbn **StyleCore → Print Layouts**.
2. Vælg et layout.
3. QGIS Layout Designer åbner med et nyt layout i dit projekt.

</div>
<div class="sc-media-row__visual" markdown>

![Print Layouts-menu](../../../assets/images/screenshots/menu-print-layouts.png){ width="100%" }
*Tilgængelige printlayouts vises direkte i StyleCore-menuen.*

</div>
</div>

## 5. Brug din egen style eller opdater et eksisterende lag

- **Personal Override:** tildel din egen QML til et lagnavn i **Settings → Options → StyleCore → Personal Overrides**.
- **Manual Style Update…:** vælg et eksisterende lag og påfør en style bevidst.

Ingen af delene ændrer den fælles teamopsætning.

## 6. Få hjælp

Brug **StyleCore → Help & Documentation** eller **Report an Issue**, eller se [Fejlfinding](../documentation/troubleshooting.md).
