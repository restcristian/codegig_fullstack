import React, { FunctionComponent } from "react";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gigs">All Jobs</a>
          </li>
          <li>
            <a href="/gigs/add">Add Job</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
