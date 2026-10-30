# Printlayouts

StyleCore åbner fælles QGIS-printlayoutskabeloner (`.qpt`) fra den konfigurerede mappe `layouts`.

## 1. Åbn et layout

1. Indstil det ønskede kortudsnit i QGIS.
2. Vælg **StyleCore → Print Layouts**, og vælg et layout.
3. Et nyt layout åbner i **QGIS Layout Designer**. Tilpas det og eksportér eller udskriv.

![Eksempel på layout i QGIS Layout Designer](../../../assets/images/screenshots/print-layout-example.png)
*Eksempel på et fælles layout åbnet via StyleCore.*

## 2. Opret en layoutskabelon

1. Vælg **Project → New Print Layout** i QGIS, og tilføj kort, signaturforklaring og grafik.
2. Angiv Item ID på de elementer, StyleCore skal håndtere automatisk, som beskrevet nedenfor.
3. Eksportér layoutet som `.qpt` i den fælles `layouts`-mappe sammen med eventuelle SVG-filer.
4. Test det via **StyleCore → Print Layouts**.

## 3. Item ID

Angiv Item ID i **QGIS Layout Designer → Item Properties**. Navnene styrer, hvordan StyleCore udfylder eller opdaterer layoutelementerne.

| Item ID | Eksempel | Funktion |
|---|---|---|
| `main_map` | <img src="../../../assets/images/screenshots/item-id-main-map.png" alt="Item ID main_map" width="140"> | Bruger det aktuelle QGIS-kortudsnit til hovedkortet og aktiverer **Move Item Content**, hvor det understøttes. |
| `mini_map` | <img src="../../../assets/images/screenshots/item-id-mini-map.png" alt="Item ID mini_map" width="140"> | Bruger også det aktuelle kortudsnit, men opretter ikke automatisk et overview-forhold. |
| `logo` | <img src="../../../assets/images/screenshots/item-id-logo.png" alt="Item ID logo" width="140"> | Indlæser på et Picture-element en SVG-fil med samme basisnavn fra layouts-mappen. |



<div class="sc-example sc-example--side" markdown="1">
<div class="sc-copy" markdown="1">

## 4. SVG picture items

Giver man sin billede fil et *Item ID* der matcher med en `.svg` fil på navn, kigger StyleCore efter en matchende `.svg` fil. Opdatere firmaet et logo, kan man ligge de nye logoer ind i layouts mappen og give den samme navn som Item ID'et i et layout.
**Picture Item ID** skal matche SVG-filnavnet **uden** `.svg`.

- `logo` → `logo.svg`
- `nord_pil` → `nord_pil.svg`
- `firma_tegn` → `firma_tegn.svg`

</div>
<div class="sc-media-row__visual" markdown>


<img src="../../../assets/images/screenshots/logo-example.png" alt="Example SVG logo" width="100%">
<figcaption>Du kan bruge et vilkårligt SVG-filnavn, så længe Picture Item ID og SVG-filens basisnavn matcher helt præcist.</figcaption>



</div>
</div>



## 5. Opdater en eksisterende skabelon

Redigér kildelayoutet, eksportér den opdaterede `.qpt` til fællesmappen, og test ved at oprette et nyt layout via StyleCore. **Layouts, der allerede er gemt i QGIS-projekter, ændres ikke automatisk.**

Se [Konfiguration](configuration.md) om ressourcemapper og [Fejlfinding](troubleshooting.md) ved manglende filer.
