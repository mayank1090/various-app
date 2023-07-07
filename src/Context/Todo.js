// src/contexts/TodoContext.js
import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId, completed) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: completed } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, removeTask, toggleTaskCompletion, completedTasksCount }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
