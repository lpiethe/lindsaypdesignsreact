import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Products } from './Products';
import ProductList from './CartModalComponent';
import Cart from './CartComponent';




class ShoppingCart extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Row>
                        <Col className='col-md m-1'>
                            <Cart/>
                            <ProductList/>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShoppingCart;