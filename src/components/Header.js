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
                    <a href={'https://khallad2.github.io/khallad.github.io/'}
                       target={'_blank'}> <h2> Survey </h2></a>
                    <p id={'slogan'} className={'animated 2 bounceInLeft slow'}> Better Development</p>
                </div>
                <div  >
                {JSON.map((questionnaire, index) => {
                    return <h1 key={index}>{questionnaire['questionnaire'].name}</h1>
                })}
                </div>
                <div id={'about-us'} className={"animated 2 flash delay-2s"}>
                    <a href={'https://khallad2.github.io/khallad.github.io/'} target={'_blank'}>About me<i className="fab fa-angellist"></i></a>
                    <a href={'https://khallad2.github.io/khallad.github.io/'}> (+20)11-526-000-10 <i className="fas fa-phone"></i></a>
                    <a href={'https://khallad2.github.io/khallad.github.io/'}> <MDBIcon fab icon="facebook-f" /></a>
                </div>
                <hr id={'header-hr'} />
            </div>
            </div>
        );
    }
}

export default Header;
