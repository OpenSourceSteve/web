import { Layout } from "../../components"

import { ChangePasswordForm } from "./ChangePasswordForm"
import { ChangePasswordSidebar } from "./ChangePasswordSidebar"

export const ChangePasswordView = () => {
  return (
    <Layout
      sidebarContent={<ChangePasswordSidebar />}
      sectionContent={<ChangePasswordForm />}
    />
  )
}