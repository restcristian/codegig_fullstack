import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import GigList from "../../components/GigList";
import { AppStateType } from "../../store/types";
import { fetchGigs, searchGig } from "../../store/actions";
import { useQuery, useAuth } from "../../helpers/hooks";

const Gigs = () => {
  const query = useQuery();
  //if user is auth
  useAuth();
  const {
    gigsReducer: { gigs },
  } = useSelector((state: AppStateType) => state, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.get("term")) {
      const term = query.get("term");
      dispatch(searchGig(term as string));
    } else {
      dispatch(fetchGigs());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section id="gigs" className="container">
      <h1>All Jobs</h1>
      <GigList gigs={gigs} />
    </section>
  );
};

export default Gigs;
