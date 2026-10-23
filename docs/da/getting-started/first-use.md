# Første brug

Vælg den situation, der passer til dig. **De fleste brugere skal indlæse en konfiguration fra deres team** – ikke oprette en ny.

=== "En kollega har givet mig en konfiguration"

    1. Opret forbindelse til arbejdspladsens netværk eller VPN, hvis det er nødvendigt.
    2. Åbn **StyleCore → Settings…** eller **Settings → Options → StyleCore** i QGIS.
    3. Åbn **Configuration**, og vælg **Load configuration…**. Du kan også indsætte hele JSON-stien, eksempelvis en UNC-sti som `\\server\GIS\StyleCore\office.json`, i stifeltet og indlæse den.
    4. Kontrollér, at det rigtige navn vises under **Active configuration**.
    5. Prøv **StyleCore → New from Template** eller **Print Layouts** for at kontrollere adgangen til ressourcerne.
    6. [Fortsæt til Daglig brug →](basic-usage.md)

    !!! tip
        Brug JSON-filen **direkte fra den fælles placering**. Selvstændige kopier på computeren modtager ikke automatisk teamets ændringer.

=== "Jeg sætter StyleCore op til mig selv eller et team"

    1. Vælg, hvor JSON-konfiguration og ressourcer skal ligge. Til et team skal alle kunne tilgå placeringen.
    2. Åbn **Settings → Options → StyleCore → Configuration**.
    3. Vælg **New configuration…**.
    4. Følg [Opret en ny konfiguration](../documentation/configuration.md#2-opret-en-ny-konfiguration) for at vælge JSON-placering, rodmappe og udviklerkode.
    5. Tilføj QML-styles, QGIS-projektskabeloner og printlayouts efter behov. Guiden opretter mapperne, men ikke filerne i dem.
    6. Test opsætningen, og del **stien til JSON-filen** med kollegerne.

    Se [Konfiguration – i QGIS](../documentation/configuration.md) for den fulde vejledning.
