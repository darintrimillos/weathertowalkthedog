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
                <h2>Right Now</h2>
                <ul className="no-dot">
                    <li className="temp"><Temp value={this.props.currently.temperature} /><sup>F</sup></li>
                    <li className="summary">{this.props.currently.summary}</li>
                    <li className="feels-like">Feels like: <Temp value={this.props.currently.apparentTemperature} /></li>
                    <li className="humidity">Humidity: {this.props.currently.humidity * 100}%</li>
                </ul>
            </section>
        );
    }
}

export default RightNow;