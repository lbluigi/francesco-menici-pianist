import React from 'react';
import { Link } from 'gatsby'

export default ({ data, langs }) => {
  const { title, subtitle } = data;
  const links = langs.map(lang =>
    <Link
      to={lang.link}
      key={lang.langKey}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <header>
      {links}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};
