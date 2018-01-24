import React, { Component } from 'react';
import './appContainer.scss';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.name = "Darin";
    }

    render() {
        return (
            <header>
                <h1>Weather to Walk the Dog</h1>
                <p>Under construction</p>
            </header>
        );
    }
}

export default AppContainer;