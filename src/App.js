import React, { Component } from 'react';

import './App.css';
import Navigation from './Navigation.js';




class App extends Component {
  render() {
    return(
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Navigation />
      </div>
    );
  }
}

export default App;