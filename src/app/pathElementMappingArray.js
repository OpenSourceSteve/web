import {
    // Accessibility,
    Authentication,
    CaseDetailsView,
    CasesListView,
    ClientDetailsView,
    ClientsListView,
    Confirmation,
    Docket,
    ErrorView,
    // FinancesDetail,
    // FinancesList,
    // Finances,
    Login,
    PasswordReset,
    // Profile,
    Home,
    // Settings,
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
      path: "/reset-password",
      element: <PasswordReset />
    },
    // {
    //   path: "/profile",
    //   element: <Authentication><Profile /></Authentication>
    // },
    // {
    //   path: "/settings",
    //   element: <Authentication><Settings /></Authentication>
    // },
    {
      path: "/signup",
      element: <Signup />
    },
    // {
    //   path: "/terms-and-conditions",
    //   element: <TermsAndConditions />
    // }
  ]