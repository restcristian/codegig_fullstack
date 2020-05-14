import reducers from "./reducers";

export const FETCH_GIGS = "FETCH_GIGS";
export const ADD_GIG = "ADD_GIG";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export interface GigType {
  title: string;
  description: string;
  budget: string;
  technologies: string;
  email: string;
}

export interface AccountStatusStateType {
  status: string;
  isValid: boolean;
}
export interface CurrentGigStateType {
  gig: GigType;
}
export interface GigsStateType {
  gigs: GigType[];
}

export type AppStateType = ReturnType<typeof reducers>;

// ActionTypes

export type GigActionType =
  | {
      type: typeof FETCH_GIGS;
      payload: GigType[];
    }
  | {
      type: typeof ADD_GIG;
      payload: GigType;
    };

export type AccountCreationStatusType =
  | {
      type: typeof SIGN_UP_SUCCESS;
      payload: string;
    }
  | {
      type: typeof SIGN_UP_FAIL;
      payload: string;
    };
