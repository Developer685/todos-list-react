import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: auto;
    padding-left: 2%;
    padding-right: 2%;
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

`;
export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;