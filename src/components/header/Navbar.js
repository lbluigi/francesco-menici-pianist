import React, { useState } from 'react';
import { Box } from 'rebass';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItems';

const Navbar = ({ items }) => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      <Box
        fontWeight="semibold"
        display={['block', 'none']}
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
          margin: '0 0 10px',
          cursor: 'pointer',
          padding: '5px 0',
          fontSize: '0.85em',
        }}
        onClick={toggleNavbar}
      >
        Menu
      </Box>

      <ReactCSSTransitionGroup
        transitionName="navbar"
        transitionEnterTimeout={350}
        transitionLeaveTimeout={350}
      >
        {navbarVisible ? (
          <Box
            key="navbar"
            as="ul"
            display={['flex', 'none']}
            sx={{
              listStyleType: 'none',
              padding: 0,
              flexDirection: 'column',
              '&.navbar-enter': {
                opacity: 0,
                height: 0,
                transition: 'all 0.35s ease-out',
              },
              '&.navbar-enter-active': {
                opacity: 1,
                height: 196,
              },
              '&.navbar-leave': {
                opacity: 1,
                height: 196,
                transition: 'all 0.35s ease-out',
              },
              '&.navbar-leave-active': {
                opacity: 0,
                height: 0,
              },
            }}
          >
            <NavbarItems items={items} />
          </Box>
        ) : null}
      </ReactCSSTransitionGroup>
    </>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
