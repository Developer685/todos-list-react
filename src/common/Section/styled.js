import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    padding-bottom: 2%;
    border-radius: 5px;
    box-shadow: 10px 10px 45px -30px ${({ theme }) => theme.color.gunPowder};
`;

export const StyledHeadlineSection = styled.h2`
    font-size: 25px;
    border-bottom: 1px solid ${({ theme}) => theme.color.alto};
    display: grid;
    display: flex;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    align-items: center;
    margin: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    box-shadow: none;
`;
