import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

/**
 * Instance from App to be tested
 * @type {App}
 */
const component = new App();

/**
 * Check App render method
 */
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
});

/**
 * Check displayQuestion behavior
 */
it("Check displayQuestion prop status", () => {

    expect(component.state.displayQuestions).toBe(false);
    expect(!component.state.displayQuestions).toBe(true);
});

/**
 * Check rebnder method when startQuestions
 */
it("Check render method", () => {
    component.displayQuestion();
    expect(component.render()).toBeTruthy()
});