import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body::-webkit-scrollbar{
        /* width:12px; */
        background-color: ${props => props.theme.colors.scrollbarColor};
    }

    body::-webkit-scrollbar-thumb {   
        background-color: ${props => props.theme.colors.scrollbarThumbColor};
        
        &:hover{
            background-color: ${props => props.theme.colors.scrollbarThumbHoverColor};
        }
    }


    html{ 
        @media (max-width:1080px){
            font-size:93.75%
        }
        @media (max-width:720px){
            font-size: 87.5%
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;;
    }
    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
`