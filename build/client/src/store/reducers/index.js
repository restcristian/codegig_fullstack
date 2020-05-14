"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Gigs_1 = __importDefault(require("./Gigs"));
var Account_1 = __importDefault(require("./Account"));
exports.default = redux_1.combineReducers({
    gigsReducer: Gigs_1.default,
    accountReducer: Account_1.default,
});
