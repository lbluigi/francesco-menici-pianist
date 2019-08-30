import React, { useReducer } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

export default () => {
  const initialState = { lang: 'en-US' };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'en-US':
      default:
        return { lang: 'en-US' };

      case 'it':
        return { lang: 'it' };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulHeader {
        nodes {
          node_locale
          title
          subtitle
          heroImage {
            description
            file {
              url
            }
          }
        }
      }
    }
  `);

  const {
    allContentfulHeader: { nodes },
  } = data;

  const localizedData = nodes.reduce((acc, curr) => {
    const { node_locale, ...currWithoutLocale } = curr;
    acc[curr.node_locale] = currWithoutLocale;
    return acc;
  }, {});

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
      <Header
        content={localizedData}
        onSetLang={lang => dispatch({ type: lang })}
        lang={state.lang}
      />
    </>
  );
};
