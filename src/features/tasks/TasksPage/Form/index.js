import { useState, useRef } from "react";
import { StyledForm, TaskButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { TaskInput } from "../Input/styled";

const Form = () => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(
            addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));

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