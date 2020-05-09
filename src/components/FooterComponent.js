import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/HomemadeApple-Regular.ttf';
import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h6><Link className="footerlink" to='/home'>Home</Link></h6>
                        </div>
                        <div className="col">
                            <h6><Link className="footerlink" to='/About'>About</Link></h6>
                        </div>
                        <div className="col">
                            <h6><Link className="footerlink" to='/Shop'>Shop</Link></h6>
                        </div>
                        <div className="col">
                            <h6><Link className="footerlink" to='/Wholesale'>Wholesale</Link></h6>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
