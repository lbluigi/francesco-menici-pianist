import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';

const App = ({ data }) => {
  if (typeof window !== 'undefined') {
    const { defaultLangKey } = data.site.siteMetadata.languages;
    const homeUrl = withPrefix(`/${defaultLangKey}/`);
    navigate(homeUrl);
  }

  // replace <div /> with <SEO />
  return <div />;
};

export const data = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
        }
      }
    }
  }
`;

App.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        languages: PropTypes.shape({
          defaultLangKey: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default App;
