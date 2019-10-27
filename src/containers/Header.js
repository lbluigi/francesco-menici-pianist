import React from 'react';
import { Link } from 'gatsby'
import { Box } from 'rebass'
import LangList from '../components/header/LangList'
import Title from '../components/header/Title'
import SubTitle from '../components/header/SubTitle'
import Navbar from '../components/header/Navbar'

export default ({ data, langs }) => {
  const { title, subtitle, navbar } = data;
  const activeLinkStyle = {
    fontWeight: 400
  };

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
      <LangList>
        {links}
      </LangList>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Navbar items={navbar} />
    </header>
  );
};
