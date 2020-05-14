import { combineReducers } from "redux";
import gigsReducer from "./Gigs";
import accountReducer from "./Account";

export default combineReducers({
  gigsReducer,
  accountReducer,
});
