import React from 'react';

const HabitAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset(); // form reset
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
