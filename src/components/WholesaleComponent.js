import React, { Component } from 'react';
  import { FormGroup, Form, Label, Input, Button, Container, Row, Col, FormFeedback} from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../fonts/HomemadeApple-Regular.ttf';
  import '../fonts/Montserrat-ExtraLight.ttf';
  import '../App.css';
  import Header from './HeaderComponent';
  import Footer from './FooterComponent';

class Wholesale extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            contactName: '',
            email: '',
            phoneNumber: '',
            touched: {
                companyName: false,
                contactName: false,
                email: false,
                phoneNumber: false       
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(contactName, phoneNumber, email) {

        const errors = {
            contactName: '',
            phoneNumber: '',
            email: ''
        };

        if (this.state.touched.contactName) {
            if (contactName.length < 2) {
                errors.contactName = 'First name must be at least 2 characters.';
            } else if (contactName.length > 30) {
                errors.contactName = 'Name must be 30 or less characters.';
            }
        }


        const reg = /^\d+$/;
        if (this.state.touched.phoneNumber && !reg.test(phoneNumber)) {
            errors.phoneNumber = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Thank you for submitting your information: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
   
    
    handleButton = () => {
        alert('Thank you for submitting your information. Someone will reach out to you within 24 hours.');
      }     

    render() {
        const errors = this.validate(this.state.contactName, this.state.phoneNumber, this.state.email);    
        return (
            <div>
                <Header />
                <Container style={{ paddingTop: 40}}>
                    <Row>
                        <Col sm="6" style={{ margin: 'auto',marginBottom:30, backgroundColor: '#d3cfd6'}}>
                <Form onSubmit={this.handleSubmit} style={{padding:60}}  className='FadeItems'>
                    <FormGroup>
                        <Label for="companyName"> Company Name</Label>
                        <Input 
                        type="text" 
                        name="companyName" 
                        id="companyName" 
                        value={this.state.companyName} 
                
                        onBlur={this.handleBlur("companyName")}
                        onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.companyName}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactName"> Contact Name</Label>
                        <Input 
                        type="text" 
                        name="contactName" 
                        id="contactName" 
                        value={this.state.contactName} 
                        invalid={errors.contactName}
                        onBlur={this.handleBlur("contactName")}
                        onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.contactName}</FormFeedback>
                 
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"> Email</Label>
                        <Input    
                        type="text" 
                        name="email" 
                        id="email" 
                        value={this.state.email} 
                        invalid={errors.email}
                        onBlur={this.handleBlur("email")}
                        onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                 
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber"> Phone Number</Label>
                        <Input 
                              type="text" 
                              name="phoneNumber" 
                              id="phoneNumber" 
                              value={this.state.phoneNumber} 
                              invalid={errors.phoneNumber}
                              onBlur={this.handleBlur("phoneNumber")}
                              onChange={this.handleInputChange}/>
                              <FormFeedback>{errors.phoneNumber}</FormFeedback>
                     
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
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