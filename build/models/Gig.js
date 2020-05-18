"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = __importDefault(require("../config/db"));
var Gig = db_1.default.define("gig", {
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    technologies: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    budget: {
        type: sequelize_1.DataTypes.STRING,
    },
    contact_email: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Gig;
