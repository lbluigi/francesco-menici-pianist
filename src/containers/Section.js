import React from 'react';
import { Box, Heading } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ type, title, backgroundColor, children }) => {
  return (
    <Box
      as={type}
      backgroundColor={backgroundColor}
      padding="30px 0"
      margin="0 auto"
      sx={{
        width: ['90%', '90%', '90%', '940px']
      }}
    >
      <Heading
        as="h3"
        padding="45px 0"
        sx={{
          fontSize: "25px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '10px',
            height: '1px',
            backgroundColor: 'text',
            marginRight: '10px',
          },
          '&:after': {
            content: '""',
            display: 'inline-block',
            width: '10px',
            height: '1px',
            backgroundColor: 'text',
            marginLeft: '10px',
          },
        }}
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
};

Section.defaultProps = {
  backgroundColor: 'background',
};

Section.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
