import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { pathElementMappingArray } from "./app/pathElementMappingArray";

const router = createBrowserRouter(pathElementMappingArray);

export const App = () => {
  return <RouterProvider router={router} />;
}

export default App;