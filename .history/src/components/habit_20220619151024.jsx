import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Habit extends Component {

  state = {
    count: 0,
  }

  handleIncrement = (event) => {
    // increase count and update state in the state object.
    this.state.count++;
  }

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-plus"></i>
        </button>    
        <button className="habit-button habit-decrease">
          <i className="fa-solid fa-minus"></i>
        </button>    
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  }
}
