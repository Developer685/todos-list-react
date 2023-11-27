import "./style.css";

const HeadlineButtons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="main__headlineButtons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="main__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="main__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);


export default HeadlineButtons;