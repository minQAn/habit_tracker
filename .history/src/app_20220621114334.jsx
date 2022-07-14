import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0},
      { id: 2, name: 'Running', count: 0},
      { id: 3, name: 'Coding', count: 0},
    ],
  };

  render() {
    return <Habits />;
  }
}


export default App;
