import React from 'react';
import './App.css';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Weather to Walk the Dog 24</h1>
        <Container />
        <p>This is some regular text.</p>
        <p>40 degrees.</p>
      </header>
    </div>
  );
}

export default App;
