import React from 'react'
import { Box } from 'rebass';
import NavbarItems from './NavbarItems';

export default ({ items }) => {
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
  )
};
