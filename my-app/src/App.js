import React, { Component } from 'react';

import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {
    state = {
        ninjas : [
            {name : "nikos", age : "23"},
            {name : "lena", age : "22"},
            {name : "mpamis", age : "25"},
            {name : "nikos", age : "25"}
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
        <AddNinja/>

      </div>
    );
  }
}

export default App;
