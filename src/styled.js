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