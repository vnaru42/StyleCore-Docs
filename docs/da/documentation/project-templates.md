# Projektskabeloner

Projektskabeloner er genanvendelige QGIS-projekter (`.qgz` eller `.qgs`), som giver kollegerne et fælles udgangspunkt. StyleCore gør de delte skabeloner tilgængelige via QGIS' normale funktion til nye projekter.

## Fra fælles skabelon til lokal skabelon

```text
Fælles ressourcemappe
    template_projects/
         Base_Map.qgz
                |
                | StyleCore synkroniserer manglende eller ændrede filer
                v
Hver kollegas QGIS-profil
    project_templates/
         Base_Map.qgz
                |
                v
QGIS Nyt projekt / Skabeloner
```

Den konfigurerede skabelonmappe er den **fælles kilde**. StyleCore kopierer manglende eller opdaterede `.qgz`- og `.qgs`-filer til standardmappen `project_templates` i hver brugers QGIS-profil. De lokale kopier gør skabelonerne synlige i QGIS; de er ikke en ekstra mastermappe.

Skabelonen indeholder stadig sine egne lagforbindelser. Alle, der åbner den, skal have adgang til de datakilder, den henviser til – helt som ved andre QGIS-projekter.

## Opret en ny projektskabelon

1. Opret et QGIS-projekt med de ønskede lag, koordinatsystem, kortudsnit, lagrækkefølge, synlighed og styling.
2. Kontrollér datakilderne, og undgå filstier, som kollegerne ikke kan tilgå.
3. Gem projektet som `.qgz` eller `.qgs` i den **konfigurerede fælles skabelonmappe**.
4. Lad StyleCore synkronisere til den lokale QGIS-skabelonmappe.
5. Opret et nyt projekt fra skabelonen i QGIS, og kontrollér resultatet.

Hvis skabelonlisten ikke opdateres straks, kan du genindlæse pluginet eller genstarte QGIS og kontrollere kildestien.

## Opdater en eksisterende skabelon

Rediger **skabelonens fælles kildefil**, når du ønsker, at kollegerne skal modtage opdateringen. StyleCore kopierer den igen til de andre brugeres QGIS-profiler, når det registrerer en opdateret kilde.

Hvis du vil have en **personligt tilpasset version** af en fælles skabelon, bør du gemme en kopi med et andet navn i din lokale skabelonmappe.

En opdatering af den fælles skabelon og en QML-opdatering er **to forskellige ting**. Ændringer i `.qgz` ændrer projektets opbygning; ændringer i en QML ændrer den style, StyleCore kan anvende på matchende lag, når reglerne gælder.

## Template refresh: opdater styles ved åbning

Den ansvarlige kan vælge bestemte skabeloner, hvis eksisterende lag skal have de nyeste matchende QML-styles, når skabelonen åbnes.

1. Åbn **Settings → Options → StyleCore → Developer**.
2. Vælg under **Template refresh** de skabeloner, der skal kontrolleres ved åbning.
3. Anvend og gem den fælles konfiguration, og godkend ændringen.
4. Kontrollér, at **Automatic styling** er aktiveret under testen.
5. Åbn en af de valgte skabeloner, og kontrollér, at de relevante lag styles som forventet.

Valget gemmes i `restyle_on_open` i den aktive JSON-fil og bruger skabelonnavne uden `.qgz` eller `.qgs`. Kun valgte og genkendte skabeloner bliver opdateret på denne måde.

!!! important "Almindelige projekter bevarer deres gemte styles"
    Når et andet gemt QGIS-projekt åbnes, ændrer StyleCore ikke automatisk dets eksisterende lagstyles. Brug [Manual Style Update](layer-styling.md#manual-style-update), hvis du bevidst vil ændre et lag i et eksisterende projekt.

## Flere skabeloner til forskellige teams

En konfiguration kan udstille flere fælles skabeloner, eksempelvis en kontorskabelon og en måleskabelon. De kan bruge de samme datakilder, men have forskellige lagnavne, QML-styles, filtre og synlighedsindstillinger. Du behøver ikke et særligt nedarvningssystem for at lave disse forskelle.

Koordinér det fælles indhold, når du ændrer skabelonerne, og test hver skabelon, når kildefilen er opdateret.
