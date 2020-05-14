"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Search = function (_a) {
    var history = _a.history;
    var _b = react_1.useState(""), term = _b[0], setTerm = _b[1];
    var onSubmit = function (e) {
        history.push("/jobs?term=" + term);
    };
    return (<section id="search" className="search-wrap">
      <h1>Find A Coding Job</h1>
      <form onSubmit={onSubmit} className="search-form">
        <i className="fas fa-search"></i>
        <input type="search" name="term" placeholder="Javascript, PHP, Rails, Flutter, etc..." onChange={function (e) { return setTerm(e.currentTarget.value); }} value={term}/>
        <input type="submit" value="Search"/>
      </form>
    </section>);
};
exports.default = Search;
