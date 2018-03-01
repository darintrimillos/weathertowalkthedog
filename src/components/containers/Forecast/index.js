import React, { Component } from 'react';
import './forecast.scss';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const days = this.props.daily.data.map((day) => 

            <div className="forecast-day" key={day.time}>
                <h3>{day.time}</h3>
                <span>Hi/Lo</span>
                <span>Icon</span>
                <span>{day.summary}</span>
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