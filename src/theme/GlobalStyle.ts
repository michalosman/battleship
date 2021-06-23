import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    line-height: 1.6;
    /* Footer support */
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.light.primary};
    /* Footer support */
    margin-bottom: 5.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 1400px) {
    html {
      font-size: 45%;
    }
  }
`
export default GlobalStyle
