import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

export const Products = (props) => {
    const addToCart = () => {
        
    }
    return(
        <Row className="ProductRows" style={{backgroundColor:'white', justifyContent: 'center'}}>
        <Col sm="3">
            
            <Card style={{ width: '18rem', fontFamily:'Montserrat-Regular'}}>
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
        </Col>
    </Row>
    )
}