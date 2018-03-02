import React, { Component } from 'react';
import './rightNow.scss';
import Temp from './../../presentational/Temp';
import Timestamp from './../../presentational/Timestamp';

class RightNow extends Component {
    constructor(props) {
        super(props);

        this.getWindspeed = this.getWindspeed.bind(this);
    }

    getWindspeed() {
        return this.props.currently.windSpeed === 'None' ? 
            0 : this.props.currently.windBearing + '° @ ' + this.props.currently.windSpeed + 'mph';
    }

    render() {
        return (
            <section className="right-now-section">
                <div className="right-now">
                    <div className="temp">
                        <Temp value={this.props.currently.temperature} /><sup>F</sup>
                        <span className="summary">{this.props.currently.summary}</span>
                    </div>
                    <ul className="no-dot">
                        <li className="feels-like">Feels like: <Temp value={this.props.currently.apparentTemperature} /></li>
                        <li>Wind: {this.getWindspeed()}</li>
                        <li className="humidity">Humidity: {this.props.currently.humidity * 100}%</li>
                        <li>High: <Temp value={this.props.day.temperatureHigh} /> Low: <Temp value={this.props.day.temperatureLow} /></li>
                        <li>Sunrise: <Timestamp value={this.props.day.sunriseTime} type="time" /></li>
                        <li>Sunset: <Timestamp value={this.props.day.sunsetTime} type="time" /></li>
                    </ul>
                </div>
                <p className="right-now-summary">{this.props.day.summary}</p>
                <p className="right-now-timestamp"><Timestamp value={this.props.currently.time} fullTimestamp={true}/></p>
            </section>

        );
    }
}

export default RightNow;