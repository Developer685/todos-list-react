import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    margin: 1px;

    @media(max-width: 730px) {
    grid-template-columns: 1fr;
}
`;

export const TaskInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const TaskButton = styled.button`
    padding: 10px;
    color: white;
    border: none;
    background-color: teal;
    transition: 0.5s;
    &:hover{
    background-color: rgb(1, 182, 182);
    transform: scale(1.1);
    }
`;



