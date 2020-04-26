import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItems';

const NavbarDesktop = ({ items }) => {
  return (
    <Box
      key="navbarDesktop"
      as="ul"
      display={['none', 'flex']}
      justifyContent="space-around"
      sx={{
        maxWidth: '940px',
        mx: 'auto',
        listStyleType: 'none',
        padding: 0,
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
