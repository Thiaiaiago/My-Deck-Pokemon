import { ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-3 p-6 rounded-md bg-slate-200 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon></TrashIcon>
          </button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;