import React, { SyntheticEvent, FunctionComponent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { AppStateType } from "../../store/types";
import { isEmpty } from "../../helpers";

interface Props extends RouteComponentProps {}

const Search: FunctionComponent<Props> = ({ history }) => {
  const [term, setTerm] = useState<string>("");
  const {
    userReducer: { token },
  } = useSelector((state: AppStateType) => state, shallowEqual);
  const onSubmit = (e: SyntheticEvent) => {
    history.push(`/jobs?term=${term}`);
  };
  return (
    <section id="search" className="search-wrap">
      <h1>Find A Coding Job</h1>
      <form onSubmit={onSubmit} className="search-form">
        <i className="fas fa-search"></i>
        <input
          type="search"
          name="term"
          placeholder="Javascript, PHP, Rails, Flutter, etc..."
          onChange={(e) => setTerm(e.currentTarget.value)}
          value={term}
        />
        <input type="submit" value="Search" />
      </form>
      {isEmpty(token) && (
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "24px",
              background: "red",
              fontWeight: "bold",
              color: "#fff",
              marginTop: "12px",
            }}
          >
            User Should be authenticated
          </span>
        </div>
      )}
    </section>
  );
};

export default Search;
