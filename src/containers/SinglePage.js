import React from 'react';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import PropTypes from 'prop-types';
import Header from './Header';
import Section from './Section';
import AudioList from './AudioList';
import ProjectsGrid from './ProjectsGrid';

const SinglePage = ({ data, location }) => {
  const {
    contentfulHeader,
    site: {
      siteMetadata: {
        languages: { langs, defaultLangKey },
      },
    },
    contentfulAudio: { title: audioSectionTitle, audio: audioList },
    contentfulProjects: { title: projectsSectionTitle, projects: projectsGrid }
  } = data;
  console.log(projectsGrid)

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
      <Section type="section" title={projectsSectionTitle}>
        <ProjectsGrid projectsGrid={projectsGrid} />
      </Section>
      <Section type="section" title={projectsSectionTitle}>
        About
      </Section>
    </>
  );
};

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default SinglePage;
