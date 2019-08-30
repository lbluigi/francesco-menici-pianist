import React from 'react';
import Layout from '../containers/Layout';
import Header from '../containers/Header';

export default ({ data }) => {
  return (
    <Layout>
      <Header data={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
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
