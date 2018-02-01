import React, { Component } from 'react';
import './timestamp.scss';

class Timestamp extends Component {
    // This is an ideal component for first tests 
    constructor(props) {
        super(props);

        this.justTime = this.justTime.bind(this);
    }

    justTime(time) {
        const date = new Date(time *1000);
        const hours = date.getHours() > 11 ? date.getHours() - 11 : date.getHours() + 1;
        const minutes = date.getMinutes() == 0 ? date.getMinutes() + '0' : date.getMinutes();
        const interval = date.getHours() > 11 ? 'p.m.' : 'a.m.';
        
        return hours + ':' + minutes + ' ' + interval;
    }

    render() {
        return (
            <span className="timestamp">
                {this.justTime(this.props.value)}
            </span>
        );
    }
}

export default Timestamp;