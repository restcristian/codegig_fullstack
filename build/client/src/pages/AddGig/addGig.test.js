"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var test_utils_1 = require("../../helpers/test-utils");
var _1 = __importDefault(require("./"));
describe("AddGigPage", function () {
    afterEach(test_utils_1.cleanup);
    it("Renders without failing", function () {
        var getAllByTestId = test_utils_1.render(<_1.default />).getAllByTestId;
        expect(getAllByTestId("sectionAdd")).toBeDefined();
    });
    it("Shows errors when data is empty", function () {
        var getByTestId = test_utils_1.render(<_1.default />).getByTestId;
        var inputTitle = getByTestId("input-title");
        var inputTechnologies = getByTestId("input-technologies");
        var inputBudget = getByTestId("input-budget");
        var inputDescription = getByTestId("input-description");
        // const inputEmail = getByTestId("input-email");
        var btnSubmit = getByTestId("btn-submit");
        // Form is not submitted when all the fields empty
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("errors")).toBeDefined();
        expect(getByTestId("errors").querySelectorAll("div").length).toBe(5);
        //Form is not submitted when some of the fields are empty
        test_utils_1.fireEvent.change(inputTitle, { target: { value: "test" } });
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("errors")).toBeDefined();
        expect(getByTestId("errors").querySelectorAll("div").length).toBe(4);
        test_utils_1.fireEvent.change(inputTechnologies, { target: { value: "test" } });
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("errors")).toBeDefined();
        expect(getByTestId("errors").querySelectorAll("div").length).toBe(3);
        test_utils_1.fireEvent.change(inputBudget, { target: { value: "2222" } });
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("errors")).toBeDefined();
        expect(getByTestId("errors").querySelectorAll("div").length).toBe(2);
        test_utils_1.fireEvent.change(inputDescription, { target: { value: "test" } });
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("errors")).toBeDefined();
        expect(getByTestId("errors").querySelectorAll("div").length).toBe(1);
    });
    it("Submits the form when all the fields are filled", function () {
        var getByTestId = test_utils_1.render(<_1.default />).getByTestId;
        var inputTitle = getByTestId("input-title");
        var inputTechnologies = getByTestId("input-technologies");
        var inputBudget = getByTestId("input-budget");
        var inputDescription = getByTestId("input-description");
        var inputEmail = getByTestId("input-email");
        var btnSubmit = getByTestId("btn-submit");
        test_utils_1.fireEvent.change(inputTitle, { target: { value: "test" } });
        test_utils_1.fireEvent.change(inputTechnologies, { target: { value: "test" } });
        test_utils_1.fireEvent.change(inputBudget, { target: { value: "2323" } });
        test_utils_1.fireEvent.change(inputDescription, { target: { value: "test" } });
        test_utils_1.fireEvent.change(inputEmail, { target: { value: "test@test.com" } });
        test_utils_1.fireEvent.click(btnSubmit);
        expect(getByTestId("form-status")).toBeDefined();
    });
});
