import React from 'react';

export default class Container extends React.Component {
  constructor(props: object) {
    super(props);
    
    this.getWeather = this.getWeather.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.handleLocationError = this.handleLocationError.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.getWeather, this.handleLocationError)
    }
  }

  getWeather(locationData: any) {
    console.log('getWeather');
    console.log('geolocationPosition', locationData.latitude);
  }

  handleLocationError(error: any) {
    console.log('error', error);
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.getLocation}>
          Get Weather
        </button>
        <h2>Right Now</h2>
        <p>Current weather data</p>
        <h2>Forecast</h2>
        <p>Forecast data</p>
      </div>
    );
  }
}