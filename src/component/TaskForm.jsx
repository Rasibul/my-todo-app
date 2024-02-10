import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium'); // Default priority is medium

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ text, priority });
      setText('');
      setPriority('medium'); // Reset priority after adding a task
    }
  };

  return (
    <form className="task-form mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
