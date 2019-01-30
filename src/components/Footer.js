import React from "react";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import '../styles/footer.css';

const FooterPage = () => {
    return (
        <MDBFooter color="" className="font-small pt-4 mt-4 clark-footer">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">CLΛRk Insurance</h5>
                        <h5 className={'animated 2 bounceInLeft slow'}>
                            Wir schaffen eine Welt, in der Menschen Versicherungen lieben
                        </h5>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <a href="https://www.clark.de/de"> &copy; {new Date().getFullYear()} Copyright: CLΛRk </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;