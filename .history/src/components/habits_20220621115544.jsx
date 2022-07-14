import React, { Component } from 'react'
import Habit from './habit';
import Navbar from './navbar';

export default class Habits extends Component {
  
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  }


  render() {
    return (
      <Navbar />
      <ul>
        {this.props.habits.map(habit => (
            <Habit 
              key={habit.id} 
              habit={habit} 
              onIncrement={this.handleIncrement} 
              onDecrement={this.handleDecrement} 
              onDelete={this.handleDelete} 
            />
        ))}
      </ul>
    );
  }
}