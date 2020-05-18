"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Gigs_1 = __importDefault(require("../pages/Gigs"));
var AddGig_1 = __importDefault(require("../pages/AddGig"));
var Search_1 = __importDefault(require("../pages/Search"));
var Login_1 = __importDefault(require("../pages/Login"));
var Signup_1 = __importDefault(require("../pages/Signup"));
var routes = [
    {
        path: "/",
        component: Search_1.default,
        exact: true,
    },
    {
        path: "/jobs",
        component: Gigs_1.default,
        exact: true,
    },
    {
        path: "/jobs/add",
        component: AddGig_1.default,
    },
    {
        path: "/login",
        component: Login_1.default,
    },
    {
        path: "/signup",
        component: Signup_1.default,
    },
];
exports.default = routes;
