import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { css } from "styled-components";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(props => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
        &.${activeClassName} {
        font-weight: bold;
    }
    ${({ taskLink }) => taskLink && css`
        color: ${({ theme }) => theme.color.black};
    `}
`;

export const StyledBar = styled.li`
    display: grid;
    grid-template-columns: auto auto; 
    grid-gap: 4%;
    justify-content: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    box-shadow: ${({ theme }) => theme.color.black} 0px 0px 10px;
    
`;