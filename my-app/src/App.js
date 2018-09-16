import React, { Component } from 'react';

import './App.css';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">My First React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Ninjas name = "Nikolaras" age = "31"/>
        <Ninjas name = "Yoshi" age = "22"/>
      </div>
    );
  }
}

export default App;
