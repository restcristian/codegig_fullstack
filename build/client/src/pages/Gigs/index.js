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
var GigList_1 = __importDefault(require("../../components/GigList"));
var actions_1 = require("../../store/actions");
var hooks_1 = require("../../helpers/hooks");
var Gigs = function () {
    var query = hooks_1.useQuery();
    var gigs = react_redux_1.useSelector(function (state) { return state; }, react_redux_1.shallowEqual).gigsReducer.gigs;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (query.get("term")) {
            var term = query.get("term");
            dispatch(actions_1.searchGig(term));
        }
        else {
            dispatch(actions_1.fetchGigs());
        }
        // eslint-disable-next-line
    }, []);
    return (<section id="gigs" className="container">
      <h1>All Jobs</h1>
      <GigList_1.default gigs={gigs}/>
    </section>);
};
exports.default = Gigs;
