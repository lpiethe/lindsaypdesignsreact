import React, { useContext } from 'react';
import { CartContext } from './CartContextComponent';
import { Container, Row, Col } from 'reactstrap';



const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <Container className='Checkout'>
            <Row className='Checkout'>
                <Col className='Checkout' style={{marginTop: 30}}>
                
            <h5>Items in Cart: {cart.length}</h5>
           
            <h5>Total Price: {totalPrice}</h5>
                </Col>
            </Row> 
        </Container>
    );
}



export default Cart;