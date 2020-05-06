import React, { FunctionComponent } from "react";
import Gigs from "../pages/Gigs";

interface RouteType {
  path: string;
  exact?: boolean;
  component: FunctionComponent;
}

const routes: RouteType[] = [
  {
    path: "/",
    component: () => <div>test</div>,
    exact: true,
  },
  {
    path: "/gigs",
    component: Gigs,
  },
];

export default routes;
