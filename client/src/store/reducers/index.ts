import { combineReducers } from "redux";
import gigsReducer from "./Gigs";
import accountReducer from "./Account";
import userReducer from "./User";

export default combineReducers({
  gigsReducer,
  accountReducer,
  userReducer,
});
