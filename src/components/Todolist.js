// src/components/TodoList.js
import React from 'react';
import { useTodo } from '../Context/Todo';
import '../Style/Todolist.css';
import TodoForm from './TodoForm';

function TodoList() {
    const { tasks, toggleTaskCompletion, removeTask, completedTasksCount } = useTodo();
  
    const handleToggleTaskCompletion = (taskId, completed) => {
      toggleTaskCompletion(taskId, !completed);
    };
  
    const handleRemoveTask = (taskId) => {
      removeTask(taskId);
    };
  
    return (
      <div className='letony'>
        <div className='one'>
        <h2>To-Do List</h2>
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasksCount}</p>
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          <ul style={{display:"block"}}>
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(task.id, task.completed)}
                />
                <span>{task.title}</span>
                <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        </div>
        <div className='one'>
        <TodoForm/>
        </div>
      </div>
    );
  }
  
  export default TodoList;