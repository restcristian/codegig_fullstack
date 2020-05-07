export const FETCH_GIGS = "FETCH_GIGS";
export const ADD_GIG = "ADD_GIG";

export interface GigType {
  title: string;
  description: string;
  budget: string;
  technologies: string;
}
export interface CurrentGigStateType {
  gig: GigType;
}
export interface AppStateType {
  gigs: GigType[];
}

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
