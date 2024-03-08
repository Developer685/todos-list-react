import React, { useState } from "react";
import { StyledForm, TaskInput, TaskButton } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <TaskInput
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