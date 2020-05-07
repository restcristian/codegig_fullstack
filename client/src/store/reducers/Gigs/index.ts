import { AppStateType, GigActionType, FETCH_GIGS } from "../../types";

const init: AppStateType = {
  gigs: [],
};

export default (
  state: AppStateType = init,
  action: GigActionType
): AppStateType => {
  switch (action.type) {
    case FETCH_GIGS:
      return {
        ...state,
        gigs: [...action.payload],
      };
    default:
      return state;
  }
};
