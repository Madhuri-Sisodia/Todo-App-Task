import { useState } from "react";
import { Pencil, Save, Trash } from "lucide-react";
const TodoItem = ({ task, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== task.text) {
      onEdit(task.id, editText.trim());
      setEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-start bg-white p-3 rounded-md shadow mb-2">
      <div className="flex-1 min-w-0 pr-4">
        {editing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        ) : (
          <span className="block break-words text-gray-800">{task.text}</span>
        )}
      </div>

      <div className="flex gap-2 shrink-0">
        {editing ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            <Save size={16} /> Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
          >
            <Pencil size={16} /> Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          <Trash size={16} /> Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
