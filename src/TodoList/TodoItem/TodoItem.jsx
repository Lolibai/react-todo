import React, { useState } from "react";
import "./TodoItem.css";
import TodoPreview from "./TodoPreview/TodoPreview";
import TodoEdit from "./TodoEdit/TodoEdit";

function TodoItem({ name }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="todo-item">
      {isEdit ? (
        <TodoEdit name={name} setIsEdit={setIsEdit} />
      ) : (
        <TodoPreview name={name} setIsEdit={setIsEdit} />
      )}
    </div>
  );
}

export default TodoItem;
