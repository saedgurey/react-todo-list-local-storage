import React, { useState } from "react";

const EditTodoForm = ({editTodo, todo, id}) => {
  const [input, setInput] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    editTodo(input, todo.id);
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
        <button className="todo-button"> update todo</button>
        {/* <button type="submit" className="todo-button">Add Todo</button> */}
      </form>
    </div>
  );
};

export default EditTodoForm;