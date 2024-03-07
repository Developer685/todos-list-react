import styled from "styled-components";

export const StyledHeadlineButtons = styled.div`
    padding: 1%;
`;
export const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 18px;
    color: teal;
    transition: 0.5s;

&:hover{
    cursor: pointer;
    color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    transition: 0.5s;
}

&disabled{
    color: #999;
    cursor: default;
}

@media(max-width:767px){
    transform: scale(1.1);
    transition: 0.5s;
}
`;