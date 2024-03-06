
import { StyledHeadlineButtons, Button } from "./styled";
import "./style.css";

const HeadlineButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledHeadlineButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone} >
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
    </StyledHeadlineButtons >
);


export default HeadlineButtons;