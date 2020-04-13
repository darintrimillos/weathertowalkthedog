import React, { Component } from 'react';
import './forecast.scss';
import Timestamp from './../../presentational/Timestamp';
import Day from './../../presentational/Day';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const days = this.props.daily.data.slice(1).map((day) => 
            <Day day={day} key={day.time} />
        );

        return (
            <section className="forecast">
                <h2>THE NEXT 7 DAYS</h2>
                <div className="days-container">{ days }</div>
            </section>
        )
    }
}

export default Forecast;