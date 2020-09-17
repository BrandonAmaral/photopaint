import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #1a1a1a;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    color: #d9d9d9;
    font-family: 'Roboto Slab', serif;
    font-size: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 550;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #d9d9d9;
  }
`;
