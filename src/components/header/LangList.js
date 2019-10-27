import React from 'react';
import { Flex } from 'rebass'

export default ({ children }) => (
  <Flex
    as="ul"
    variant="langList"
    sx={{
      listStyleType: 'none',
      padding: '20px 0',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </Flex>
)