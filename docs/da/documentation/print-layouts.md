# Printlayouts

StyleCore gør genanvendelige QGIS-**printlayoutskabeloner** (`.qpt`) tilgængelige i **PRINT**-menuen på værktøjslinjen. Brugeren kan vælge det ønskede layout uden at skulle finde filer i mapper hver gang.

## Åbn et fælles printlayout

1. Åbn eller opret det QGIS-projekt, du vil lave et print fra.
2. Åbn **StyleCore**-menuen.
3. Vælg et layout under **PRINT** fra den konfigurerede fælles `layouts`-mappe.
4. StyleCore opretter et nyt layout i projektet og åbner **QGIS Layout Designer**.

Layoutet indlæses direkte fra den konfigurerede mappe. Hvis et layout med samme navn allerede findes i projektet, får det nye layout et unikt navn med et nummer som suffix.

## Opret et nyt fælles layout

1. Opret et nyt printlayout i QGIS via **Project → New Print Layout**.
2. Indstil papirformat, kortrammer, signaturforklaring, målestok, tekst og øvrige elementer.
3. Tildel de relevante **Item ID'er** i egenskaberne for de kort, som StyleCore skal initialisere.
4. Eksportér eller gem layoutet som en **QGIS-skabelon (`.qpt`)**.
5. Læg `.qpt`-filen i den konfigurerede fælles `layouts`-mappe. Den bliver nu tilgængelig under StyleCores PRINT-menu.
6. Afprøv layoutet i et andet projekt for at kontrollere, at alle elementer fungerer som ønsket.

!!! tip "Sørg for adgang til øvrige ressourcer"
    QPT-filer kan bruge billeder, skrifttyper og andre ressourcer. Sørg for, at disse også er tilgængelige for brugerne af konfigurationen. StyleCore pakker ikke automatisk alle eksterne afhængigheder med.

## Regler for kortenes Item ID

Brug præcis disse ID'er til StyleCores kortfunktioner:

| Item ID | Hvad sker der ved åbning af QPT? |
|---|---|
| `main_map` | Kortet tilpasses det aktuelle kortvindue i QGIS. Elemente vælges, og **Move Item Content** aktiveres, hvis Layout Designer understøtter det. |
| `mini_map` | Det indledende kortudsnit sættes ud fra samme QGIS-kortvindue. Der oprettes ikke automatisk en QGIS-overview-relation. |

I QGIS Layout Designer skal du klikke på kortelementet, åbne **Item Properties** og angive **Item ID**. Der skelnes mellem store og små bogstaver. StyleCore bevarer kortrammens proportioner, når udsnittet tilpasses.

Genvejen `main_map` betyder, at du normalt kan flytte kortindholdet med det samme, når layoutet åbnes. `mini_map` kan justeres yderligere med de almindelige QGIS-layoutfunktioner.

## SVG-filer og Picture-elementers Item ID

Du kan lægge `.svg`-filer i den samme fælles layoutmappe som `.qpt`-filerne. Et Picture-element i QPT'en kan få tilknyttet en SVG automatisk, hvis dets **Item ID** matcher SVG-filnavnet uden `.svg`.

```text
Fælles layoutmappe:
    CompanyLogo.svg

QGIS Layout Picture Item ID:
    CompanyLogo
```

StyleCore bruger den matchende SVG fra den konfigurerede mappe, når layoutet åbnes. Filnavn og Item ID skal svare nøjagtigt til hinanden.

## Opdater et layout

Rediger kildelayoutet i QGIS, eksportér en opdateret `.qpt`, og erstat filen i den konfigurerede fælles layoutmappe. Fremtidige layouts oprettet fra StyleCore-menuen bruger den aktuelle fælles QPT. **Layouts, der allerede er oprettet i gemte QGIS-projekter, bliver ikke automatisk erstattet.**
