import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../store";
import history from "../history";
import { render } from "@testing-library/react";

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
