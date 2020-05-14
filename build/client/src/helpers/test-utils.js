"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var store_1 = __importDefault(require("../store"));
var history_1 = __importDefault(require("../history"));
var react_2 = require("@testing-library/react");
var AllTheProviders = function (_a) {
    var children = _a.children;
    return (<react_redux_1.Provider store={store_1.default}>
      <react_router_dom_1.Router history={history_1.default}>{children}</react_router_dom_1.Router>
    </react_redux_1.Provider>);
};
var customRender = function (ui, options) {
    return react_2.render(ui, __assign({ wrapper: AllTheProviders }, options));
};
exports.render = customRender;
// re-export everything
__export(require("@testing-library/react"));
