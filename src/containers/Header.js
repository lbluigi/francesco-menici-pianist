import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

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

  const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    padding: 20px 0;

    li {
      margin-left: 10px
    }

    a {
      text-decoration: none;
      color: #000;
    }
  `;

  return (
    <header>
      <StyledUl
        as="ul"
        justifyContent="flex-end">
        {links}
      </StyledUl>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};
