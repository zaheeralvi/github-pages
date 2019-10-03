import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/images/zaheer.jpg`} className="App-logo" alt="logo" />
        <a className="App-link" href="https://www.linkedin.com/in/zaheer-abbas-9a6aa8105/" target="_blank" rel="noopener noreferrer" >Zaheer Alvi </a>
        <p>My First Progressive Web APP</p>
      </header>
    </div>
  );
}

export default App;
