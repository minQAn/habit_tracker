import React, { useCallback, useRef, useState } from 'react';
import '../app.css';

// * UseCallback
// in class, member variable is created once, and only render functions is called repeatly
// whereas, in function, the whole code block is called repeatly which means all local variable is called repeatly. it is not efficient. that's why using useCallback
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // it's called once NOT like React.createRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
