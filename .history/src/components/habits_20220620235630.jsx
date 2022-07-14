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

  handleIncrement = (habit) => {
    // increase count and update state in the state object.
    // must use setState to update the state to let React know it changed    
    // this.setState({count: this.state.count + 1});
    
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits]; // ... spread operator
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({
      habits // same as habits: habits
    });
  }

  handleDecrement = (habit) => {
    // const count = this.state.count - 1;
    // this.setState({count: count < 0 ? 0 : count});

    console.log(`handleDecrement ${habit.name}`);
    
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  }

  render() {
    return <ul>
      {this.state.habits.map(habit => (
          <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete} 
          />
      ))}
    </ul>;
  }
}
