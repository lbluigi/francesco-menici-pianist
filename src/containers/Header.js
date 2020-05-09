import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading } from 'theme-ui';
import PropTypes from 'prop-types';
import LangList from '../components/header/LangList';
import Navbar from '../components/header/Navbar';
import NavbarDesktop from '../components/header/NavbarDesktop';
import Hero from '../components/header/Hero';

const Header = ({ data, langs }) => {
  const {
    title,
    subtitle,
    navbar,
    heroImage: {
      description,
      file: { url },
    },
  } = data;
  const activeLinkStyle = { fontWeight: 400 };

  const links = langs.map(lang => (
    <Box
      key={lang.langKey}
      as="li"
      marginLeft="10px"
      sx={{
        '&:first-of-type': {
          marginLeft: 0,
        }
      }}
    >
      <Link to={lang.link} activeStyle={activeLinkStyle}>
        {lang.langKey === 'en-US' ? 'en' : lang.langKey}
      </Link>
    </Box>
  ));

  return (
    <header>
      <Box
        mx="auto"
        sx={{
          maxWidth: '90%',
        }}
      >
        <LangList>{links}</LangList>
        <Heading 
          as="h1"
          sx={{
            fontSize: [26, 36],
            textAlign: 'center',
            marginTop: [30, 0],
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          sx={{
            fontSize: [14, 18],
            textAlign: "center",
            marginBottom: "50px",
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </Heading>
        <Navbar items={navbar} />
        <NavbarDesktop items={navbar} />
      </Box>
      <Hero src={url} alt={description} />
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    navbar: PropTypes.arrayOf(PropTypes.string).isRequired,
    heroImage: PropTypes.shape({
      description: PropTypes.string.isRequired,
      file: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  langs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Header;
