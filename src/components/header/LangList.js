import React from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';

const LangList = ({ children }) => (
  <Flex
    as="ul"
    variant="langList"
    sx={{
      listStyleType: 'none',
      padding: '20px 0',
      textTransform: 'uppercase',
      justifyContent: 'center',
      '@media screen and (min-width: 40em)': {
        justifyContent: 'flex-end',
      },
      a: {
        textDecoration: 'none',
        color: 'black',
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
