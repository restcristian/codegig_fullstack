import { FunctionComponent } from "react";
import Gigs from "../pages/Gigs";
import AddGig from "../pages/AddGig";
import Search from "../pages/Search";
import { RouteComponentProps } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

interface RouteType {
  path: string;
  exact?: boolean;
  component: FunctionComponent<RouteComponentProps>;
  requiresAuth?: boolean;
  label?: string;
}

const routes: RouteType[] = [
  {
    path: "/",
    component: Search,
    exact: true,
    label: "Home",
  },
  {
    path: "/jobs",
    component: Gigs,
    exact: true,
    requiresAuth: true,
    label: "All Jobs",
  },
  {
    path: "/jobs/add",
    component: AddGig,
    requiresAuth: true,
    label: "Add Job",
  },
  {
    path: "/login",
    component: Login,
    label: "Login",
  },
  {
    path: "/signup",
    component: SignUp,
    label: "Signup",
  },
];

export default routes;
