import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading } from 'rebass';
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
      as="li"
      key={lang.langKey}
      selected={lang.selected}
      sx={{
        marginLeft: 10,
      }}
    >
      <Link to={lang.link} activeStyle={activeLinkStyle} variant="langLink">
        {lang.langKey === 'en-US' ? 'en' : lang.langKey}
      </Link>
    </Box>
  ));

  return (
    <header>
      <Box
        sx={{
          maxWidth: '90%',
          mx: 'auto',
        }}
      >
        <LangList>{links}</LangList>
        <Heading
          as="h1"
          fontSize={[26, 36]}
          textAlign="center"
          marginTop={[30, 0]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          fontSize={[14, 18]}
          textAlign="center"
          marginBottom="50px"
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
