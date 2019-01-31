import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import QuestionBoard from "./components/QuestionBoard";
import JSON from './data/questionnaire';
import Header from "./components/Header";
import FooterPage from './components/Footer'
import './styles/App.css';
import "./index.css";

class App extends Component {
    /**
     * To be used as global state separately from internal Component.state.
     * To be used in Mounting & unMounting hocks to manage state unMount to free-up internal component.state
     * when component is in-active
     * @type {boolean}
     * @private
     */
    _isMounted = false;

    /**
     * Internal Component.state managed by component itself
     * @type {{displayQuestions: boolean}}
     */
    state = {
        displayQuestions: false
    };

    constructor(props) {
        super(props);
        this.state = {
            displayQuestions: false
        }
    }

    /**
     * Turn on displayQuestion mode to view questions
     */
    displayQuestion = () => {
        if (this._isMounted) {
            this.setState({
                displayQuestions: true
            });
        }
    };

    /**
     * Lifecycle hock manage component.state when active
     */
    componentDidMount() {
        this._isMounted = true;
    }

    /**
      * Lifecycle hock manage component.state when active
     */
    componentWillUnmount() {
        this._isMounted = false;
    }

  render() {
      if (!this.state.displayQuestions) {
          return (
              <div>
                  <MDBContainer fluid id={'full-length-header'}>
                      <MDBRow center style={{ height: "83vh" }}>
                          <Header />
                          <div className={'animated zoomIn slower delay-2s'}>
                              {JSON.map((questionnaire, index) => {
                                  return <h2 className={'desc'} key={index}>{questionnaire['questionnaire'].description}</h2>
                              })}
                          </div>
                          <MDBCol sm="8" className="text-center">
                              <button className="btn-floating purple-gradient start-button animated 2 heartBeat delay-4s slow"
                                      onClick={this.displayQuestion}>
                                  Ready to give feedback <i className="fas fa-bolt"></i>
                              </button>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
                  <FooterPage />
              </div>
          );
      }
      if (this.state.displayQuestions) {
          return (
              <div>
              <MDBContainer fluid id={'full-length-header'}>
              <MDBRow center style={{ height: "83vh" }}>
               <Header />
                  <MDBCol middle={true}  className="text-center sm=8">
                      <div className={'animated 3 bounceInDown'}>
                          <QuestionBoard/>
                      </div>
              </MDBCol>
          </MDBRow>
                  <FooterPage />
      </MDBContainer>
              </div>
          )}
    }
}

export default App;
