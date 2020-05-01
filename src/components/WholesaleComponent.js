import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
  import {
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../fonts/HomemadeApple-Regular.ttf';
  import '../fonts/Montserrat-ExtraLight.ttf';
  import '../App.css';
  import Header from './HeaderComponent';
  import Footer from './FooterComponent';

class Wholesale extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Wholesale Form</h1>
                <Footer />
            </div>
        );
    }
}

export default Wholesale;