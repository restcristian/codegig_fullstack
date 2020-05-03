"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handlebars_1 = require("handlebars");
var express_handlebars_1 = require("express-handlebars");
var allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
var path_1 = require("path");
var db_1 = require("./config/db");
var app = express_1["default"]();
// Handlebars
app.engine("handlebars", express_handlebars_1["default"]({
    defaultLayout: "main",
    handlebars: allow_prototype_access_1.allowInsecurePrototypeAccess(handlebars_1["default"])
}));
app.set("view engine", "handlebars");
app.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
var PORT = process.env.PORT || 5000;
// Testing database
db_1["default"].authenticate()
    .then(function () { return console.log("database connected"); })["catch"](function (err) { return console.log("error", err); });
// Routes
app.get("/", function (req, res) {
    res.render("index", { layout: "landing" });
});
// Gig routes middleware
app.use("/gigs", require("./routes/gigs"));
app.listen(PORT, function () { return console.log("Server running on port: " + PORT); });
