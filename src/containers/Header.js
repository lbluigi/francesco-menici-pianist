import React from 'react';
import { Link } from 'gatsby'
import LangList from '../components/header/LangList'
import Title from '../components/header/Title'
import SubTitle from '../components/header/SubTitle'

export default ({ data, langs }) => {
  const { title, subtitle } = data;
  const activeLinkStyle = {
    'font-weight': '400'
  };

  const links = langs.map(lang =>
    <li
      selected={lang.selected}
      key={lang.langKey}>
      <Link
        to={lang.link}
        activeStyle={activeLinkStyle}>
        {lang.langKey === 'en-US' ? 'en' : lang.langKey}
      </Link>
    </li>
  );

  return (
    <header>
      <LangList>
        {links}
      </LangList>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </header>
  );
};
