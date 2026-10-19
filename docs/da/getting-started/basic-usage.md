# Daglig brug

StyleCore er udviklet til at hente styles, projektskabeloner og printlayouts fra forskellige placeringer. De fleste brugere skal kun **indlæse en konfiguration én gang** og kan derefter arbejde normalt i QGIS.

## Start med en konfiguration

!!! info "Hvad er en konfiguration?"
    En konfiguration er en lille JSON-fil, som StyleCore bruger til at forbinde QGIS med teamets styles, projektskabeloner og printlayouts. Du behøver ikke selv at redigere filen.

Hvis en kollega har givet dig en konfiguration eller en sti til den, skal du åbne **Settings → Options → StyleCore → Configuration** og vælge **Load configuration…**. Vælg filen, eller indsæt en filsti eller UNC-sti.

Hvis ingen har oprettet en konfiguration, kan du læse [Opret en konfiguration til dit team →](../documentation/configuration.md#opret-en-ny-konfiguration).

Har du fået en konfigurationsfil, behøver du normalt ikke gøre mere. Fortsæt herunder.

## Automatisk styling under dit normale arbejde i QGIS

Når **Automatic styling** er aktiveret, tilføjer du bare lag, som du plejer.

Den ansvarlige for konfigurationen har allerede angivet, hvor StyleCore finder teamets styles, layouts og skabeloner. Finder StyleCore en passende fælles style, bliver den automatisk anvendt. Hvis der ikke findes en passende style, beholder laget sit eksisterende udseende.

Du kan slå automatisk styling til og fra fra StyleCore-menuen.

## Dine egne stylepræferencer

Vil du bruge en anden style, der passer bedre til din arbejdsproces?

Under **Settings → Options → StyleCore → Personal Overrides** kan du vælge en personlig QML-style til et lag. Den bruges til tilsvarende nye lag i din egen QGIS-profil og **ændrer ikke** kollegernes fælles konfiguration.

Du kan nulstille et enkelt personligt override eller dem alle for at vende tilbage til de fælles standarder.

## Skift style på et eksisterende lag

Hvis et lag i et allerede gemt projekt skal have en anden style, kan du bruge **Manual Style Update…** i StyleCore-menuen. Vælg laget, gennemgå den foreslåede QML (eller vælg en anden), og klik på **Use Style**. Gem QGIS-projektet for at beholde ændringen.

Det ændrer kun det valgte lag og opretter ikke en fælles regel eller ændrer kollegernes projekter.

## Brug fælles projektskabeloner

Når din konfiguration indeholder projektskabeloner, kan du vælge dem gennem QGIS' almindelige funktion til at oprette et projekt fra en skabelon. Så får du et færdigt udgangspunkt med teamets lag og projektindstillinger.

!!! warning "Gem dit eget projekt"
    Når du bruger fælles skabeloner, skal du gemme dit redigerede projekt lokalt eller på en anden placering. Hvis du overskriver den fælles skabelon, ændrer du den skabelon, som StyleCore deler med de andre.

Fælles skabeloner kan vælges til **Template refresh**, så kendte lag i udvalgte skabeloner kontrolleres for opdaterede styles.

## Åbn et printlayout

Åbn **StyleCore**-menuen, find **PRINT**, og vælg et layout. StyleCore opretter layoutet ud fra den fælles skabelon og åbner QGIS Layout Designer. Hvis layoutet har et element med ID'et `main_map`, tilpasses kortet til kortvinduet, og **Move Item Content** aktiveres automatisk.

## Har du brug for flere detaljer?

Under Dokumentation finder du detaljerede beskrivelser af funktionerne, vedligeholdelse af fælles konfigurationer og de muligheder, den ansvarlige har. Se [Alle funktioner](../features/feature-reference.md) for et hurtigt overblik.
