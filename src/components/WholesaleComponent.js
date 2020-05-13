import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
  import { FormGroup, Form, Label, Input, Button, Container, Row, Col} from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../fonts/HomemadeApple-Regular.ttf';
  import '../fonts/Montserrat-ExtraLight.ttf';
  import '../App.css';
  import Header from './HeaderComponent';
  import Footer from './FooterComponent';

class Wholesale extends Component {

    handleButton = () => {
        alert('Thank you for submitting your information. Someone will reach out to you within 24 hours.');
      }     

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col sm="6" style={{margin: 'auto', backgroundColor: '#d3cfd6'}}>
                <Form style={{padding:40, border: 'blue'}}>
                    <FormGroup>
                        <Label for="companyName"> Company Name</Label>
                        <Input type="companyName" name="companyName" id="companyName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactName"> Contact Name</Label>
                        <Input type="contactName" name="contactName" id="contactName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"> Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber"> Phone Number</Label>
                        <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
                    </FormGroup>
                    <Button onClick={this.handleButton}>Submit</Button>
                </Form>
                </Col>
                </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Wholesale;