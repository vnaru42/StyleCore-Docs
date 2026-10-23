# First Use

Choose the setup that matches your situation. **Most users should load the configuration provided by their team**, not create a new one.

=== "A colleague gave me a configuration"

    1. Connect to your team's network or VPN if necessary.
    2. Open **StyleCore → Settings…**, or **Settings → Options → StyleCore** in QGIS.
    3. Expand **Configuration** and select **Load configuration…**. You can also paste the full JSON path, including a UNC path such as `\\server\GIS\StyleCore\office.json`, into the path field and load it.
    4. Confirm the correct name appears under **Active configuration**.
    5. Open **StyleCore → New from Template** or **Print Layouts** to check that your shared resources are accessible.
    6. [Continue to Basic Usage →](basic-usage.md)

    !!! tip
        Keep using the shared JSON **at its shared location**. Separate local copies will not automatically receive changes made by your team.

=== "I am setting up StyleCore for myself or a team"

    1. Decide where the JSON configuration and resources should live. For a team, use a location everyone can access.
    2. Open **Settings → Options → StyleCore → Configuration**.
    3. Select **New configuration…**.
    4. Follow [Create a new configuration](../documentation/configuration.md#2-create-a-new-configuration) to choose the JSON location, root and developer code.
    5. Add QML styles, QGIS project templates and print layouts as needed; the wizard creates their folders, not their contents.
    6. Test the setup and share the **JSON path** with colleagues.

    See [Configuration – In QGIS](../documentation/configuration.md) for complete instructions.
