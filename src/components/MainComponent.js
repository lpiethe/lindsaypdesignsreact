import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import About from './AboutComponent';
import Wholesale from './WholesaleComponent';
import Home from './HomeComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ShoppingCart from './ShoppingCartComponent';

class Main extends Component {

        render() {
            return (
                <div>
                     <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                    <Router>
                        <Switch>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Wholesale" component={Wholesale}/>
                    <Route exact path="/Shop" component={ShoppingCart}/> 
                    <Route exact path="/Home" /><Home/> 
                        </Switch>
                    </Router>
                    </CSSTransition>
                    </TransitionGroup>
                </div>
            );
        }
    }

    export default Main;