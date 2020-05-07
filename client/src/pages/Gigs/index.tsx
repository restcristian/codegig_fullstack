import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import GigList from "../../components/GigList";
import { AppStateType } from "../../store/types";
import { fetchGigs } from "../../store/actions";

const Gigs = () => {
  const {
    gigsReducer: { gigs },
  } = useSelector((state: AppStateType) => state, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGigs());
  }, []);

  return (
    <section id="gigs" className="container">
      <h1>All Jobs</h1>
      <GigList gigs={gigs} />
    </section>
  );
};

export default Gigs;
