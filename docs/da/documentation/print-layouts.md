# Printlayouts

StyleCore læser **QGIS-printlayoutskabeloner (`.qpt`)** direkte fra den konfigurerede fælles mappe `layouts`. Brugerne kan indsætte et fælles layout i det aktuelle projekt via StyleCore-menuen.

## 1. Åbn et fælles layout

1. Åbn QGIS-projektet, og indstil kortudsnittet til det område, du vil udskrive.
2. Åbn **StyleCore → Print Layouts**, og vælg et layout.
3. StyleCore indsætter et **nyt layout** i projektet og åbner **QGIS Layout Designer**.
4. Hvis der findes et kort med Item ID `main_map`, tilpasses det kortudsnittet, og **Move Item Content** aktiveres, hvor QGIS understøtter det.
5. Tilpas layoutet, og eksportér eller print fra QGIS.

Hvis du åbner samme QPT igen, oprettes et nyt layout med et entydigt navn i stedet for at overskrive det eksisterende.

## 2. Opret en fælles QPT-skabelon

1. Åbn **Project → New Print Layout** i QGIS.
2. Vælg papirstørrelse, kortfelter, signaturforklaring, målestok, logoer og øvrige elementer.
3. Giv hovedkortet **Item ID** `main_map`; brug eventuelt `mini_map` til et mindre kort.
4. Til automatisk SVG-indlæsning oprettes Picture items med et **Item ID**, der svarer til SVG-filens navn uden `.svg`.
5. Eksportér layoutet som en **QGIS-layoutskabelon (`.qpt`)**.
6. Læg QPT-filen og eventuelle tilhørende SVG'er i den fælles **layouts-mappe**.
7. Åbn skabelonen via **StyleCore → Print Layouts** i et andet QGIS-projekt for at teste den.

## 3. Forstå reglerne for Item ID

| Item ID | Funktion |
|---|---|
| `main_map` | Tilpasses det aktuelle QGIS-kortudsnit, vælges og aktiverer **Move Item Content**, hvor det understøttes |
| `mini_map` | Tilpasses også kortudsnittet; opretter **ikke** automatisk et overview-map-forhold |
| `CompanyLogo` | Et Picture item med dette ID kan bruge `CompanyLogo.svg` fra layouts-mappen |

Indstil **Item ID** under det relevante elements **Item Properties** i Layout Designer. Navnene skal matche præcist. SVG-filer findes i den konfigurerede layouts-mappe og installeres ikke automatisk i andre programmer.

## 4. Opdater eller vedligehold et layout

1. Åbn kildelayoutet/QPT i QGIS, og foretag ændringerne.
2. Eksportér den opdaterede `.qpt` til **samme fælles placering** (eller et nyt filnavn, hvis det skal være et separat layout).
3. Kontrollér, at eventuelle SVG'er, skrifttyper og billeder kan tilgås af kollegerne.
4. Åbn det opdaterede layout via StyleCore, og kontrollér kortfelter og grafik.

**Layouts, der allerede ligger i gemte QGIS-projekter, bliver ikke erstattet automatisk.** Den nye QPT bruges, når et nyt layout oprettes efter opdateringen.

Se [Konfiguration](configuration.md) for fællesmapper og [Fejlfinding](troubleshooting.md) ved manglende ressourcer.
