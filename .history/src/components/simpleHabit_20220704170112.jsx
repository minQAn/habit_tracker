import React from 'react';

const SimpleHabit = (props) => {
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={this.handleIncrement}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={this.handleDecrement}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
