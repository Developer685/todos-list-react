import styled from "styled-components";

export const StyledNavigation = styled.li`
    display: grid;
    grid-template-columns: auto auto; 
    grid-gap: 4%;
    justify-content: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    box-shadow: ${({ theme }) => theme.color.black} 0px 0px 10px;
    
`;