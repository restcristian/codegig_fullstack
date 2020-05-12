import React, { SyntheticEvent, FunctionComponent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Search: FunctionComponent<Props> = ({ history }) => {
  const [term, setTerm] = useState<string>("");
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
    </section>
  );
};

export default Search;
