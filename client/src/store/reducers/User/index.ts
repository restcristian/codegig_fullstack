import {
  UserStateType,
  UserActionType,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../../types";

const init: UserStateType = {
  username: "",
  token: "",
  errorMessage: "",
};

export default (state: UserStateType = init, action: UserActionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
