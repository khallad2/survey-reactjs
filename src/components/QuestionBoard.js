import React, {Component} from 'react';
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBProgress, MDBRow} from "mdbreact";
import SingleQuestion from './SingleQuestion';
import JSON from '../data/questionnaire';
import '../styles/question-board.css';

class QuestionBoard extends Component {
    constructor(props) {
        super(props);
        this.state.questionsListModel = this.getQuestionsList();
    }

    state = {
        formActivePanel1: 0,
        formActivePanel1Changed: false,
        animationSwap: false,
        questionsListModel: [{
            question_type: "",
            identifier: "",
            headline: "",
            description: null,
            required: false,
            multiple: "",
            choices: [{
                    label: "",
                    value: "",
                    selected: false
                }],
            jumps: []
        }],
        answers: []
    };

    /**
     * Handle  <=previous and next=> controls
     **/
    handleNextPrevClick = (a) => (param) => (e) => {
        if (!(param < 0)) {
            this.setState({
                animationSwap: !this.state.animationSwap,
                ['formActivePanel' + a]: param,
                ['formActivePanel' + a + 'Changed']: true
            });
        }
    };

    /**
     * Mock of submission
     * TODO handle submission
     **/
    handleSubmission = () => {
        alert('Form submitted!');
    };

    /**
     * Get Data from json to be assigned to the state in [questionsListModel]
     **/
    getQuestionsList() {
        let questions = JSON.map(questionnaire => {
            return questionnaire['questionnaire']['questions']
        });
        return questions[0];
    }

    /**
     * Lifecycle Hock to render page
     **/
    render() {
        let next = 1;
        let classes = (this.state.animationSwap === true) ? 'animated 1 bounceInDown ease' : 'animated 1 fadeIn ease';
        // let {answers} = this.state.answers;
        return (
            <div className={classes}>
                <MDBContainer>
                    <form role="form" action="" method="post" className="needs-validation flex-center question-form table-fixed" noValidate={true}>
                        <MDBRow >
                            {this.state.questionsListModel.map((question, indexList) => {
                                return (
                                    <div key={indexList}>
                                        {this.state.formActivePanel1 === indexList && (
                                            <MDBCol >
                                                <div className="flex-center question">
                                                    <h1 className="font-weight-bold flex-center">{indexList + 1}- {question['headline']}</h1>
                                                </div>
                                                <hr id={'question-hr'}/>
                                                <div className={'card-body row flex-center'}>
                                                    <SingleQuestion  selectedQuestion={question} selectedIndex={indexList} allQuestCount={this.state.questionsListModel.length}/>
                                                </div>
                                                <MDBBtn rounded className="align-self-left btn btn-secondary" onClick={this.handleNextPrevClick(1)(indexList - 1)}><MDBIcon icon="angle-left" /></MDBBtn>
                                                <MDBBtn rounded className="align-self-center btn btn-secondary">{indexList + 1}/{this.state.questionsListModel.length}</MDBBtn>
                                                <MDBBtn rounded className="align-self-right btn btn-secondary" onClick={this.handleNextPrevClick(next)(next + indexList)}><MDBIcon icon="angle-right" /></MDBBtn>
                                            </MDBCol>
                                        )}
                                    </div>
                                )
                            })}
                            <div className="flex-center">

                                {this.state.formActivePanel1 === this.state.questionsListModel.length &&
                                (<MDBCol md="12">
                                    <i class="fa fa-10x fa-smile-beam" id={'thanks'}></i>
                                    <h2 className="text-center my-4" id={'thanks-msg'}>You Rock <i className="fas fa-bolt mdb-gallery-view-icon"></i></h2>
                                    <MDBBtn color="danger" rounded
                                            className="float-left  danger-color start-button"
                                            onClick={this.handleNextPrevClick(1)(this.state.questionsListModel.length - 1)}>previous</MDBBtn>
                                    <MDBBtn color="success" type={'submit'} rounded className="float-right start-button"
                                            onClick={this.handleSubmission}>submit</MDBBtn>
                                </MDBCol>)}
                            </div>
                        </MDBRow>
                    </form>
                    <hr/>
                </MDBContainer>
            </div>
        );
    };


}

export default QuestionBoard;

