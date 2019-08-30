import React from 'react';

export default ({ data }) => {
  const {
    contentfulHeader: { title, subtitle },
  } = data;

  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};
