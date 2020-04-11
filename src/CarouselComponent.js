import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const imgUrls = ["public/images/happybirthdaycard.jpg", "public/images/hydrangeacard.jpg", "public/images/tulipcard.jpg" ];

class Carousel extends Component {
    constructor (props) {
        super (props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render () {
        return (
            <div className="carousel">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                     />

                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                     />
            </div>
        );
    }
}

const ImageSlide = ({ url }) => {
    const styles ={
        backgroundImages: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}

const Arrow = ({ direction, clickFunction }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }
        >
    </div>
);

export default Carousel;