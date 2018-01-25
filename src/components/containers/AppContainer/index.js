import React, { Component } from 'react';
import './appContainer.scss';
import SearchContainer from './../SearchContainer';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.name = "Darin";
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <h1>Weather to Walk the Dog</h1>
                </header>

                <SearchContainer />
            </div>
        );
    }
}

export default AppContainer;