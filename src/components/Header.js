import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";
import JSON from '../data/questionnaire';
import "../styles/header.css";

class Header extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
            <div id={'header-content'} className={"row"}>
                <div className={"col-4 animated 2 bounce slow"}>
                    <a href={'https://www.clark.de/de'}
                       target={'_blank'}> <h2> CLΛRK </h2></a>
                    <p id={'slogan'} className={'animated 2 bounceInLeft slow'}> Versicherungen so einfach wie noch nie</p>
                </div>
                <div  >
                {JSON.map((questionnaire, index) => {
                    return <h1 key={index}>{questionnaire['questionnaire'].name}</h1>
                })}
                </div>
                <div id={'about-us'} className={"animated 2 flash delay-2s"}>
                    <a href={'https://www.clark.de/de'} target={'_blank'}>Über uns <i className="fab fa-angellist"></i></a>
                    <a href={'https://www.clark.de/de'}> (+06)915-322-933-9 <i className="fas fa-phone"></i></a>
                    <a href={'https://www.facebook.com/ClarkGermany/'}> <MDBIcon fab icon="facebook-f" /></a>
                </div>
                <hr id={'header-hr'} />
            </div>
            </div>
        );
    }
}

export default Header;
