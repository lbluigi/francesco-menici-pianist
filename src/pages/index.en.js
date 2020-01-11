import React from 'react'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SinglePage from '../containers/SinglePage';

export default ({ data, location }) => {
  const { contentfulMetaContent: { title, description } } = data;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
      </Helmet>
      <SinglePage
        data={data}
        location={location}
      />
    </>
  )
};

export const query = graphql`
  query EnQuery {
    site {
      siteMetadata {
        languages {
          langs
          defaultLangKey
        }
      }
    }
    contentfulMetaContent(node_locale: { eq: "en-US" }) {
      title
      description
    }
    contentfulHeader(node_locale: { eq: "en-US" }) {
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
    contentfulAudio(node_locale: {eq: "en-US"}) {
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
  }
`;
