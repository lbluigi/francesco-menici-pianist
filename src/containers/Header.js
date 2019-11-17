import React from 'react';
import { Link } from 'gatsby'
import { Box } from 'rebass'
import LangList from '../components/header/LangList'
import Title from '../components/header/Title'
import SubTitle from '../components/header/SubTitle'
import Navbar from '../components/header/Navbar'
import NavbarDesktop from '../components/header/NavbarDesktop';
import Hero from '../components/header/Hero';

export default ({ data, langs }) => {
  const {
    title,
    subtitle,
    navbar,
    heroImage: {
      description,
      file: { url }
    }
  } = data;
  const activeLinkStyle = { fontWeight: 400 };

  const links = langs.map(lang =>
    <Box
      as="li"
      key={lang.langKey}
      selected={lang.selected}
      sx={{
        marginLeft: 10
      }}
    >
      <Link
        to={lang.link}
        activeStyle={activeLinkStyle}
        variant="langLink"
      >
        {lang.langKey === 'en-US' ? 'en' : lang.langKey}
      </Link>
    </Box>
  );

  return (
    <header>
      <Box
        sx={{
          maxWidth: '90%',
          mx: 'auto'
        }}
      >
        <LangList>
          {links}
        </LangList>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Navbar items={navbar} />
        <NavbarDesktop items={navbar} />
      </Box>
      <Hero
        src={url}
        alt={description}
      />
    </header>
  );
};
