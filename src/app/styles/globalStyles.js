import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Albert Sans", serif;
    background-color: ${({ theme }) => theme.colors.bgcolor};
  }
`;

export default GlobalStyle;
