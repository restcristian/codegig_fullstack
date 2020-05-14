"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
exports.useQuery = function () {
    return new URLSearchParams(react_router_dom_1.useLocation().search);
};
