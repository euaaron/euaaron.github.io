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
    --gradient: ${(props) => props.theme.colors.gradient};    
  }

  ::-webkit-scrollbar {
    width: 0.5rem;    
    height: 0.5rem;
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    width: 0.5rem;
    height: 0.5rem;
    background: var(--primary);
    border-radius: 1rem;
  }

  ::selection {
    background: ${({theme})=> theme.type === 'light' ? '#22222f' : '#f2f2ff'};
    color: ${({theme})=> theme.type === 'light' ? '#f2f2ff' : '#22222f'};
  }
  
  html, body, div, main, aside, nav, header, footer, p, 
  h1,  h2,  h3,  h4,  h5,  h6,  span, ul, li, a, img, button, 
  input, textarea, select, option, iframe, form, label, fieldset,
  legend, table, tr, td, th, tbody, thead, tfoot, text, pre, code, 
  address, blockquote, dl, dt, dd, ol, menu, nav, article, aside, canvas, 
  details, figcaption, figure, footer, header, hgroup, menu, nav, section, 
  summary, time, mark, audio, video {
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
    -webkit-font-smothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--foreground);
    background: var(--background);
    
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
  }
  
  body, input, button, textarea {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 300;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
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
