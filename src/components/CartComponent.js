import React, { useContext } from 'react';
import { CartContext } from './CartContextComponent';
import { ModalBody, Modal, NavLink, Button, Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <Container className='Checkout'>
            <Row className='Checkout'>
                <Col className='Checkout' style={{marginTop: 30, border:'black'}}>
                
            <h4>Items in Cart:<br></br>{cart.length}</h4>
            <br />
            <h4>Total Price:<br></br>{totalPrice}</h4>
           <Button outline>Checkout</Button>
            </Col>
            </Row> 
        </Container>
    );
}


export default Cart;