import React, { Component } from 'react';
import './appContainer.scss';
import RightNow from './../RightNow';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: {},
            summary: "",
            currently: {},
            forecast: []
        }

        this.getLocation = this.getLocation.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        } else {
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
                    currently: data.currently,
                    today: data.daily.data[0]
                });
            })
            // need error handling here
    }

    componentDidMount() {
        const locationData = JSON.parse(localStorage.getItem('data'));

        if (locationData) {
            this.setState({
                summary: locationData.daily.summary,
                currently: locationData.currently,
                forecast: locationData.daily.data,
                today: locationData.daily.data[0]
            });
        }
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <h1>Weather to Walk the Dog</h1>
                </header>

                <a onClick={this.getLocation} role="button" className="get-weather">woof!</a>
                
                <RightNow currently={this.state.currently} day={this.state.today} />
            </div>
        );
    }
}

export default AppContainer;