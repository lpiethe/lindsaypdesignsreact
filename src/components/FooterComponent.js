import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Shop'>Shop</Link></li>
                    <li><Link to='/Wholesale'>Wholesale</Link></li>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
