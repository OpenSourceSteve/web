import { Layout } from "../../components"

import { Profile } from "./Profile"
import { ProfileSidebar } from "./ProfileSidebar"

export const ProfileView = () => {

    return (
        <Layout
        sidebarContent={<ProfileSidebar />}
        sectionContent={<Profile />}
      />
    )
}