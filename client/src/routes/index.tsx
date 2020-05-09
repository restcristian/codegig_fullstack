import React, { FunctionComponent } from "react";
import Gigs from "../pages/Gigs";
import AddGig from "../pages/AddGig";
import Search from "../pages/Search";
import { RouteComponentProps } from "react-router-dom";

interface RouteType {
  path: string;
  exact?: boolean;
  component: FunctionComponent<RouteComponentProps>;
}

const routes: RouteType[] = [
  {
    path: "/",
    component: Search,
    exact: true,
  },
  {
    path: "/jobs",
    component: Gigs,
    exact: true,
  },
  {
    path: "/jobs/add",
    component: AddGig,
  },
];

export default routes;
