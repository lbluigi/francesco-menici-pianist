import React from 'react'
import { Box, Link } from 'rebass';
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
        // 'li': {
        //   '&:after': {
        //     content: '""',
        //     display: 'block',
        //     width: 0,
        //     height: '2px',
        //     backgroundColor: 'primary',
        //     marginLeft: '50%',
        //     transition: 'all .15s ease-out',
        //   },
        //   '&:hover': {
        //     '&:after': {
        //       width: '100%',
        //       marginLeft: 0,
        //     }
        //   }
        // }
      }}
    >
      <NavbarItems items={items} desktop />
    </Box>
  )
};
