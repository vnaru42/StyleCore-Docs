# Installation

Installér først StyleCore direkte i QGIS. Derefter kan du indlæse dit teams fælles konfiguration eller oprette din egen.

## 1. Kontrollér kravene

- **QGIS 3.44 eller nyere.** StyleCore 1.9.0 angiver kompatibilitet med QGIS 3.44 og 4.x.
- Adgang til fællesdrev eller datakilder **kun hvis dit teams konfiguration bruger dem**.

<div class="sc-install-illustration"><figure><img src="../../assets/images/screenshots/installation-qgis.png" alt="StyleCore i QGIS’ officielle pluginadministration (allerede installeret)." style="max-width:640px"><figcaption>StyleCore i QGIS’ officielle pluginadministration (allerede installeret).</figcaption></figure></div>

## 2. Installér fra QGIS (anbefalet)

StyleCore findes i det [officielle QGIS-pluginrepository](https://plugins.qgis.org/plugins/StyleCore/). Det er den nemmeste måde at installere pluginet og få opdateringer på.

1. Åbn QGIS og vælg **Plugins → Manage and Install Plugins…**.
2. Vælg **All**, og søg efter **StyleCore**.
3. Vælg **StyleCore**, og klik på **Install Plugin**.
4. Luk pluginadministrationen, og åbn **StyleCore**-menuen på værktøjslinjen.

!!! tip "Kan du ikke finde StyleCore?"
    Kontrollér, at det officielle QGIS-pluginrepository er aktiveret under **Settings** i pluginadministrationen, og at QGIS har internetadgang. Kontrollér også din QGIS-version.

## 3. Alternativ: Installér ZIP fra GitHub

Brug denne metode, hvis du foretrækker manuel installation eller ikke kan bruge QGIS-pluginrepositoryet.

1. Åbn [den nyeste StyleCore-udgivelse på GitHub](https://github.com/vnaru42/StyleCore/releases/latest).
2. Find **Assets**, og hent filen **`StyleCore_vX.Y.Z.zip`** (vælg den aktuelle version).
3. Gå til **Plugins → Manage and Install Plugins… → Install from ZIP** i QGIS.
4. Vælg den hentede ZIP-fil, og klik på **Install Plugin**.
5. Åbn **StyleCore**-menuen på værktøjslinjen.

!!! warning "Vælg plugin-ZIP – ikke Source code-ZIP"
    GitHubs automatisk genererede **Source code (zip)** er ikke den pakkede QGIS-pluginfil. Hent i stedet **StyleCore_vX.Y.Z.zip** under udgivelsens Assets. ZIP-filen skal ikke udpakkes før installation.

!!! note "Plugin og konfiguration er to forskellige ting"
    Installationen indeholder ikke arbejdspladsens fælles QML-styles, projektskabeloner, printlayouts eller JSON-konfiguration. Indlæs eller opret en konfiguration efter installationen.

## 4. Fortsæt

[Første brug →](first-use.md){ .md-button .md-button--primary }
