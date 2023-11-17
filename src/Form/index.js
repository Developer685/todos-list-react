import "./style.css";

const Form = () => (
    <form className="form">
        <input class="form__newTaskInput" placeholder="Co jest do zrobienia?" />
        <button class="form__newTaskButton">
            Dodaj zadanie
        </button>
    </form>
)

export default Form;