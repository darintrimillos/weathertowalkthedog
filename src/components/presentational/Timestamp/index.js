import React, { Component } from 'react';
import './timestamp.scss';

class Timestamp extends Component {
    // This is an ideal component for first tests 
    constructor(props) {
        super(props);

        this.getTime = this.getTime.bind(this);
        this.justDate = this.getDate.bind(this);
    }

    getTime() {
        const date = new Date(this.props.value *1000);
        const hours = date.getHours() > 11 ? date.getHours() - 11 : date.getHours() + 1;
        const minutes = date.getMinutes() == 0 ? date.getMinutes() + '0' : date.getMinutes();
        const interval = date.getHours() > 11 ? 'p.m.' : 'a.m.';
        
        return hours + ':' + minutes + ' ' + interval;
    }

    getDate() {
        const date = new Date(this.props.value * 1000);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return month + '/' + day + '/' + year;
    }

    render() {
        const timestamp = this.props.fullTimestamp ? this.getDate() + ' - ' + this.getTime() : this.getTime();
        return (
            <span className="timestamp">{timestamp}</span>
        );
    }
}

export default Timestamp;