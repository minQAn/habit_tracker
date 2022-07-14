import React, { useState } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={this.handleIncrement}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
