import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import Design from './DesignProcess';
import hydrangea from '../images/hydrangeacard.jpg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Parallax } from 'react-scroll-parallax';


class Home extends Component {
 
  render () {

    const ParallaxImage = () => (
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          
      </Parallax>
  );
  return (
    <React.Fragment>
    <Header />
    <img className="frontimage" src={hydrangea} alt="hydrangea" />
      <Design />
      <Footer />
    </React.Fragment>
  );
}
}

export default Home;