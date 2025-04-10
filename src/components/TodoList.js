import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
