import React, { Component } from 'react';
import './searchContainer.scss';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.getLocation = this.getLocation.bind(this);
        this.showLocationData = this.showLocationData.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showLocationData);
        } else {
            alert('cannot get location');
        }
        return;
    }

    showLocationData(pos) {
        console.log(pos);
    }

    render() {
        return (
            <section className="search-container">
                <button onClick={this.getLocation}>Get Weather</button>
            </section>
        );
    }
}

export default SearchContainer;