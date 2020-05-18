"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("../GigListItem/index"));
var GigList = function (_a) {
    var gigs = _a.gigs;
    var renderContent = function () {
        return gigs.map(function (gig, idx) { return (<index_1.default key={idx} gig={gig}/>); });
    };
    return <>{renderContent()}</>;
};
exports.default = GigList;
