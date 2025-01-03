import styled from "styled-components";

export const StyledHeadlineButtons = styled.div`
    padding: 1%;
`;
export const Button = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;
    margin-right: 10px;

&:hover{
    cursor: pointer;
    color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    transition: 0.5s;
}

&:disabled{
    color: #999;
    cursor: default;
}

&:active{
    filter: brightness(120%);
}

@media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    transform: scale(1.1);
    transition: 0.5s;
}
`;