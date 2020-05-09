import { GigActionType, FETCH_GIGS, GigsStateType, ADD_GIG } from "../../types";

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
    case ADD_GIG:
      return {
        ...state,
        gigs: [...state.gigs, action.payload],
      };
    default:
      return state;
  }
};
