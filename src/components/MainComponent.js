import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import About from './AboutComponent';
import Wholesale from './WholesaleComponent';
import Home from './HomeComponent';


class Main extends Component {

        render() {
           
            return (
                <div>
                    <Router>
                        <Switch>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Wholesale" component={Wholesale}/>
                    <Route exact path="/Home" /><Home/> 
                        </Switch>
                    </Router>
                </div>
            );
        }
    }

    export default Main;