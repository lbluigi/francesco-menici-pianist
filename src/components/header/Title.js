import React from 'react';
import { Heading } from 'rebass';

export default ({ children }) => (
  <Heading 
    as="h1"
    fontSize={[ 26, 36 ]}
    fontFamily="Raleway"
    fontWeight="200"
    textAlign="center"
    marginTop={[ 30, 0 ]}
  >
    {children}
  </Heading>
)

