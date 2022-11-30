import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: 0.2s;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme['base-text']};
        font-weight: 400;
        font-size: 1rem;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.background};
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['yellow-500']};
        border-radius: 3px;
        transition: background-color .1s;
    }

`
