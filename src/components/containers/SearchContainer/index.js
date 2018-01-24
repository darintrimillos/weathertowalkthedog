import React, { Component } from 'react';
import './searchContainer.scss';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="search-container">
                <button>Get Weather</button>
            </section>
        );
    }
}

export default SearchContainer;