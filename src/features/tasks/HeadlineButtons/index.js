import { useSelector, useDispatch } from "react-redux";
import { StyledHeadlineButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const HeadlineButtons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (

        <StyledHeadlineButtons>
            {(
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button onClick={() => dispatch(setAllDone())} >
                        {tasks.every(task => task.done) ? "Oznacz wszystkie jako niedokończone" : "Oznacz wszystkie jako ukończone"}
                    </Button>
                </>
            )}
        </StyledHeadlineButtons>
    )
};


export default HeadlineButtons;