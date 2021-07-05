import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
  }
  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.textPrimary};
    &::placeholder {
      color: ${props => props.theme.colors.textPrimary};
    }
  }
  button {
    cursor: pointer;
  }
`;