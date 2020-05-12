import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { FETCH_GIGS, AppStateType, GigActionType, ADD_GIG } from "./types";
import { GigType } from "../components/GigList/types";
import history from "../history";

export const fetchGigs = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  GigActionType
> => {
  return async (dispatch) => {
    const gigs: GigType[] = (await axios.get("/api/gigs")).data;
    dispatch({
      type: FETCH_GIGS,
      payload: gigs,
    });
  };
};

export const addGig = (
  gig: GigType
): ThunkAction<void, AppStateType, unknown, GigActionType> => {
  return async (dispatch) => {
    const savedGig: GigType = await (
      await axios.post("/api/gigs/add", { ...gig })
    ).data;

    history.push("/jobs");

    await dispatch({
      type: ADD_GIG,
      payload: savedGig,
    });
  };
};

export const searchGig = (
  term: string
): ThunkAction<void, AppStateType, unknown, GigActionType> => {
  return async (dispatch) => {
    const gigs: GigType[] = (await axios.post("/api/gigs/search", { term }))
      .data;
    dispatch({
      type: FETCH_GIGS,
      payload: gigs,
    });
  };
};
