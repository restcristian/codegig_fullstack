"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Gig_1 = __importDefault(require("../../models/Gig"));
var User_1 = __importDefault(require("../../models/User"));
var sequelize_1 = __importDefault(require("sequelize"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var router = express_1.Router();
var Op = sequelize_1.default.Op;
var PRIVATE_KEY = process.env.PRIVATE_KEY;
//Get gig list
router.get("/gigs", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var gigs, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gig_1.default.findAll()];
            case 1:
                gigs = _a.sent();
                res.send(gigs);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Add a gig
router.post("/gigs/add", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, budget, email, description, technologies, title, errors, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, budget = _a.budget, email = _a.email, description = _a.description, technologies = _a.technologies, title = _a.title;
                errors = [];
                if (!title) {
                    errors.push({
                        text: "please add a title",
                    });
                }
                if (!technologies) {
                    errors.push({
                        text: "please add some technologies",
                    });
                }
                if (!description) {
                    errors.push({
                        text: "please add a description",
                    });
                }
                if (!email) {
                    errors.push({
                        text: "please add a contact email",
                    });
                }
                if (!(errors.length > 0)) return [3 /*break*/, 1];
                res.send({
                    errors: errors,
                });
                return [3 /*break*/, 5];
            case 1:
                if (!budget) {
                    budget = "Unknown";
                }
                else {
                    budget = "$" + budget;
                }
                technologies = technologies.toLowerCase().replace(/,\s+/g, ",");
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, Gig_1.default.create({
                        title: title,
                        technologies: technologies,
                        budget: budget,
                        description: description,
                        email: email,
                    })];
            case 3:
                _b.sent();
                res.send({
                    title: title,
                    technologies: technologies,
                    budget: budget,
                    description: description,
                    email: email,
                });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                console.log(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Search for gigs
router.post("/gigs/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var term, gigs, err_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                term = req.body.term;
                term = term.toLowerCase();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Gig_1.default.findAll({
                        where: {
                            technologies: (_a = {},
                                _a[Op.like] = "%" + term + "%",
                                _a),
                        },
                    })];
            case 2:
                gigs = _b.sent();
                res.send(gigs);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                console.log(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Authentication
router.post("/auth/signup", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, users, salt, hashedPassword, err_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, , 7]);
                return [4 /*yield*/, User_1.default.findAll({
                        where: {
                            username: (_b = {},
                                _b[Op.eq] = username,
                                _b),
                        },
                    })];
            case 2:
                users = _c.sent();
                if (users.length > 0) {
                    res.status(500).send({
                        status: "user already exists",
                    });
                }
                return [4 /*yield*/, bcrypt_1.default.genSalt()];
            case 3:
                salt = _c.sent();
                return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
            case 4:
                hashedPassword = _c.sent();
                return [4 /*yield*/, User_1.default.create({
                        username: username,
                        password: hashedPassword,
                    })];
            case 5:
                _c.sent();
                res.send({
                    status: "SUCCESS",
                });
                return [3 /*break*/, 7];
            case 6:
                err_4 = _c.sent();
                res.status(500).send({
                    status: "FAILED",
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
