import React, { Component } from 'react';

import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {
    state = {
        ninjas : [
            {name : "nikos", age : 26, id : 0},
            {name : "lena", age : 33, id : 2},
            {name : "mpamis", age : 45 , id : 3},
            {name : "nikos", age : 28, id : 4}
        ]
    };


    addNinja = (ninja) => {
        console.log(ninja)
        ninja.id = Math.random();

        let ninjasN = [...this.state.ninjas, ninja];

        this.setState({
            ninjas: ninjasN
        });
        console.log(this.state.ninjas)
    };

    deleteNinja = (id)  => {
        console.log(id)
        let ninjas = this.state.ninjas.filter(ninja =>{
            return ninja.id !== id ? ninja : null
        });
        this.setState({
            ninjas: ninjas
        })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">My First React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Ninjas deleteNinja= {this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja ={this.addNinja} />

      </div>
    );
  }
}

export default App;
