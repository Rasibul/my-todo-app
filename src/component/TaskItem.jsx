import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const priorityColors = {
    low: '#38a169',    // Green for low priority
    medium: '#ffed4a', // Yellow for medium priority
    high: '#e53e3e',   // Red for high priority
  };

  return (
    <li className="task-item" style={{ borderColor: priorityColors[task.priority] }}>
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
