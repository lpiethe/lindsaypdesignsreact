import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <Container style={{ textAlign: 'center' }}>
                    <Row>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.facebook.com'><i className='fa fa-facebook'></i></Link></h5>
                        </Col>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.instagram.com'><i className='fa fa-instagram'></i></Link></h5>
                        </Col>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.twitter.com'><i className='fa fa-twitter'></i></Link></h5>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col style={{ textAlign: 'center', paddingTop: 10, color: 'white' }}>
                                <h6>Our Address</h6>
                                <address>
                                    12345 67th Street<br />
                                    Seattle, WA 98001<br />
                                    U.S.A.
                                </address>
                                <div className="col" >
                                    <a role="button" style={{ color: 'white' }} className="btn" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                                    <a role="button" style={{ color: 'white' }} className="btn" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> email@lindsaypdesigns.com</a>
                                </div>

                            </Col>
                        </Row>
                    </Container>

                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
