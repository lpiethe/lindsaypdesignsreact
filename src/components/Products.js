import React, {useContext} from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Row, Col, Modal, ModalHeader, ModalBody, Container, CardDeck } from 'reactstrap';
import {CartContext} from './CartContextComponent';


export const Products = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const productOne = {name: props.name, price: props.price};
        setCart(curr => [...curr, productOne]);
    }
    return(
            <Card style={{ width: '20rem', fontFamily:'Montserrat-Regular'}}>
                <CardImg variant="top" src={props.image} width="150" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardTitle>{props.price}</CardTitle>
                    <Button  
                       onClick={addToCart}  
                       variant="light"
                       style={{fontFamily: 'Montserrat-Regular'}}
                       >Add
                    </Button>
                </CardBody>
            </Card>
    )
}