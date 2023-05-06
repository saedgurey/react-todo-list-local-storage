import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditTodoForm from "./components/EditTodoForm";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
   localStorage.setItem("ITEMS", json.stringify(todos))
  },[todos])

  const AddTodo = (todo) => {
   setTodos([...todos, {id: crypto.randomUUID(), task: todo, completed : false, isEditing: false}])
  };

  const RemoveTodo = (id) => {
    // let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const completeTodo = (id) => {
  //   let updatedTodos = todos.map((todo) => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   })
  //   setTodos(updatedTodos)
  // }

  const compeletedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1> Todo List</h1>
      <TodoForm AddTodo={AddTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} todo={todo} />
        ) : (
          <TodoItem
            todo={todo}
            key={todo.id}
            RemoveTodo={RemoveTodo}
            compeletedTodo={compeletedTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default App;
