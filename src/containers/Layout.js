import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

export default ({ children }) => {
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
      <Helmet>
        <title>Francesco Menici - Pianist, Composer, Arranger</title>
        <meta
          name="description"
          content="Francesco Menici è un pianista, tastierista, compositore e arrangiatore nato a Livorno nel 1984."
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
};
