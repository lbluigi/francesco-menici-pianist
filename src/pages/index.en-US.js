import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../containers/Layout';
import SinglePage from '../containers/SinglePage';

export default ({ data, location }) => {
  return (
    <Layout>
      <SinglePage
        data={data}
        location={location}
      />
    </Layout>
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
    contentfulHeader(node_locale: { eq: "en-US" }) {
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
`;
