import React, { useState } from "react";
import Task from "./Task";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div className="App">
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div>
          {todoList.map((task) => {
            return (
              <div key={task.id}>
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  deleteTask={deleteTask}
                  completed={task.completed}
                  completeTask={completeTask}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
