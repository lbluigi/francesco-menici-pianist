import React from 'react';
import { Box, Link } from 'rebass';
import PropTypes from 'prop-types';

const NavbarItems = ({ items, desktop }) => {
  return items.map(item => (
    <Box
      key={item}
      as="li"
      sx={{
        width: ['100%', 'auto'],
        '&:after': desktop && {
          content: '""',
          display: 'block',
          width: 0,
          height: '2px',
          backgroundColor: 'primary',
          marginLeft: '50%',
          transition: 'all .15s ease-out',
        },
        '&:hover': desktop && {
          '&:after': {
            width: '100%',
            marginLeft: 0,
          },
        },
      }}
    >
      <Link
        href={`#${item}`}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textDecoration: 'none',
          textTransform: 'uppercase',
          padding: ['15px 0', '20px 0'],
          color: 'black',
          backgroundColor: 'white',
          '&:hover': {
            color: ['white', 'black'],
            backgroundColor: ['primary', 'white'],
          },
        }}
      >
        {item}
      </Link>
    </Box>
  ));
};

NavbarItems.defaultProps = {
  desktop: false,
};

NavbarItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default NavbarItems;
