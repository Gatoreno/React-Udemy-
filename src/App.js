import React from 'react';
import logo from './logo.svg';
import WeatherLocation from './components/WeatherLocation'
import './App.css';


//     <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
  
       
        <small><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></small>
        <WeatherLocation></WeatherLocation>
      </header>
     
    </div>
  );
}

export default App;
