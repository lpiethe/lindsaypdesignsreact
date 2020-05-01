import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/HomemadeApple-Regular.ttf';
import './fonts/Montserrat-ExtraLight.ttf';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
