"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GigListItem = function (_a) {
    var gig = _a.gig;
    var title = gig.title, description = gig.description, budget = gig.budget, technologies = gig.technologies;
    return (<div className="gig">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li>Budget: {budget}</li>
        <li>
          <button className="btn btn-reverse">Apply Now</button>
        </li>
      </ul>
      <div className="tech">
        <small>
          Technologies Needed: <span>{technologies}</span>
        </small>
      </div>
    </div>);
};
exports.default = GigListItem;
