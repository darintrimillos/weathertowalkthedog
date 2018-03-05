import React, { Component } from 'react';
import './timestamp.scss';

class Timestamp extends Component {
    // This is an ideal component for first tests 
    constructor(props) {
        super(props);

        this.state = {
            timestamp: ''
        };
    }

    componentDidMount() {
        // time, date, date-forecast
        const dayMap = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat'
        };
        const dateObj = new Date(this.props.value * 1000);
        const month = dateObj.getMonth() + 1;
        const date = dateObj.getDate();
        const year = dateObj.getFullYear();
        const day = dayMap[dateObj.getDay()];
        const hours = dateObj.getHours() > 11 ? dateObj.getHours() - 11 : dateObj.getHours() + 1;
        const minutes = dateObj.getMinutes() == 0 ? dateObj.getMinutes() + '0' : dateObj.getMinutes();
        const interval = dateObj.getHours() > 11 ? 'p.m.' : 'a.m.';

        if (this.props.type === 'date-forecast') {
            this.setState({
                timestamp: day.toUpperCase() + ' ' + month + '/' + date
            });
        } else if (this.props.type === 'date') {
            this.setState({
                timestamp: month + '/' + date + '/' + year
            });
        } else if (this.props.type === 'time') {
            // write better time code
            this.setState({
                timestamp: hours + ':' + minutes + ' ' + interval
            });
        }
    }

    render() {
        return (
            <span className="timestamp">{this.state.timestamp}</span>
        );
    }
}

export default Timestamp;