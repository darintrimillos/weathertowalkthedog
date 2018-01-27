import React, { Component } from 'react';
import './temp.scss';

class Temp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                {Math.round(this.props.value) + '°'}
            </span>
        );
    }
}

export default Temp;