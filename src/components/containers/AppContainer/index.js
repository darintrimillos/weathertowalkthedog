import React, { Component } from 'react';
import './appContainer.scss';
// import SearchContainer from './../SearchContainer';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: {},
            summary: "",
            currently: {},
            forecast: []
        }

        this.getLocation = this.getLocation.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    getLocation() {
        console.log('getLocatin called');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        } else {
            console.log('location call failed');
            alert('cannot get location');
        }
        return;
    }

    getWeather(location) {
        console.log('getWeather called');
        const req = new Request('/api/weather/' + location.coords.latitude + ',' + location.coords.longitude);

        return fetch(req)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('data', JSON.stringify(data));
                return this.setState({
                    summary: data.daily.summary,
                    forecast: data.daily.data,
                    currently: data.currently
                });
            })
            // need error handling here
    }

    componentDidMount() {
        const locationData = JSON.parse(localStorage.getItem('data'));

        if (locationData) {
            this.setState({
                summary: locationData.daily.summary
            });
        }
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <h1>Weather to Walk the Dog</h1>
                </header>

                <section className="search-container">
                    <button onClick={this.getLocation}>GET WEATHER</button>
                    <p>{ this.state.summary }</p>
                </section>
                {/* <SearchContainer /> */}
            </div>
        );
    }
}

export default AppContainer;