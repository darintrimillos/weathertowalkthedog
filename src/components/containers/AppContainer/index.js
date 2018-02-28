import React, { Component } from 'react';
import './appContainer.scss';
import RightNow from './../RightNow';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            hasData: false,
            today: {},
            summary: "",
            currently: {},
            forecast: []
        }

        this.getLocation = this.getLocation.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    getLocation() {
        this.setState({
            loading: true
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        } else {
            alert('cannot get location');
            this.setState({
                loading: false
            });
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
                    today: data.daily.data[0],
                    loading: false,
                    hasData: true
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
                today: locationData.daily.data[0],
                hasData: true
            });
        }
    }

    render() {
        const loading = this.state.loading ? <div className="loader"></div> : null;
        const rightNow = this.state.hasData ? <RightNow currently={this.state.currently} day={this.state.today} /> : <p className="no-data">You have no weather data.</p>;
        
        return (
            <div className="app-container">
                <header>
                    <h1>Weather to Walk the Dog</h1>
                </header>

                <div className="get-weather">
                    <a onClick={this.getLocation} role="button" className="button">get weather!</a>   
                </div>
                
                {loading}

                {rightNow}

                <footer>
                    <p>Other weather apps may be more feature rich, but at least this one won't abuse your privacy. Powered by <a href="https://darksky.net">Dark Sky</a>.</p>
                </footer>
            </div>
        );
    }
}

export default AppContainer;