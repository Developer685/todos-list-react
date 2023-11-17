import "./style.css"

const HeadlineButtons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="main__headlineButtons">
            <button class="main__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="main__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div >
    )
);


export default HeadlineButtons;