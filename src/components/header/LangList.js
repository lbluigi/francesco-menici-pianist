import React from 'react';
import { Flex } from 'theme-ui';
import PropTypes from 'prop-types';

const LangList = ({ children }) => (
  <Flex
    as="ul"
    padding="20px 0"
    sx={{
      listStyleType: 'none',
      textTransform: 'uppercase',
      justifyContent: ['center', 'flex-end'],
      a: {
        textDecoration: 'none',
        color: 'text',
      },
    }}
  >
    {children}
  </Flex>
);

LangList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LangList;
