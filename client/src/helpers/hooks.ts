import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { AppStateType } from "../store/types";
import { isEmpty } from ".";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useAuth = () => {
  const {
    userReducer: { token },
  } = useSelector((state: AppStateType) => state, shallowEqual);
  const history = useHistory();

  useEffect(() => {
    if (isEmpty(token)) {
      history.push("/");
    }
  }, []);
};
