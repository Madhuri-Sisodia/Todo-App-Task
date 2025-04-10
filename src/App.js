import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (text) => {
    if (tasks.some((task) => task.text === text)) {
      toast.error("Task already exists!");
      return;
    }
    const newTask = { id: Date.now(), text };
    setTasks([newTask, ...tasks]);
    toast.success("Task added!");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted!");
  };

  const handleEdit = (id, newText) => {
    if (tasks.some((task) => task.text === newText && task.id !== id)) {
      toast.error("Duplicate task name!");
      return;
    }
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updated);
    toast.success("Task updated!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-20 px-4">
      <Toaster
        position="top-right"
        toastOptions={{
          className: "w-96 text-sm font-medium",
          duration: 2000,
          style: {
            padding: "12px 20px",
            borderRadius: "8px",
          },
        }}
      />

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Todo List
        </h1>
        <TodoInput onAdd={handleAdd} />
        <TodoList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
