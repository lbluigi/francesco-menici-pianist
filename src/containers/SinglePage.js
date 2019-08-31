import React from 'react'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
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
  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <Header data={contentfulHeader} langs={langsMenu} />
  )
};
