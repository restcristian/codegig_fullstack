"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, id = _a.id, testId = _a.testId, maxLength = _a.maxLength, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.rows, rows = _c === void 0 ? 10 : _c;
    return (<div className="input-group">
      <label htmlFor="title">{label}</label>
      {type === "textarea" ? (<textarea name={id} id={id} className="input-box" placeholder={placeholder} maxLength={maxLength} onChange={onChange} value={value} rows={rows} data-testid={testId}/>) : (<input type={type} name={id} id={id} className="input-box" placeholder={placeholder} maxLength={maxLength} onChange={onChange} value={value} data-testid={testId}/>)}
    </div>);
};
exports.default = Input;
