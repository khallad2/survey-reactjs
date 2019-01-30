import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";
import JSON from '../data/questionnaire';
import logo from '../assets/logo.png'
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
            <div id={'header-content'} className={"row"}>
                <div id={'logo'} className={"col-4 animated 2 bounce slow"}>
                    <a id={'clark-logo'} className={''} href={'https://www.clark.de/de'}
                       target={'_blank'}> <img src={logo} alt={'CLΛRk Germany'}/></a>
                    <p id={'slogan'} className={'animated 2 bounceInLeft slow'}> Versicherungen so einfach wie noch nie</p>
                </div>
                <div id={'quest-name'} >
                {JSON.map((questionnaire, index) => {
                    return <h1 key={index}>{questionnaire['questionnaire'].name}</h1>
                })}
                </div>
                <div id={'about-us'} className={"animated 2 flash "}>
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
