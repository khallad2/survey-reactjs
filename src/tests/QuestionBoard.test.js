import React from "react";
import QuestionBoard from "../components/QuestionBoard";

/**
 *  Instance fromQuestionBoard to be tested
 * @type {QuestionBoard}
 */
const component = new QuestionBoard();

/**
 * Check render method
 */
it("renders without crashing", () => {
    expect(component.render()).toBeTruthy()
});

/**
 * Check getQuestions function
 */
it("QuestionList function to be defined", () => {
    expect(component.getQuestionsList()).toBeTruthy();
});

/**
 * QuestionList function set the questionList Object in component's state
 * Check getQuestions function result
 */
it("QuestionList function set the questionList Object in state", () => {
    const list = component.getQuestionsList();
    expect(list).toEqual(component.state.questionsListModel);
});