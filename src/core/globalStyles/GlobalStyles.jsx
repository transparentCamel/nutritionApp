import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'inter';
    src: url('../../assets/fonts/Inter-Regular.ttf');
  }
@font-face {
    font-family: 'inter';
    src: url('../../assets/fonts/Inter-Bold.ttf');
    font-weight: bold;
  }

body {
    margin: 0;
    padding: 0;
    font-family: inter;
    #root {
        flex-direction:column;
    }
    * {
        display:flex;
    }
    h1 {
        font-size: ${theme.fontSizes.h1};
    }
    h2 {
        font-size: ${theme.fontSizes.h2};
    }
    h3 {
        font-size: ${theme.fontSizes.h3};
    }
    .title01 {
        font-size: ${theme.fontSizes.title01}; 
    }
    .title02 {
        font-size: ${theme.fontSizes.title02}; 
    }
    p { 
        font-size: ${theme.fontSizes.paragraph};

    }
    
    .row {
        display:flex;
        flex-direction:row;
    }
    .column {
        display:flex;
        flex-direction:column;
    }
   
}
`;
