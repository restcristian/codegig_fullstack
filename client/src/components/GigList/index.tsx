import React, { FunctionComponent } from "react";
import GigListItem from "../GigListItem/index";
import { GigType } from "../../components/GigList/types";

interface Props {
  gigs: GigType[];
}

const GigList: FunctionComponent<Props> = ({ gigs }) => {
  const renderContent = () => {
    return gigs.map((gig: GigType, idx: number) => (
      <GigListItem key={idx} gig={gig} />
    ));
  };
  return <>{renderContent()}</>;
};

export default GigList;
