import React, { Component } from 'react';
import './walkReport.scss';
import Temp from './../../presentational/Temp';
import Timestamp from './../../presentational/Timestamp';

class WalkReport extends Component {
    constructor(props) {
        super(props);

        // this.getWindspeed = this.getWindspeed.bind(this);
    }

    // getWindspeed() {
    //     return this.props.currently.windSpeed === 'None' ? 
    //         0 : this.props.currently.windBearing + '° @ ' + this.props.currently.windSpeed + 'mph';
    // }

    render() {
        
        return (
            <section className="walk-report">
                <h2>Walk Report</h2>

            </section>
        )
    }
}

export default WalkReport;