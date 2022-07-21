import React from "react";

const Task = (props) => {
  return (
    <div style={{ textDecoration: props.completed ? "line-through" : "none" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>complete</button>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};

export default Task;
