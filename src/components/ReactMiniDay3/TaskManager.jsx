import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice Components", completed: false },
    { id: 3, title: "Build Mini Project", completed: false }
  ]);

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task Manager</h2>

      {tasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id)}
          />

          <span
            style={{
              marginLeft: "8px",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black"
            }}
          >
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskManager;
