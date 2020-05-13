import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
                 <Button outline onClick={this.toggleModal}><i className="fa fa-shopping-cart">  CART</i></Button>
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Shopping Cart</ModalHeader>
                    </Modal>
            </React.Fragment>
        );
    }
}

export default ShoppingCart;