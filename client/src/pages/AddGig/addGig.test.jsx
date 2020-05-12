import React from "react";
import { render, fireEvent, cleanup } from "../../helpers/test-utils";
import AddGigPage from "./";

describe("AddGigPage", () => {
  afterEach(cleanup);
  it("Renders without failing", () => {
    const { getAllByTestId } = render(<AddGigPage />);
    expect(getAllByTestId("sectionAdd")).toBeDefined();
  });
  it("Shows errors when data is empty", () => {
    const { getByTestId } = render(<AddGigPage />);
    const inputTitle = getByTestId("input-title");
    const inputTechnologies = getByTestId("input-technologies");
    const inputBudget = getByTestId("input-budget");
    const inputDescription = getByTestId("input-description");
    // const inputEmail = getByTestId("input-email");
    const btnSubmit = getByTestId("btn-submit");

    // Form is not submitted when all the fields empty
    fireEvent.click(btnSubmit);
    expect(getByTestId("errors")).toBeDefined();
    expect(getByTestId("errors").querySelectorAll("div").length).toBe(5);

    //Form is not submitted when some of the fields are empty

    fireEvent.change(inputTitle, { target: { value: "test" } });
    fireEvent.click(btnSubmit);
    expect(getByTestId("errors")).toBeDefined();
    expect(getByTestId("errors").querySelectorAll("div").length).toBe(4);

    fireEvent.change(inputTechnologies, { target: { value: "test" } });
    fireEvent.click(btnSubmit);
    expect(getByTestId("errors")).toBeDefined();
    expect(getByTestId("errors").querySelectorAll("div").length).toBe(3);

    fireEvent.change(inputBudget, { target: { value: "2222" } });
    fireEvent.click(btnSubmit);
    expect(getByTestId("errors")).toBeDefined();
    expect(getByTestId("errors").querySelectorAll("div").length).toBe(2);

    fireEvent.change(inputDescription, { target: { value: "test" } });
    fireEvent.click(btnSubmit);
    expect(getByTestId("errors")).toBeDefined();
    expect(getByTestId("errors").querySelectorAll("div").length).toBe(1);
  });
  it("Submits the form when all the fields are filled", () => {
    const { getByTestId } = render(<AddGigPage />);
    const inputTitle = getByTestId("input-title");
    const inputTechnologies = getByTestId("input-technologies");
    const inputBudget = getByTestId("input-budget");
    const inputDescription = getByTestId("input-description");
    const inputEmail = getByTestId("input-email");

    const btnSubmit = getByTestId("btn-submit");

    fireEvent.change(inputTitle, { target: { value: "test" } });
    fireEvent.change(inputTechnologies, { target: { value: "test" } });
    fireEvent.change(inputBudget, { target: { value: "2323" } });
    fireEvent.change(inputDescription, { target: { value: "test" } });
    fireEvent.change(inputEmail, { target: { value: "test@test.com" } });

    fireEvent.click(btnSubmit);

    expect(getByTestId("form-status")).toBeDefined();
  });
});
