import {
  AccountStatusStateType,
  AccountCreationStatusType,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "../../types";

const init: AccountStatusStateType = {
  status: "",
  isValid: false,
};

export default (
  state: AccountStatusStateType = init,
  action: AccountCreationStatusType
): AccountStatusStateType => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        status: action.payload,
        isValid: true,
      };
    case SIGN_UP_FAIL:
      return {
        status: action.payload,
        isValid: true,
      };
    default:
      return state;
  }
};
