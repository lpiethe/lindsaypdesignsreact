import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Products } from './Products';
import ProductList from './ProductListComponent';
import Cart from './CartComponent';
import { CartProvider } from './CartContextComponent';
import { CartContext } from './CartContextComponent';
import { Button, Modal, ModalBody, NavLink, Container, Row, Col, ModalHeader, Table } from 'reactstrap';




class ShoppingCart extends Component {
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
            <React.Fragment>
                <CartProvider>
                    <Header />
                    <ProductList />
                    <Cart />
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col >
                                <Button
                                    style={{marginBottom: 10}}
                                    onClick={this.toggleModal}
                                    outline >Checkout</Button>
                            </Col>
                        </Row>
                    </Container>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                        <ModalBody style={{ textAlign: 'center', padding: 20 }}>
                            <ModalHeader>Checkout</ModalHeader>
                               <Table>
                                   <thead>
                                       <tr>
                                           <th>Product</th>
                                           <th>Price</th>
                                           <th>Quantity</th>
                                           <th>Total</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                           <td></td>
                                           <td></td>
                                       </tr>
                                   </tbody>
                               </Table>
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
                </CartProvider>
            </React.Fragment>
        );
    }
}


export default ShoppingCart;