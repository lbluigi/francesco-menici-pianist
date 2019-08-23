import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

export default () => {
  const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: 'Chivo', sans-serif;
      font-weight: 300;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};
