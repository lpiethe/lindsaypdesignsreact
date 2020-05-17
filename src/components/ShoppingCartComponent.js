import React, { Component } from 'react';
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
                <CartProvider>
                    <Header />
                    <Cart />
                    <ProductList />
                    <Footer />
                </CartProvider>
            </React.Fragment>
        );
    }
}


export default ShoppingCart;