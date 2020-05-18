"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handlebars_1 = __importDefault(require("handlebars"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
var path_1 = __importDefault(require("path"));
var db_1 = __importDefault(require("./config/db"));
var app = express_1.default();
// Handlebars
app.engine("handlebars", express_handlebars_1.default({
    defaultLayout: "main",
    handlebars: allow_prototype_access_1.allowInsecurePrototypeAccess(handlebars_1.default),
}));
app.set("view engine", "handlebars");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var PORT = process.env.PORT || 5000;
// Testing database
db_1.default.authenticate()
    .then(function () { return console.log("database connected"); })
    .catch(function (err) { return console.log("error", err); });
// Routes
app.get("/", function (req, res) {
    res.render("index", { layout: "landing" });
});
// Gig routes middleware
app.use("/gigs", require("./routes/gigs"));
//API route middleware
app.use("/api", require("./routes/api"));
app.listen(PORT, function () { return console.log("Server running on port: " + PORT); });
