import React, { Component } from 'react'

export default class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>    
        <button>
          <i className="fa-solid fa-minus"></i>
        </button>    
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </>
    )
  }
}
