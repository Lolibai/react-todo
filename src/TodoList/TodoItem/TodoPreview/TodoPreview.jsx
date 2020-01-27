import React from "react";

function TodoPreview({ name, setIsEdit }) {
  return (
    <div className="wrapper">
      <span>{name}</span>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  );
}

export default TodoPreview;
