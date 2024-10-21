import { selectTasks } from "../tasksSlice";
import { List, Item, Button, Content } from "./styled";
import { useSelector } from "react-redux";
const TasksList = ({ removeTasks, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button
                        toggleDone
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        onClick={() => removeTasks(task.id)}
                        remove
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;