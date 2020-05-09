import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header className="inner">
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

export default Header;
