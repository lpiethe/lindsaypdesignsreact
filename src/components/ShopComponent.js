import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import {
    Card, CardTitle, CardImg, CardBody, Button, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import americanFlag from '../images/americanFlag.jpeg';
import hydrangea from '../images/hydrangeacard.jpg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <img className="frontimage" src={hydrangea} alt="hydrangea" />
                <Row className="ProductRows">
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="ProductRows">
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </React.Fragment>

        );
    }
}

export default Shop;
