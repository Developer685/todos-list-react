import { useState, useRef } from "react";
import { StyledForm, TaskInput, TaskButton } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    }
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <TaskInput
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <TaskButton>
                Dodaj zadanie
            </TaskButton>
        </StyledForm>
    );
}

export default Form;