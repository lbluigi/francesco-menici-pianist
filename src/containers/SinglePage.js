import React from 'react'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming'
import { Box } from 'rebass';
import Header from './Header';
import Section from './Section';
import theme from '../data/theme'

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
    },
    contentfulAudio: {
      title: audioTitle,
    },
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
    }

    h1,
    h2,
    h3 {
      text-transform: uppercase;
    }
  `;

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box
        fontFamily="body"
        fontWeight="body"
      >
        <Header data={contentfulHeader} langs={langsMenu} />
        <Section
          type="section"
          title={audioTitle}
        />
      </Box>
    </ThemeProvider>
  )
};
