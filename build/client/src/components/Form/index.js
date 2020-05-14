"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Form = function (_a) {
    var errors = _a.errors, onSubmit = _a.onSubmit, children = _a.children, testId = _a.testId, isValid = _a.isValid;
    return (<div>
      {errors.length > 0 && (<div className="errors" data-testid="errors">
          {errors.map(function (error, idx) { return (<div key={idx} className="error">
              <p>{error.text}</p>
            </div>); })}
        </div>)}
      {isValid && (<span className="form-status" style={{ display: "none" }} data-testid="form-status">
          submitted
        </span>)}
      <form method="POST" onSubmit={onSubmit} data-testid={testId}>
        {children}
        <input type="submit" value="Submit" className="btn btn-reverse" data-testid="btn-submit"></input>
      </form>
    </div>);
};
exports.default = Form;
