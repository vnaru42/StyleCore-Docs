# Alle funktioner

StyleCore forbinder QGIS-brugere med fælles eller lokale **styles, projektskabeloner, printlayouts og valgfrie skrifttyper**. Fælles ressourcemapper hjælper teams med at arbejde ensartet, mens styles og skabeloner udvikles.


<img src="../../../assets/images/StyleCore_Diagram_noBG.png"
     alt="StyleCore forbinder QGIS-brugere med fælles ressourcer"
     style="width: 95%; display: block; margin: 20px auto;">

<div class="sc-steps">
  <div class="sc-step">
    <strong>Forbind</strong>
    <p>Saml teamet om fælles QGIS-ressourcer.</p>
  </div>
  <div class="sc-step">
    <strong>Opret</strong>
    <p>Opret projekter hurtigere med færdige styles, skabeloner og layouts.</p>
  </div>
  <div class="sc-step">
    <strong>Bevar ensartetheden</strong>
    <p>Hold projekterne ensartede, mens de fælles ressourcer udvikler sig.</p>
  </div>
</div>

Dette er et hurtigt overblik; hvert link fører til en trinvis vejledning.

## Konfiguration

- Opret eller indlæs en JSON-konfiguration direkte i QGIS.
- Hold JSON og ressourcemapper samlet i en flytbar opsætning, eller vælg en særskilt rodmappe.
- Del én konfiguration på et fællesdrev (også UNC-stier).
- Kollegaer kan bruge samme fælles konfiguration og genindlæse den, når de fælles indstillinger ændres.
- Gem fælles regler i JSON, mens personlige valg forbliver lokale.

[Opsætning af konfiguration →](../documentation/configuration.md) · [JSON-felter →](../documentation/configuration-json.md)

## Lagstyling

- Anvend automatisk QML-styles på **nytilføjede** lag.
- Match på **synligt lagnavn**, **fælles lagregel**, **File Suffix Rule** eller **Personal Override**.
- Brug **Personal Overrides** til lokale QML-valg uden at ændre den fælles opsætning.
- Slå Automatic Styling til/fra fra StyleCore-menuen.
- Anvend QML manuelt på et **eksisterende** lag uden at oprette en fælles regel.
- Gem udvalgte lagstyles som fælles QML gennem Developer Mode.

[Brug og vedligehold Lagstyling →](../documentation/layer-styling.md)

## Projektskabeloner

- Åbn fælles `.qgs`/`.qgz` **direkte** uden lokale skabelonkopier.
- Find skabeloner i den konfigurerede mappe **og dens undermapper**.
- Tilknyt **eksterne templates**, som ligger andre steder.
- Indstil **Active** (vis i menu) og **Refresh** (opdater matchende QML ved åbning) uafhængigt.
- Start nye, ikke-gemte projekter fra skabeloner, så fælles originaler beskyttes.

[Opret og vedligehold projektskabeloner →](../documentation/project-templates.md)

## Printlayouts

- Åbn fælles `.qpt` direkte fra StyleCore-menuen.
- Tilpas `main_map` og `mini_map` til det aktuelle QGIS-kortudsnit.
- Aktivér **Move Item Content** for `main_map`, hvor det understøttes.
- Match SVG'er med layoutets Picture items efter **Item ID** — fx `logo` → `logo.svg` eller `north_arrow` → `north_arrow.svg`.
- Opret flere layouts uden at overskrive eksisterende layouts.

[Opret og vedligehold printlayouts →](../documentation/print-layouts.md)

## Skrifttyper, vedligeholdelse og hjælp

- Registrér eventuelt `.ttf`/`.otf` fra `root/fonts` i QGIS.
- Brug **Developer Mode** til fælles indstillinger og QML-gemning med kodebekræftelse og filrettigheder.
- Åbn dokumentation og fejlrapportering direkte fra StyleCore-menuen.

[Udviklerværktøjer →](../documentation/developer-tools.md) · [Fejlfinding →](../documentation/troubleshooting.md)
