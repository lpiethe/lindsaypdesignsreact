import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/HomemadeApple-Regular.ttf';
import './fonts/Montserrat-ExtraLight.ttf';
import './App.css';
import ImageSlider from './components/ImageSliderComponent';
import Design from './components/DesignProcess'
import HomeCarousel from './components/HomeCarouselComponent';
import hydrangea from './images/hydrangeacard.jpg';


function App() {
  return (
    <React.Fragment>
    <Jumbotron fluid>
      <container fluid>
      <h1>L I N D S A Y  P  D E S I G N S</h1>
      <h3>cards & linen</h3>
      </container>
    </Jumbotron>
    <Navbar color="light" light expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">ABOUT</NavLink>
            </NavItem>
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SHOP
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">WHOLESALE</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
     <img className="frontimage" src={hydrangea} alt="hydrangea" />
      
      <Design />
      
    </React.Fragment>
  );
}

export default App;
