import React from 'react';

export default class Container extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Weather to Walk the Dog!</h1>
        </div>
      </div>
    );
  }
}