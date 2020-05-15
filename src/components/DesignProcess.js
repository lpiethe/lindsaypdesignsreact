import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignCard from './DesignProcessCardComponent';

//design process explanation on home page//

class Design extends Component {
    render () {
        return (
<React.Fragment>
    <div className="designProcess">
    <h3>THE DESIGN PROCESS</h3>
    <h5>Photographed images come to life after being thoughtfully edited and printed on natural linen fabric.</h5>
    </div>
    <DesignCard />
</React.Fragment>
        );
    }
}

export default Design;