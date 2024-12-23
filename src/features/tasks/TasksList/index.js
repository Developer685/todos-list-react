import { selectTasks } from "../tasksSlice";
import { List, Item, Button, Content } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTaskDone, removeTask } from "../tasksSlice";

const TasksList = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button
                        onClick={() => dispatch(toggleTaskDone())}
                        toggleDone
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask())}
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