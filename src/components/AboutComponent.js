import React from 'react';
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
          <p>Lindsay P Designs began in 2012. There is so much beauty in even the smallest details and Lindsay P Designs cards showccse that beauty. 
            Images are photographed and curated and sent on to the editing stage. They are then printed on beautiful linen, making it a card you will want to frame.
          </p>
        </Col>
        <Col sm="6">
        <img className="frontImage FadeItems" style={{paddingTop: 20, paddingBottom: 20}} src={tulip} alt="tulip" />
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