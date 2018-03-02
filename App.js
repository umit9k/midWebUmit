import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor () {
    super();
    this.state = {
      color_blue:true
    }
  }
 changeColor(){
  this.setState({color_blue:!this.state.color_blue})
 }

  render() {
    return (
      <div className="App"
        <header className="App-header">
          <h1 className="App-title">My Navigation Menu</h1>
        </header>
        <div >
          <button style= {{backgroundColor: white}} onClick = {this.changeColor.bind(this)}>Home</button>
          <button style= {{backgroundColor: white}} onClick = {this.changeColor.bind(this)}>About</button>
          <button style= {{backgroundColor: white}} onClick = {this.changeColor.bind(this)}>Contact</button>
        </div>

      </div>
    );
  }
}

export default App;
