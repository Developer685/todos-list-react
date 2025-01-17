import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px 0px 20px 0px;

    @media(max-width: 730px) {
    grid-template-columns: 1fr;
    padding: 20px 20px 20px 0px;
}
`;

export const TaskButton = styled.button`
    padding: 10px;
    margin-right: 20px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;

    &:hover{
    filter: brightness(110%);
    transform: scale(1.1);
    cursor: pointer;
    }
    @media (max-width: 730px) {
        margin-left: 20px;
        margin-right: 0px;
    }
`;