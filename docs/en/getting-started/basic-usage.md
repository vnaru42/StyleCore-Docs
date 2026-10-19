# Basic Usage

StyleCore is designed to load styles, templates and print layouts from any location. Most users only need to **load a config once**, then work normally in QGIS.

## Start with a configuration

!!! info "What is a configuration?"
    A configuration is a small JSON file that StyleCore uses to connect QGIS to your team's styles, project templates and print layouts. You do not need to edit the file yourself.

If a colleague has provided a configuration or a path to one, open **Settings → Options → StyleCore → Configuration** and select **Load configuration…**. Choose the configuration file or paste a filepath or UNC path pointing to a configuration file.

If nobody has prepared a configuration yet, see [Create a configuration for your team →](../documentation/configuration.md#create-a-new-configuration).

If you have been provided a config file, no further action is needed. Continue reading below:

## Automatic styling while working normally in QGIS

With **Automatic styling** enabled, simply add layers as you normally would. 

A developer has already told StyleCore where to find your teams styles, layouts and templates. When StyleCore finds a matching shared style, it applies it automatically. If no suitable style is available, your layer keeps its existing appearance.

You can turn automatic styling on or off from the StyleCore toolbar menu.

## Your own style preferences
Do you want another style to optimize your personal workflow?

Under **Settings → Options → StyleCore → Personal Overrides**, you can choose a personal QML style for a layer. Your preference applies to matching newly added layers in your QGIS profile and does **not** change the shared configuration for other users.

You can reset one personal override or all of them to return to the shared defaults.

## Change the style of an existing layer

If a layer in an already saved project needs a different style, use **Manual Style Update…** in the StyleCore toolbar. Choose the layer, review the suggested QML style (or browse for one), then click **Use Style**. Save the QGIS project to keep the change.

This only changes the layer you selected; it does not create a shared styling rule or modify your colleagues' projects.


## Use shared project templates

When your configuration provides project templates, you can choose them through QGIS' normal project-template workflow. This gives you a prepared starting point, including the layers and project settings your team uses.

!!! warning "Saving your project"
    When using shared templates, make sure to save edited projects locally, or to another path. Overwriting the shared template will change the template being distributed through StyleCore

Shared templates can be selected for **template refresh**. Known layers in selected templates will check for updated styles and refresh these.

## Open a print layout

Open the **StyleCore** toolbar menu, find **PRINT** and select a layout. StyleCore creates the layout from the shared template and opens QGIS Layout Designer. If the layout has a `main_map` item, the map is initialized from your canvas and **Move Item Content** is selected automatically.


## Need detailed information?

The documentation section has a detailed explanation on how all StyleCore features works, how shared configurations are maintained and what a configuration administrator can control. For a quick list of capabilities, visit [All Features](../features/feature-reference.md).
