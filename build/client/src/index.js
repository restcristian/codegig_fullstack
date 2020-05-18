"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./store"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var history_1 = __importDefault(require("./history"));
var serviceWorker = __importStar(require("./serviceWorker"));
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.default}>
      <react_router_dom_1.Router history={history_1.default}>
        <App_1.default />
      </react_router_dom_1.Router>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
