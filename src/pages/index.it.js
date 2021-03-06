import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SinglePage from '../containers/SinglePage';

const It = ({ data, location }) => {
  const {
    contentfulMetaContent: { title, description },
  } = data;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <SinglePage data={data} location={location} />
    </>
  );
};

export const query = graphql`
  query ItQuery {
    site {
      siteMetadata {
        languages {
          langs
          defaultLangKey
        }
      }
    }
    contentfulMetaContent(node_locale: { eq: "it" }) {
      title
      description
    }
    contentfulHeader(node_locale: { eq: "it" }) {
      title
      subtitle
      navbar
      heroImage {
        description
        file {
          url
        }
      }
    }
    contentfulAudio(node_locale: { eq: "it" }) {
      title
      audio {
        id
        title
        file {
          url
          fileName
        }
      }
    }
    contentfulProjects(node_locale: { eq: "it" }) {
      title
      projects {
        id
        description
        title
        file {
          url
          fileName
        }
      }
    }
  }
`;

It.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default It;
