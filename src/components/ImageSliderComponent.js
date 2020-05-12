import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import hydrangea from '../images/hydrangeacard.jpg';

class ImageSlider extends Component {
    
    render() {
        const images = [
            {url:"images/hydrangeacard.jpg"},
            {url:"images/2.jpg"},
            {url:"images/3.jpg"},
        ]
        return (
            <div className="slider">
                <SimpleImageSlider
                    width={600}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}

export default ImageSlider;