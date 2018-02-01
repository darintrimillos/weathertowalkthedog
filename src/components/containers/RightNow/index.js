import React, { Component } from 'react';
import './rightNow.scss';
import Temp from './../../presentational/Temp';

class RightNow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="right-now">
                <div className="temp">
                    <Temp value={this.props.currently.temperature} /><sup>F</sup>
                    <span className="summary">{this.props.currently.summary}</span>
                </div>
                <ul className="no-dot">
                    <li className="feels-like">Feels like: <Temp value={this.props.currently.apparentTemperature} /></li>
                    <li>Wind info</li>
                    <li className="humidity">Humidity: {this.props.currently.humidity * 100}%</li>
                    <li>Hi/Lo</li>
                    <li>{this.props.day.sunriseTime}</li>
                </ul>
            </section>
        );
    }
}

export default RightNow;