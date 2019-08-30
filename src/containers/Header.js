import React from 'react';

export default ({ content, onSetLang, lang }) => {
  return (
    <header>
      <p>Lang: {lang}</p>
      <ul>
        <li>
          <button onClick={() => onSetLang('en-US')}>EN</button>
        </li>
        <li>
          <button onClick={() => onSetLang('it')}>IT</button>
        </li>
      </ul>
      <h1>{content[lang].title}</h1>
      <h2>{content[lang].subtitle}</h2>
    </header>
  );
};
