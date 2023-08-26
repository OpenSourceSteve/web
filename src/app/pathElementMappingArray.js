import {
    // Accessibility,
    Authentication,
    CaseDetailsView,
    CasesListView,
    ChangePasswordView,
    ClientDetailsView,
    ClientsListView,
    Confirmation,
    Docket,
    ErrorView,
    // FinancesDetail,
    // FinancesList,
    // Finances,
    ForgotPassword,
    Login,
    ProfileView,
    Home,
    SettingsView,
    Signup,
    // Terms
  } from "../features"

  export const pathElementMappingArray = [
    // {
    //   path: "/a11y",
    //   element: <A11y />
    // },
    {
      path: "/cases",
      element: <Authentication><CasesListView /></Authentication>
    },
    {
      path: "/cases/:caseId",
      element: <Authentication><CaseDetailsView /></Authentication>
    },
    {
      path: "/change-password",
      element: <Authentication><ChangePasswordView /></Authentication>
    },
    {
      path: "/clients",
      element: <Authentication><ClientsListView /></Authentication>
    },
    {
      path: "/clients/:clientId",
      element: <Authentication><ClientDetailsView /></Authentication>
    },
    {
      path: "/confirmation",
      element: <Confirmation />
    },
    {
      path: "/docket",
      element: <Authentication><Docket /></Authentication>
    },
    // {
    //   path: "/finances",
    //   element: <Authentication><FinancesList /></Authentication>
    // },
    // {
    //   path: "/finances",
    //   element: <Authentication><Finances /></Authentication>
    // },
    // {
    //   path: "/finances/:accountId",
    //   element: <Authentication><FinancesDetail /></Authentication>
    // },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorView />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "/profile",
      element: <Authentication><ProfileView /></Authentication>
    },
    {
      path: "/settings",
      element: <Authentication><SettingsView /></Authentication>
    },
    {
      path: "/signup",
      element: <Signup />
    },
    // {
    //   path: "/terms-and-conditions",
    //   element: <TermsAndConditions />
    // }
  ]