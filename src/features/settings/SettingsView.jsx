import { Layout } from "../../components"

import { Settings } from "./Settings"
import { SettingsSidebar } from "./SettingsSidebar"

export const SettingsView = () => {

    return (
        <Layout
        sidebarContent={<SettingsSidebar />}
        sectionContent={<Settings />}
      />
    )
}