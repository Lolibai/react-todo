import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} name={todo.name} />
      ))}
    </div>
  );
}

export default TodoList;
