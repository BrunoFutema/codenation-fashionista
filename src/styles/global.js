import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&family=Roboto:wght@400;500;700;900&display=swap');

  :root {
    --primary-color: #cf3838;
    --secondary-color: #212529;
    --third-color: #fff;
    --background-color: #f9f9f9;
    --max-widh-container: 1230px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', 'Red Hat Display', sans-serif;
    background: var(--background-color);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 100%;
    max-width: var(--max-widh-container);
    margin: 0 auto;
  }
`;
