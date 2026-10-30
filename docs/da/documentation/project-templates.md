# Projektskabeloner

En projektskabelon er et genbrugeligt **QGIS-projekt (`.qgs` / `.qgz`)** med foruddefinerede lag, kortindstillinger og styling. StyleCore læser templates **direkte fra deres kildelokation**; de kopieres ikke til hver brugers lokale QGIS-template-mappe.

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 1. Åbn en skabelon som nyt projekt

1. Åbn **StyleCore → New from Template**.
2. Vælg en skabelon.
3. StyleCore åbner den som et **nyt, ikke-gemt projekt**.
4. Foretag dine ændringer.
5. Brug **Save As** til at gemme dit eget projekt under et nyt navn.

Det beskytter den fælles original.

</div>
<div class="sc-media-row__visual" markdown>

![New from Template-menu](../../../assets/images/screenshots/menu-new-from-template.png){ width="100%" }
*Brugere åbner skabeloner fra **StyleCore → New from Template**.*

</div>
</div>

## 2. Opret en ny fælles skabelon

1. Byg det projekt, du vil kunne genbruge.
2. Kontroller, at datakilder, lag og standardindstillinger passer til kollegerne.
3. Gem det som `.qgs` eller `.qgz` i den valgte template-mappe.
4. Organiser eventuelt templates i undermapper.
5. Test den fra **StyleCore → New from Template**.
6. Bekræft i Developer-indstillingerne, at den er **Active**, og vælg om den også skal have **Refresh**.

## 3. Tilføj en ekstern skabelon

Brug dette, når template-filen skal blive liggende uden for den normale template-mappe.

1. Åbn **Settings → Options → StyleCore**.
2. Slå **Developer Mode** til.
3. Klik **Add external template…** i **Templates**.
4. Giv den et navn og vælg `.qgs` / `.qgz`-filen.
5. Gem med developer-koden.
6. Test den fra **New from Template**.

## 4. Styr Active og Refresh

![developer-templates.png](../../../assets/images/screenshots/developer-templates.png){ width="92%" }
*I Templates-tabellen bestemmer vedligeholderen, hvilke templates der vises i menuen, og hvilke der skal genopfriske matchende styles.*

| Active | Refresh | Resultat |
|---|---|---|
| Til | Fra | Vises i menuen og åbnes med sine gemte styles |
| Til | Til | Vises i menuen og åbnes med genanvendte matchende styles |
| Fra | Ligegyldigt | Skjules fra menuen |

1. Åbn **Developer → Templates**.
2. Find templaten.
3. Sæt flueben i **Active**, hvis den skal være synlig.
4. Sæt flueben i **Refresh**, hvis matchende styles skal genanvendes ved åbning gennem StyleCore.
5. Gem med developer-koden.

## 5. Opdater eller flyt en eksisterende skabelon

1. Åbn **kildeprojektet** (`.qgs` / `.qgz`), ikke en brugers gemte kopi.
2. Lav ændringerne og gem kildefilen.
3. Hvis filen flyttes eller omdøbes, så opdater referencen i **Developer → Templates** efter behov.
4. Test den fra **New from Template**.
5. Brug **Save As** til testoutput.

**Vigtigt:** Refresh kører kun, når templaten åbnes gennem **StyleCore → New from Template**, og **Automatic Styling** er slået til.
