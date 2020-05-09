import React from 'react';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItems';

const NavbarDesktop = ({ items }) => {
  return (
    <Box
      key="navbarDesktop"
      as="ul"
      mx="auto"
      padding="0"
      sx={{
        display: ['none', 'flex'],
        justifyContent: [null, 'space-around'],
        maxWidth: '940px',
        listStyleType: 'none',
      }}
    >
      <NavbarItems items={items} desktop />
    </Box>
  );
};

NavbarDesktop.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavbarDesktop;
