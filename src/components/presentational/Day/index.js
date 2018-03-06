import React, { Component } from 'react';
import './day.scss';
import Timestamp from './../../presentational/Timestamp';
import Skycons from 'react-skycons';
// import Sk

class Day extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="forecast-day" key={this.props.day.time}>
                <div className="forecast-day-details">
                    <h3><Timestamp value={this.props.day.time} type="date-forecast" /></h3>
                    <span>High: {this.props.day.temperatureHigh}</span>
                    <span>Low: {this.props.day.temperatureLow}</span>
                    <span className="icon">
                        <Skycons color="black" icon={this.props.day.icon.split('-').join('_').toUpperCase()} autoplay={false} />
                    </span>
                </div>
                <div className="forecast-day-summary">{this.props.day.summary}</div>
            </div>
        )
    }
}

export default Day;