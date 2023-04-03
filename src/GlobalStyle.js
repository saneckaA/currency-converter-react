import { createGlobalStyle } from "styled-components";
import background from "./background.jpeg";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}
`;