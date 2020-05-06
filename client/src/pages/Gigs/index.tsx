import React from "react";
import GigList from "../../components/GigList";
import { GigType } from "../../components/GigList/types";

const Gigs = () => {
  const gigs: GigType[] = [
    {
      title: "hello",
      description: "hello world",
      budget: "2323",
      technologies: "123",
    },
  ];
  return (
    <section id="gigs" className="container">
      <h1>All Jobs</h1>
      <GigList gigs={gigs} />
    </section>
  );
};

export default Gigs;
