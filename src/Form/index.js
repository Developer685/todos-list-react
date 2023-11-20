import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__newTaskInput" placeholder="Co jest do zrobienia?" />
        <button className="form__newTaskButton">
            Dodaj zadanie
        </button>
    </form>
)

export default Form;