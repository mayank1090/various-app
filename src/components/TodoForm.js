// src/components/TodoForm.js
import React, { useState } from 'react';
import { useTodo } from '../Context/Todo';
import '../Style/Todoform.css';

function TodoForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    addTask(newTask);
    setTaskTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;
