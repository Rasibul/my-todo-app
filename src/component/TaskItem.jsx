import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="task-item">
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
      <button
        className={`toggle-btn ${task.completed ? 'completed' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </li>
  );
};

export default TaskItem;
