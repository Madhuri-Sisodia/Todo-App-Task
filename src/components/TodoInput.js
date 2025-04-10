import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = task.trim();
    if (newTask) {
      onAdd(newTask);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border rounded-lg shadow-sm outline-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
