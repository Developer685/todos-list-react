import { useSelector, useDispatch } from "react-redux";
import { StyledHeadlineButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const HeadlineButtons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        
        <StyledHeadlineButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button onClick={() => dispatch(setAllDone())} >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledHeadlineButtons>
    )
};


export default HeadlineButtons;