import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: ${({ theme }) => theme.colors.primary};
    }
    ::-webkit-scrollbar-track{
      background: #FFF;
      border-radius: 10px;
    }

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