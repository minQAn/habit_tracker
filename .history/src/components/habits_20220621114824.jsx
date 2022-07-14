import React, { Component } from 'react'
import Habit from './habit';

export default class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };


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
