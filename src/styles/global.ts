import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        font-family: 'Raleway', sans-serif;
    }
    
    html, body {
        background-color: #100E1D;
    }
`;

export default GlobalStyles;
