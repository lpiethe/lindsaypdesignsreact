import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import happybirthdaycard from '../images/happybirthdaycard.jpg'

class ImageSlider extends Component {
    render() {
        const images = [
            { 'src': {happybirthdaycard} },
           
        ];

        return (
            <div className="slider">
                <SimpleImageSlider
                    width={1000}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}

export default ImageSlider;