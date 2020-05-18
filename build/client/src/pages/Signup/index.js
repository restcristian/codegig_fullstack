"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var Form_1 = __importDefault(require("../../components/Form"));
var Input_1 = __importDefault(require("../../components/Input"));
var actions_1 = require("../../store/actions");
var SignUp = function () {
    var _a = react_1.useState([]), errors = _a[0], setErrors = _a[1];
    var _b = react_1.useState(false), isValid = _b[0], setIsValid = _b[1];
    var _c = react_1.useState(""), username = _c[0], setUsername = _c[1];
    var _d = react_1.useState(""), password = _d[0], setPassword = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var onSubmit = function (e) {
        e.preventDefault();
        dispatch(actions_1.signUp(username, password));
    };
    return (<div className="container">
      <h2>Sign Up</h2>
      <Form_1.default testId="login-form" isValid onSubmit={onSubmit} errors={errors}>
        <Input_1.default id="username" label="Please, enter username" placeholder="ej: admin" maxLength={20} onChange={function (e) { return setUsername(e.target.value); }} value={username} testId="input-username"/>
        <Input_1.default id="password" label="Please, enter password" placeholder="" maxLength={20} onChange={function (e) { return setPassword(e.target.value); }} value={password} type="password" testId="input-password"/>
      </Form_1.default>
    </div>);
};
exports.default = SignUp;
