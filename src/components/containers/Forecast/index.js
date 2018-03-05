import React, { Component } from 'react';
import './forecast.scss';
import Timestamp from './../../presentational/Timestamp';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const days = this.props.daily.data.slice(1).map((day) => 
            <div className="forecast-day" key={day.time}>
                <h3><Timestamp value={day.time} type="date-forecast" /></h3>
                <span>High: {day.temperatureHigh}</span>
                <span>Low: {day.temperatureLow}</span>
                <span>Icon</span>
                <span>{day.summary}</span>
            </div>
        );

        return (
            <section className="forecast">
                <h2>THE NEXT 7 DAYS</h2>
                {days}
            </section>
        )
    }
}

export default Forecast;