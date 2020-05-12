import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import {
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




function About() {
  return (
  <div>
    <Header />
    
    <Footer />
  </div>
  );
}

export default About;
