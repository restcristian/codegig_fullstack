import React, { FunctionComponent } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import routes from "../../routes";
import { useSelector, shallowEqual } from "react-redux";
import { AppStateType } from "../../store/types";
import { isEmpty } from "../../helpers";

interface Props extends RouteComponentProps {}

const Header: FunctionComponent<Props> = ({ location }) => {
  const { pathname } = location;

  const {
    userReducer: { token },
  } = useSelector((state: AppStateType) => state, shallowEqual);

  const renderLinks = () => {
    return routes.map((route) => {
      return isEmpty(token) && route.requiresAuth ? null : !isEmpty(token) &&
        route.path === "/login" ? null : (
        <li>
          <NavLink to={route.path} exact>
            {route.label}
          </NavLink>
        </li>
      );
    });
  };
  return (
    <header className={pathname === "/" ? "" : "inner"}>
      <h2>
        <a href="/">
          <i className="fas fa-code"></i>CodeJobs
        </a>
      </h2>
      <nav>
        <ul>{renderLinks()}</ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
