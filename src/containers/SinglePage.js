import React from 'react';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import PropTypes from 'prop-types';
import Header from './Header';
import Section from './Section';
import AudioList from './AudioList';

const SinglePage = ({ data, location }) => {
  const {
    contentfulHeader,
    site: {
      siteMetadata: {
        languages: { langs, defaultLangKey },
      },
    },
    contentfulAudio: { title: audioSectionTitle, audio: audioList },
  } = data;

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <>
      <Header data={contentfulHeader} langs={langsMenu} />
      <Section type="section" title={audioSectionTitle}>
        <AudioList audioList={audioList} />
      </Section>
    </>
  );
};

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default SinglePage;
