## Choose your setup

=== "I already have a configuration"

    If a teammember has provided a `.json` configuration file, you do **not** need to create another one.

    1. Open the StyleCore toolbar menu and choose **Settings…** (or **Settings → Options → StyleCore**).
    2. Expand **Configuration**.
    3. Click **Load configuration…**.
    4. Select the file you received or insert a file path. The config path field supports UNC paths. The file picker initially opens in the plugin's `StyleCore/config/` folder, but you can navigate to any accessible folder.
    5. Check that the **active configuration** and its resource root appear in the settings.

	[Continue with basic usage →](basic-usage.md){ .md-button .md-button--primary }

	???+ info "Shared configs"
		If your StyleCore is maintained by a teammember, you should point to a shared location.

=== "I need to create a configuration"

    1. Prepare one folder that will contain your QML styles, QGIS templates and print layouts.
    2. Open **Settings → Options → StyleCore → Configuration**.
    3. Click **New configuration…**.

    [Continue with configuration →](../documentation/configuration.md#create-a-new-configuration){ .md-button .md-button--primary }
	
	???+ info "Config developer"
		If you are maintaining StyleCore for a team or organization, the best practice would be to save your created config to a shared location. You should then distribute the shared location to your team. This means if you as the developer
		change settings or locations, the settings will then be shared through the commonly used config file. You control the behaviour of the teams StyleCore.