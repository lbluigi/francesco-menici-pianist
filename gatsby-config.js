const languages = require('./src/data/languages');

const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: `Franceco Menici - Pianist, Composer, Arranger`,
    languages,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        name: `Frannesco Menici`,
        short_name: `Frannesco Menici`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`200`],
          },
          {
            family: `Chivo`,
            variants: [`300`, `400`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
