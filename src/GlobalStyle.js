import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  margin: auto;
  font-family: "Lato", sans-serif;
  background-color: #eee;
}

`;

export const Main = styled.main`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
`;