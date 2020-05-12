import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/HomemadeApple-Regular.ttf';
import './fonts/Montserrat-ExtraLight.ttf';
import './App.css';
import Main from './components/MainComponent';
import { CARDPRODUCTS } from './shared/cardProducts';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardProducts: CARDPRODUCTS
    };
  }

  render() {
  return (
    <Router>
      <ParallaxProvider>
      <Main cardProducts={this.state.cardProducts} />
      </ParallaxProvider>
    </Router>
  );
}
}

export default App;
