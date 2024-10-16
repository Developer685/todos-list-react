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
    color: ${({ theme }) => theme.color.white};
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;

    &:hover{
    filter: brightness(110%);
    transform: scale(1.1);
    }
`;