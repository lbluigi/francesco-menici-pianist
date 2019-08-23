import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulHeader {
        nodes {
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
    }
  `);

  console.log(data);

  return (
    <header>
      <h1>Francesco Menici</h1>
      <h2>Pianist - Composer - Arranger</h2>
    </header>
  );
};
