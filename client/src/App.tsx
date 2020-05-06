import React, { FunctionComponent } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </>
  );
};

export default App;
