import React, { Component } from 'react'
import Habit from './habit';

export default class Habits extends Component {

  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0},
      { id: 2, name: 'Running', count: 0},
      { id: 3, name: 'Coding', count: 0},
    ],
  };

  handleIncrement = () => {
    // increase count and update state in the state object.
    // must use setState to update the state to let React know it changed
    this.setState({count: this.state.count + 1});    
  }

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({count: count < 0 ? 0 : count});
  }

  handleDelete = (event) => {

  }

  render() {
    return <ul>
      {this.state.habits.map(habit => (
          <Habit key={habit.id} habit={habit}/>
      ))}
    </ul>;
  }
}
