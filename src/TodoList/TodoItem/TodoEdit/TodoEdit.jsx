import React from "react";

function TodoEdit({ name, setIsEdit }) {
  return (
    <div className="wrapper">
      <input value={name} />
      <button onClick={() => setIsEdit(false)}>Cancel</button>
    </div>
  );
}

export default TodoEdit;
