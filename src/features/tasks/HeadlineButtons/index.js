import { useSelector, useDispatch } from "react-redux";
import { StyledHeadlineButtons, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const HeadlineButtons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledHeadlineButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledHeadlineButtons>
    )
};


export default HeadlineButtons;