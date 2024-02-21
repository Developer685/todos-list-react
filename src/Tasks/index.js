import "./style.css";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className={`tasks__item ${hideDone && task.done ? "tasksList__item--hidden" : ""}`}>


                <button onClick={() => toggleTaskDone(task.id)} className="tasks__button  tasks__item--toggleDone">{task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>{task.content}
                </span>
                <button onClick={() => removeTasks(task.id)} className="tasks__button tasks__deleteButton">
                    🗑
                </button>


            </li>
        ))}
    </ul >);

export default Tasks;