import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignCard from './DesignProcessCardComponent';


class Design extends Component {
    render () {
        return (
<React.Fragment>
    <div className="designProcess">
    <h2>The Design Process</h2>
    <h4>Photographed images come to life after being thoughtfully edited and printed on natural linen fabric.</h4>
    </div>
    <DesignCard />
</React.Fragment>
        );
    }
}

export default Design;