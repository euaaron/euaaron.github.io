import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${(props) => props.theme.colors.primary};
    --secondary: ${(props) => props.theme.colors.secondary};
    --title: ${(props) => props.theme.colors.title};
    --foreground: ${(props) => props.theme.colors.foreground};
    --background: ${(props) => props.theme.colors.background};
    --success: ${(props) => props.theme.colors.success};
    --warning: ${(props) => props.theme.colors.warning};
    --danger: ${(props) => props.theme.colors.danger};
    --disabled: ${(props) => props.theme.colors.disabled};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1366px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--background);
    color: var(--foreground);
    -webkit-font-smothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
  }

  div#root {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  
  body, input, button, textarea {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 300;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
