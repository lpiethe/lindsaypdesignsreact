import React from 'react';
import { Products } from './Products';
import americanFlag from '../images/americanFlag.png';
import DogCard from '../images/DogCard.png';
import PikePlaceCard from '../images/PikePlaceCard.png';
import TulipcardShop from '../images/TulipcardShop.png';
import { Row, Col, } from 'reactstrap';



const ProductList = () => {

    const CARDS = [
        { name: 'American Flag', price:5.99, image: (americanFlag), id: 1 },
        { name: 'Golden Retriever', price:5.99, image:(DogCard), id: 1 },
        { name: 'Pike Place Market', price:5.99,image: (PikePlaceCard), id: 1 },
        { name: 'Tulip Bouquet', price:5.99, image: (TulipcardShop), id: 1 },
    ]
    return (
        <Row>
            {
                CARDS.map(item => (
                    <Col>
                    <Products name={item.name} price={item.price} image={item.image} key={item.id} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ProductList;