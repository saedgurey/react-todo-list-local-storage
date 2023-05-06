import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle,BiEdit } from "react-icons/bi";

const TodoItem = ({ todo, id,  RemoveTodo, compeletedTodo, editTodo }) => {
  return (
    <div className={todo.completed ? "todo-row complete":"todo-row"}>
            {todo.task}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => RemoveTodo(todo.id)}/>
                <BiCheckCircle onClick={() => compeletedTodo(todo.id)}/>
                <BiEdit onClick={()=> editTodo(todo.id)}/>
            </div>
        </div>
  );
};

export default TodoItem;
