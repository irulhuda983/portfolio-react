import type { RouteObject } from "react-router-dom";

import MainLayout from "@/layouts/Main";
import Beranda from "@/pages/Beranda";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />, // layout
    children: [
      { path: "/", element: <Beranda /> }
    ],
  }
];

export default routes;