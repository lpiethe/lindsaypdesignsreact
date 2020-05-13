import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import tulip from '../images/tulipcard.png';
import Header from './HeaderComponent';
import Footer from './FooterComponent';




function About() {
  return (
  <div>
    <Header />
    <Container >
      <Row >
        <Col sm="6" style={{ paddingTop:50, textAlign: 'center'}} >
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Col>
        <Col sm="6">
        <img className="frontimage" style={{paddingTop: 20}} src={tulip} alt="tulip" />
        </Col>
        
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm="6">
       
        </Col>
      </Row>
    </Container>
    
    <Footer />
  </div>
  );
}

export default About;
