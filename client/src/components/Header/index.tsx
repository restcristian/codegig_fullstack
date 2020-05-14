import React, { FunctionComponent } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Header: FunctionComponent<Props> = ({ location }) => {
  const { pathname } = location;
  return (
    <header className={pathname === "/" ? "" : "inner"}>
      <h2>
        <a href="/">
          <i className="fas fa-code"></i>CodeJobs
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" exact>
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs/add" exact>
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" exact>
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
