import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: auto;
    padding-left: 3%;
    padding-right: 3%;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    align-items: center;
    justify-content: center;

    ${({ toggleDone }) => toggleDone && css`
    background: ${({ theme }) => theme.color.forestGreen};
    `}

    ${({ remove }) => remove && css`
    background: ${({ theme }) => theme.color.crimson};
    `}

    &:hover{
        filter: brightness(110%);
        transition: 0.5s;
        transform: scale(1.1);
    }

    &:active{
        filter: brightness(120%);
    }
    
`;
export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;