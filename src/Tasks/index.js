import "./style.css";
import { List, Item, Button, Content } from "./styled";
const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item key={task.id} hidden={task.done && hideDone}>


                <Button onClick={() => toggleTaskDone(task.id)} className="tasks__button  tasks__item--toggleDone">{task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>{task.content}</Content>
                <button onClick={() => removeTasks(task.id)} className="tasks__button tasks__deleteButton">
                    🗑
                </button>


            </Item>
        ))}
    </List>);

export default Tasks;