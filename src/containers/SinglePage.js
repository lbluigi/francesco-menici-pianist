import React from 'react'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

export default ({ data, location }) => {
  const {
    contentfulHeader,
    site: {
      siteMetadata: {
        languages: {
          langs,
          defaultLangKey
        }
      }
    }
  } = data;

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

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <>
      <GlobalStyle />
      <Header data={contentfulHeader} langs={langsMenu} />
    </>
  )
};
