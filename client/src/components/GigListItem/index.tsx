import React, { FunctionComponent } from "react";
import { GigType } from "../GigList/types";

interface Props {
  gig: GigType;
}
const GigListItem: FunctionComponent<Props> = ({ gig }) => {
  const { title, description, budget, technologies } = gig;
  return (
    <div className="gig">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li>Budget: {budget}</li>
        <li>
          <button className="btn btn-reverse">Apply Now</button>
        </li>
      </ul>
      <div className="tech">
        <small>
          Technologies Needed: <span>{technologies}</span>
        </small>
      </div>
    </div>
  );
};

export default GigListItem;
