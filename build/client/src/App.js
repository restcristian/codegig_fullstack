"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_1 = __importDefault(require("./components/Header"));
var react_router_dom_1 = require("react-router-dom");
var routes_1 = __importDefault(require("./routes"));
require("./App.css");
var App = function () {
    return (<>
      <Header_1.default />
      <react_router_dom_1.Switch>
        {routes_1.default.map(function (route) {
        return <react_router_dom_1.Route key={route.path} {...route}/>;
    })}
      </react_router_dom_1.Switch>
    </>);
};
exports.default = App;
