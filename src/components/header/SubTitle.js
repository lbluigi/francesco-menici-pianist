import React from 'react';
import { Heading } from 'rebass';

export default ({ children }) => (
  <Heading
    as="h2"
    fontSize={[14, 18]}
    textAlign="center"
    marginBottom="50px"
  >
    {children}
  </Heading>
)
