import React from 'react';
import styled from 'styled-components';

const LangList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 20px 0;

  li {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media screen and (min-width: 40em) {
    justify-content: flex-end;
  }
`;

export default ({ children }) => (
  <LangList>
    {children}
  </LangList>
)