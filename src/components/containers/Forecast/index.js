import React, { Component } from 'react';
import './forecast.scss';
import Timestamp from './../../presentational/Timestamp';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const days = this.props.daily.data.map((day) => 
            <div className="forecast-day" key={day.time}>
                <h3><Timestamp value={day.time} type="date-forecast" /></h3>
                <ul>
                    <li>Hi/Lo</li>
                    <li>Icon</li>
                    <li>{day.summary}</li>
                </ul>
            </div>
        );

        console.log('days', days);
        // DAY/DATE
        // HI/LOW
        // ICON?
        // SUMMARY
        return (
            <section className="forecast">
                <h2>Five-Day Forecast</h2>
                {days}
            </section>
        )
    }
}

export default Forecast;