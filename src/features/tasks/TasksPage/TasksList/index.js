import { List, Item, Button, Content } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQuerryParamName from "../../searchQuerryParamName";
import { StyledNavLink } from "../../../../styled";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../../queryParameters";

const TasksList = () => {

  const query = useQueryParameter(searchQuerryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledNavLink taskLink
              to={toTask({ id: task.id })} >{task.content}</StyledNavLink>
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
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