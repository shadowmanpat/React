import React, { Component } from 'react';

import './App.css';
import Ninjas from './Ninjas'

class App extends Component {
    state = {
        ninjas : [
            {name : "nikos", ages : "23"},
            {name : "lena", ages : "23"},
            {name : "mpamis", ages : "23"},
            {name : "nikos", ages : "23"}
        ]
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">My First React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Ninjas ninjas={this.state.ninjas}/>


      </div>
    );
  }
}

export default App;
