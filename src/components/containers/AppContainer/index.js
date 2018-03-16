import React, { Component } from 'react';
import './appContainer.scss';
import RightNow from './../RightNow';
import WalkReport from './../WalkReport';
import Forecast from './../Forecast';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            hasData: false,
            data: {}
        }

        this.getLocation = this.getLocation.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    getLocation() {
        console.log('getLocation');
        this.setState({
            loading: true
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        } else {
            alert('Cannot get location.');
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
                    data: data,
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
                data: locationData,
                hasData: true
            });
        }
    }

    render() {
        const loading = this.state.loading ? <div className="loader"></div> : null;
        const hasData = this.state.hasData;
        
        return (
            <div className="app-container">
                <header>
                    <h1>Weather to Walk the Dog</h1>
                </header>

                <button onClick={this.getLocation} className="button"><span>get weather!</span></button>
                
                {loading}
                
                { !hasData ? (
                    <p className="no-data">You have no weather data.</p>
                ) : (
                    <div className="weather-container">
                        <RightNow currently={this.state.data.currently} day={this.state.data.daily.data[0]} />
                        {/* <WalkReport minutely={this.state.data.minutely} /> */}
                        <Forecast daily={this.state.data.daily} />
                    </div>
                )}

                <footer>
                    <p>Other weather apps may be more feature rich, but at least this one won't abuse your privacy. Powered by <a href="https://darksky.net">Dark Sky</a>.</p>
                </footer>
            </div>
        );
    }
}

export default AppContainer;