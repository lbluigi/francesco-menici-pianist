import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItems';

const NavbarDesktop = ({ items }) => {
  return (
    <Box
      key="navbarDesktop"
      as="ul"
      variant="navbarDesktop"
      display="flex"
      justifyContent="space-around"
      sx={{
        maxWidth: '90%',
        mx: 'auto',
        listStyleType: 'none',
        padding: 0,
        '@media screen and (max-width: 39.999em)': {
          display: 'none',
        },
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
