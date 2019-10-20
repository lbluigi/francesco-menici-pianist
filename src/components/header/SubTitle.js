import React from 'react';
import { Heading } from 'rebass';

export default ({ children }) => (
  <Heading 
    as="h2"
    fontSize={[ 14, 18 ]}
    fontFamily="Raleway"
    fontWeight="200"
    textAlign="center"
  >
    {children}
  </Heading>
)
