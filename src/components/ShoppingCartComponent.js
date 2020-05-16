import React, { Component } from 'react';
import { Button, Modal, NavLink, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Products } from './Products';
import ProductList from './CartModalComponent';
import Cart from './CartComponent';
import { CartProvider } from './CartContextComponent';
import { CartContext } from './CartContextComponent';




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
                <Header />
                <div>
                    <CartProvider>
                        
                        <ProductList />
                      
                        <Cart />
                   
                        
                    </CartProvider>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}


export default ShoppingCart;