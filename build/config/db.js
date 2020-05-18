"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var _a = process.env, DB_HOST = _a.DB_HOST, DB_USER = _a.DB_USER, DB_NAME = _a.DB_NAME, DB_PASSWORD = _a.DB_PASSWORD, DB_PORT = _a.DB_PORT;
exports.default = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    port: +DB_PORT,
});
