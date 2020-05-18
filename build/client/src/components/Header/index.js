"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header = function (_a) {
    var location = _a.location;
    var pathname = location.pathname;
    return (<header className={pathname === "/" ? "" : "inner"}>
      <h2>
        <a href="/">
          <i className="fas fa-code"></i>CodeJobs
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <react_router_dom_1.NavLink to="/" exact>
              Home
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/jobs" exact>
              All Jobs
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/jobs/add" exact>
              Add Job
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/login" exact>
              Login
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/signup" exact>
              Signup
            </react_router_dom_1.NavLink>
          </li>
        </ul>
      </nav>
    </header>);
};
exports.default = react_router_dom_1.withRouter(Header);
