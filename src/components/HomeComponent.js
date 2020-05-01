import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import Design from './DesignProcess';
import hydrangea from '../images/hydrangeacard.jpg';
import About from './AboutComponent';
import Wholesale from './WholesaleComponent';
import Header from './HeaderComponent';


class Home extends Component {
 
  render () {
  return (
    <React.Fragment>
    <Header />
      <img className="frontimage" src={hydrangea} alt="hydrangea" />

      <Design />

    </React.Fragment>
  );
}
}

export default Home;