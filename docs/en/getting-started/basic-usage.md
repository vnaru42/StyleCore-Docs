# Basic Usage

Once a configuration has been loaded, StyleCore works alongside normal QGIS workflows. You do **not** need Developer Mode to use shared resources.

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 1. Check your setup

1. Open **StyleCore → Settings…**.
2. Confirm that the correct configuration is active.
3. If you need to create or repair a configuration, see [Configuration – In QGIS](../documentation/configuration.md).

</div>
<div class="sc-media-row__visual" markdown>

![The main StyleCore menu](../../assets/images/screenshots/menu-main.png){ width="100%" }
*The StyleCore menu provides quick access to settings, Automatic Styling, templates, layouts and help.*

</div>
</div>

## 2. Add layers and use automatic styling

1. Make sure **Automatic Styling** is enabled in the StyleCore menu.
2. Add a layer to QGIS as usual.
3. If a matching QML is available, StyleCore applies it.
4. If no rule or matching QML exists, the layer keeps its normal appearance.

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 3. Start a project from a shared template

1. Open **StyleCore → New from Template**.
2. Choose a template.
3. Work in the new project.
4. Use **Save As** to save your own project under a new name.

</div>
<div class="sc-media-row__visual" markdown>

![New from Template menu](../../assets/images/screenshots/menu-new-from-template.png){ width="100%" }
*Templates are opened directly from the StyleCore menu.*

</div>
</div>

<div class="sc-media-row" markdown>
<div class="sc-media-row__text" markdown>

## 4. Add a print layout

1. Open **StyleCore → Print Layouts**.
2. Choose a layout.
3. QGIS Layout Designer opens with a new layout in your project.

</div>
<div class="sc-media-row__visual" markdown>

![Print Layouts menu](../../assets/images/screenshots/menu-print-layouts.png){ width="100%" }
*Available print layouts are listed directly in the StyleCore menu.*

</div>
</div>

## 5. Use your own style or update an existing layer

- **Personal Override:** assign your own QML to a layer name in **Settings → Options → StyleCore → Personal Overrides**.
- **Manual Style Update…:** select an existing layer and apply a chosen style deliberately.

Neither action changes the shared team setup.

## 6. Get help

Use **StyleCore → Help & Documentation** or **Report an Issue**, or consult [Troubleshooting](../documentation/troubleshooting.md).
