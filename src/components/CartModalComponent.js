import React, { Component } from 'react';
import { Products } from './Products';
import americanFlag from '../images/americanFlag.png';
import DogCard from '../images/DogCard.png';
import PikePlaceCard from '../images/PikePlaceCard.png';
import TulipcardShop from '../images/TulipcardShop.png';



const ProductList = () => {

    const CARDS = [
        { name: 'American Flag', price: 10.00, image: (americanFlag), id: 1 },
        { name: 'Golden Retriever', price: 10.00, image:(DogCard), id: 1 },
        { name: 'Pike Place Market', price: 10.00,image: (PikePlaceCard), id: 1 },
        { name: 'Tulip Bouquet', price: 10.00, image: (TulipcardShop), id: 1 },
    ]
    return (
        <div>
            {
                CARDS.map(item => (
                    <Products name={item.name} price={item.price} image={item.image} key={item.id} />
                ))
            }
        </div>
    )
}

export default ProductList;