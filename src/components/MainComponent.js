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
import Shop from './ShopComponent';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';


class Main extends Component {
  

        render() {
            const directory = this.props.cardProducts.map(cardProducts => {
                return (
                    <div key={cardProducts.id} className="col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={cardProducts.image} alt={cardProducts.name} />
                            <CardImgOverlay>
                                <CardTitle>{cardProducts.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });
            return (
                <div>
                    <Router>
                        <Switch>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Wholesale" component={Wholesale}/>
                    <Route exact path="/Shop" component={Shop}/> 
                    <Route exact path="/Home" /><Home/> 
                        </Switch>
                    </Router>
                </div>
            );
        }
    }

    export default Main;