import { GigActionType, FETCH_GIGS, GigsStateType } from "../../types";

const init: GigsStateType = {
  gigs: [],
};

export default (
  state: GigsStateType = init,
  action: GigActionType
): GigsStateType => {
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
