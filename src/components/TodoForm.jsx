import React, { useState } from "react";

const TodoForm = ({AddTodo}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    AddTodo(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add todo"
          className="todo-input"
        />
        <button className="todo-button"> Add todo</button>
        {/* <button type="submit" className="todo-button">Add Todo</button> */}
      </form>
    </div>
  );
};

export default TodoForm;
