import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import { Card, CardTitle, CardImg, CardBody, Button, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import americanFlag from '../images/americanFlag.png';
import DogCard from '../images/DogCard.png';
import PikePlaceCard from '../images/PikePlaceCard.png';
import TulipcardShop from '../images/TulipcardShop.png';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ShoppingCart from './ShoppingCartComponent';




class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment >
                <Header />
                <hr></hr>
                <Row className="ProductRows" style={{backgroundColor:'white'}}>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={americanFlag} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button
                                   onClick={this.toggleModal}
                                   variant="light"
                                   style={{fontFamily: 'Montserrat-Regular'}}
                                   >Add
                                </Button>
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
                                   onClick={this.toggleModal}
                                   variant="light"
                                   style={{fontFamily: 'Montserrat-Regular'}}
                                   >Add
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={PikePlaceCard} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button
                                   onClick={this.toggleModal}
                                   variant="light"
                                   style={{fontFamily: 'Montserrat-Regular'}}
                                   >Add
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src={TulipcardShop} />
                            <CardBody>
                                <CardTitle>American Flag</CardTitle>
                                <CardTitle>$10.00</CardTitle>
                                <Button
                                   onClick={this.toggleModal}
                                   variant="light"
                                   style={{fontFamily: 'Montserrat-Regular'}}> Add
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>            
                </Row>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalBody style={{ textAlign: 'center', padding: 20 }}>
                    You have added an item to your cart.
                                <br></br>
                    <NavLink to='/ShoppingCartComponent'>
                        <Button outline style={{ margin: 10 }}>Checkout</Button>
                    </NavLink>
                    <br></br>
                    <Button
                        outline
                        style={{ margin: 10 }}
                        onClick={this.toggleModal}>
                        Continue Shopping
                                </Button>
                                
                </ModalBody>
            </Modal>
                <Footer />
            </React.Fragment>
        );
    }
}



export default Shop;
