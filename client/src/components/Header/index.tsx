import React, { FunctionComponent } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">All Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/add">Add Job</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
