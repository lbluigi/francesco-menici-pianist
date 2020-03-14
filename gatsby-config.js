const dotenv = require('dotenv');
const languages = require('./src/data/languages');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Franceco Menici - Pianist, Composer, Arranger',
    languages,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
      options: {
        name: 'Frannesco Menici',
        short_name: 'Frannesco Menici',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Raleway',
            variants: ['200'],
          },
          {
            family: 'Chivo',
            variants: ['300', '400'],
          },
        ],
      },
    },
  ],
};
