import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/HomemadeApple-Regular.ttf';
import './fonts/Montserrat-ExtraLight.ttf';
import'./fonts/Montserrat-Regular.ttf';
import './App.css';
import Main from './components/MainComponent';

import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {

 

  render() {
  return (
    <Router>
      <ParallaxProvider>
      <Main />
      </ParallaxProvider>
    </Router>
  );
}
}

export default App;
