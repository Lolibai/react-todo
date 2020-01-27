import React from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import Card from "./Shared/Card/Card";

function App() {
  const todos = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" }
  ];
  return (
    <div className="app">
      <Card>
        <Card.Header>React Component API</Card.Header>
        <Card.Body>
          <TodoList todos={todos} />
        </Card.Body>
        <Card.Footer>Todos: {todos.length}</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
