import { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md flex flex-col shadow">
      <input
        type="text"
        placeholder="Adicionar nome da tarefa"
        className="borderborder-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Adicionar descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha o nome e a descrição da tarefa!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;