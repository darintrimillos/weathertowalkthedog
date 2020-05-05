import React from 'react';
import './App.css';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Weather to Walk the Dog</h1>
      </header>
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;
