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
import americanFlag from '../images/americanFlag.png';
import DogCard from '../images/DogCard.png';
import PikePlaceCard from '../images/PikePlaceCard.png';
import TulipcardShop from '../images/TulipcardShop.png';
import hydrangea from '../images/hydrangeacard.jpg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ShoppingCart from './ShoppingCartComponent';



class Shop extends Component {
   
    render() {
        return (
            <React.Fragment>
                <Header />
                <Row className="ProductRows">
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button
                                    onclick={<ShoppingCart/>}
                                    variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={DogCard} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button
                                    variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={PikePlaceCard} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button variant="light">Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={TulipcardShop} />
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
