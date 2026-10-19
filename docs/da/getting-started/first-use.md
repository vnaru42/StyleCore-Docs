# Første brug

## Vælg din opsætning

=== "Jeg har allerede en konfiguration"

    Hvis en kollega har givet dig en `.json`-konfiguration, behøver du **ikke** at oprette en ny.

    1. Åbn StyleCore-menuen, og vælg **Settings…** (eller **Settings → Options → StyleCore**).
    2. Fold **Configuration** ud.
    3. Klik på **Load configuration…**.
    4. Vælg filen, eller indsæt dens sti. Stifeltet understøtter også UNC-stier. Filvælgeren starter i pluginets `StyleCore/config/`-mappe, men du kan navigere til andre tilgængelige mapper.
    5. Kontrollér, at den **aktive konfiguration** og dens rodmappe vises korrekt.

    [Fortsæt til daglig brug →](basic-usage.md){ .md-button .md-button--primary }

    ???+ info "Fælles konfigurationer"
        Hvis en kollega administrerer StyleCore for jeres team, bør du bruge en konfiguration på en fælles placering.

=== "Jeg skal oprette en konfiguration"

    1. Vælg en rodmappe, hvor dine QML-styles, QGIS-skabeloner og printlayouts skal ligge.
    2. Åbn **Settings → Options → StyleCore → Configuration**.
    3. Klik på **New configuration…**.

    [Fortsæt til konfiguration →](../documentation/configuration.md#opret-en-ny-konfiguration){ .md-button .md-button--primary }

    ???+ info "Ansvarlig for konfigurationen"
        Hvis du administrerer StyleCore for et team eller en organisation, er det bedst at gemme konfigurationen på et fællesdrev. Del derefter stien med dine kolleger. Når du ændrer indstillinger eller placeringer, kan de indlæse ændringerne fra den samme konfigurationsfil. På den måde styrer du teamets fælles StyleCore-opsætning.
