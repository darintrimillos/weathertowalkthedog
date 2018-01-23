import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.name = "Darin";
    }

    render() {
        return (
            <h1>{ this.name }</h1>
        );
    }
}

export default App;