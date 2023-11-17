import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li className={`tasks__item ${props.hideDoneTasks && task.done ? "tasksList__item--hidden" : ""}`}>


                <button className="tasks__button  tasks__item--toggleDone">{task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}"`}>{task.content}
                </span>
                <button className="tasks__button tasks__deleteButton">
                    🗑
                </button>


            </li>
        ))}
    </ul >);

export default Tasks;