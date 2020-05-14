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
var helpers_1 = require("../../helpers");
var actions_1 = require("../../store/actions");
var Form_1 = __importDefault(require("../../components/Form"));
var Input_1 = __importDefault(require("../../components/Input"));
var AddGig = function () {
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(""), technologies = _b[0], setTechnologies = _b[1];
    var _c = react_1.useState(""), budget = _c[0], setBudget = _c[1];
    var _d = react_1.useState(""), description = _d[0], setDescription = _d[1];
    var _e = react_1.useState(""), email = _e[0], setEmail = _e[1];
    var _f = react_1.useState([]), errors = _f[0], setErrors = _f[1];
    var _g = react_1.useState(false), isValid = _g[0], setIsValid = _g[1];
    var dispatch = react_redux_1.useDispatch();
    var onSubmit = function (e) {
        e.preventDefault();
        var currentErrors = [];
        if (helpers_1.isEmpty(title)) {
            currentErrors.push({
                text: "please add title",
            });
        }
        if (helpers_1.isEmpty(technologies)) {
            currentErrors.push({
                text: "please add technologies",
            });
        }
        if (helpers_1.isEmpty(budget)) {
            currentErrors.push({
                text: "please add budget",
            });
        }
        if (helpers_1.isEmpty(description)) {
            currentErrors.push({
                text: "please add description",
            });
        }
        if (helpers_1.isEmpty(email)) {
            currentErrors.push({
                text: "please add email",
            });
        }
        if (currentErrors.length > 0) {
            setIsValid(false);
        }
        else {
            setIsValid(true);
        }
        setErrors(currentErrors);
    };
    var submitGig = function (gig) {
        dispatch(actions_1.addGig(gig));
    };
    react_1.useEffect(function () {
        if (isValid) {
            var gig = {
                title: title,
                description: description,
                technologies: technologies,
                budget: budget,
                email: email,
            };
            submitGig(gig);
        }
        // eslint-disable-next-line
    }, [isValid]);
    return (<section id="add" className="container" data-testid="sectionAdd">
      <div className="form-wrap">
        <h1>Add a Job</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your job
        </p>
        <Form_1.default errors={errors} onSubmit={onSubmit} testId="form" isValid={isValid}>
          <Input_1.default id="title" maxLength={100} onChange={function (val) { return setTitle(val.currentTarget.value); }} label="Gig Title" placeholder="eg. Small Wordpress website, React developer" testId="input-title" value={title}/>
          <Input_1.default id="technologies" maxLength={100} onChange={function (val) { return setTechnologies(val.currentTarget.value); }} label="Technologies Needed" placeholder="eg. javascript, react, PHP" testId="input-technologies" value={technologies}/>
          <Input_1.default id="budget" maxLength={100} onChange={function (val) { return setBudget(val.currentTarget.value); }} label="Budget (Leave blank for unknown)" placeholder="eg. 500, 5000, 10000" testId="input-budget" value={budget} type="number"/>
          <div className="input-group">
            <Input_1.default id="description" label="Gig Description" placeholder="Describe the details of the gig" onChange={function (val) { return setDescription(val.currentTarget.value); }} maxLength={100} value={description} testId="input-description" type="textarea"/>
          </div>
          <Input_1.default id="email" maxLength={100} onChange={function (val) { return setEmail(val.currentTarget.value); }} label="Conctact Email" placeholder="Enter an email" testId="input-email" value={email}/>
        </Form_1.default>
      </div>
    </section>);
};
exports.default = AddGig;
