import React, {Component} from 'react';
import {MDBInput} from "mdbreact";
import '../styles/question-board.css';

class SingleQuestion extends Component {

    state = {
        formActivePanel1: 0,
        formActivePanel1Changed: false,
        animationSwap: false,
        selectedIndex: 0,
        selectedQuestion: {},
        allQuestCount: 0
    };

    constructor(props) {
        super(props);
        this.state.selectedQuestion = this.props.selectedQuestion;
        this.state.selectedIndex = this.props.selectedIndex;
        this.state.formActivePanel1 = this.props.formActivePanel1;
        this.state.allQuestCount = this.props.allQuestCount;
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleRadioChangeAndCheckboxChange = this.handleRadioChangeAndCheckboxChange.bind(this);
    }

    /**
     * Calculate value of ActivePanel for AutoFocus
     **/
    calculateAutofocus = (a) => {
        if (this.state['formActivePanel' + a + 'Changed']) {
            return true;
        }
    };

    /**
     * Handles data change in Radio Buttons
     * @param event
     */
    handleRadioChangeAndCheckboxChange = (choiceIndex) => (event)=> {
        let data = this.state.selectedQuestion;
        data.choices[choiceIndex].selected = event.target.checked;
        this.setState({
            selectedQuestion: data
        });
    };

    /**
     * Handles data change in Text input
     * @param event
     */
    handleTextInputChange =  (event) => {
        let data = this.state.selectedQuestion;
        data.description = event.target.value;
        this.setState({
            selectedQuestion: data
        });
    };

    /**
     * Lifecycle Hock to render page
     **/
    render() {
        return (
            <div>
                {this.state.selectedQuestion['question_type'] === 'multiple-choice' && this.state.selectedQuestion['multiple'] === 'false' && (
                    <div>
                        {this.state.selectedQuestion['choices'].length > 0 && (
                            <div className={'choices'}>
                                {this.state.selectedQuestion['choices'].map((choice, indexChoice) => {
                                    return (
                                        <div className=" form-check-inline"
                                             key={indexChoice}>
                                            <div id={'MDBInput-button-label'}>
                                                <ul>
                                                    <div
                                                        className="align-self-center">
                                                        <strong>
                                                            <div>
                                                                    <MDBInput
                                                                    label={choice.label}
                                                                    type={'radio'}
                                                                    className="row"
                                                                    name={'choice'}
                                                                    value={choice.value}
                                                                    required={this.state.selectedQuestion.required}
                                                                    defaultChecked={choice.selected}
                                                                    // defaultChecked={this.state.answers[this.state.selectedIndex].selected}
                                                                    onChange={this.handleRadioChangeAndCheckboxChange(indexChoice)}
                                                                    autoFocus={this.calculateAutofocus(indexChoice)}/>
                                                                <div className="invalid-feedback">
                                                                    required field <i className="far fa-frown"></i>
                                                                </div>
                                                            </div>

                                                        </strong>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>)}
                    </div>)}

                {this.state.selectedQuestion['question_type'] === 'multiple-choice' && this.state.selectedQuestion['multiple'] === 'true' && (
                    <div className={'flex-center'}>
                        {this.state.selectedQuestion['choices'].length > 0 && (
                            <div className="row">
                                {this.state.selectedQuestion['choices'].map((choice, indexChoice) => {
                                    return (
                                        <div id={'MDBInput-button-label'}
                                             className="form-check form-check-inline"
                                             key={indexChoice}>
                                            <ul>
                                                <div className="align-self-center">
                                                    <strong><MDBInput
                                                        label={choice.label}
                                                        type="checkbox"
                                                        value={choice.value}
                                                        defaultChecked={choice.selected}
                                                        className="row"
                                                        required={this.state.selectedQuestion.required}
                                                        onChange={this.handleRadioChangeAndCheckboxChange(indexChoice)}
                                                        autoFocus={this.calculateAutofocus(indexChoice)}/></strong>
                                                    <div className="invalid-feedback">
                                                        required field <i className="far fa-frown"></i>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    )
                                })}

                            </div>)}
                    </div>)}

                {this.state.selectedQuestion['question_type'] === 'text' && (this.state.selectedQuestion['multiline'] === 'false' || this.state.selectedQuestion['multiline'] === undefined) && (
                    <div id={'MDBInput-text-label'}
                         className="form-check form-check-inline" key={this.state.selectedIndex}>
                        <ul>
                            <strong><MDBInput id="text-input"
                                              label="Write what's in your mind"
                                              className="row align-self-center"
                                              value={this.state.selectedQuestion.description}
                                              onChange={this.handleTextInputChange}
                                              required={this.state.selectedQuestion.required}
                                              autoFocus={this.calculateAutofocus(this.state.selectedIndex)}/></strong>
                            <div className="invalid-feedback">
                                required
                            </div>
                        </ul>
                    </div>

                )}
                {(this.state.selectedQuestion.question_type === 'text' && this.state.selectedQuestion.multiline === 'true') && (
                    <div>
                      <textarea className="form-control rounded-0" onChange={this.handleTextInputChange} value={this.state.selectedQuestion.description}
                                required={this.state.selectedQuestion.required}
                                id="exampleFormControlTextarea2" rows="3" autoFocus={this.calculateAutofocus(this.state.selectedIndex)}>
                                                        </textarea>
                        <div className="invalid-feedback">
                            required field <i className="far fa-frown"></i>
                        </div>
                    </div>)}
            </div>
        );
    };


}

export default SingleQuestion;

