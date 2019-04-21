import React, { Component } from 'react';
import './App.css';
import BoxContainer from './components/BoxContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Click on a box to change the color</h1>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
