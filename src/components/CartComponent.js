import React, { useContext } from 'react';
import { CartContext } from './CartContextComponent';
import { ModalBody, Modal, NavLink, Button, Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <Container>
            <Row>
                <Col sm='12' className='Checkout'>
               <div>    
            Items in Cart:<br></br>{cart.length}
            <br />
            Total Price:<br></br>{totalPrice}
            </div>
            </Col>
            </Row> 
        </Container>
    );
}


export default Cart;