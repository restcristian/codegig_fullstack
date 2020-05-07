import React, { FunctionComponent } from "react";
import Gigs from "../pages/Gigs";
import AddGig from "../pages/AddGig";

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
    exact: true,
  },
  {
    path: "/gigs/add",
    component: AddGig,
  },
];

export default routes;
