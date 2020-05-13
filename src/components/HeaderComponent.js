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
  Col,
} from 'reactstrap';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import ShoppingCart from './ShoppingCartComponent';



class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}
  render () {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <container fluid>
          <h1>L I N D S A Y  P  D E S I G N S</h1>
          <h3>cards & linen</h3>
        </container>
        <Col>
        <ShoppingCart/>
        </Col>
      </Jumbotron>
        <Navbar sticky="top" color="light" light expand="md">
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/About">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Shop">SHOP</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Wholesale">WHOLESALE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;