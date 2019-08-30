import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby';

export default ({ data }) => {
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
          langs
        }
      }
    }
  }
`;
