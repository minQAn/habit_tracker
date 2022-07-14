import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Habit extends Component {

 

  render() {
    
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-plus"></i>
        </button>    
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fa-solid fa-minus"></i>
        </button>    
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  }
}
