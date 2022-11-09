import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {

  //COLOR THEME
  --primary: ;
  --greey: ;
  --light-purple: ;
  --blue: ;
  --yellow: ;
  --orange: ;
  --red: ;
  --white: ;
  --black: ;

  //BREAKPOINTS 
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;

  //WIDTH
  --maxWidth: 1200px;

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    //10px (16px = 1.6rem) (18px = 1.8rem)
    font-size: 10px;
    overflow-y: scroll;
    color: var(--black);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    line-height: inherit;
    text-align: center;
  }

  p {
    margin: 0;

    a {
      font-size: inherit;

      &:hover {}
    }
  }

  li {

  }

  ul {

  }

}
`;
