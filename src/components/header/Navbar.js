import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Box, Link } from 'rebass';

export default ({ items }) => {
  const [navbarVisible, setNavbarVisible] = useState(false)

  const listItems = items.map(item => (
    <Box 
      key={item}
      as="li" 
      sx={{ width: '100%', }}
    >
      <Link
        href={`#${item}`}
        variant="navLink"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textDecoration: 'none',
          textTransform: 'uppercase',
          padding: '15px 0',
        }}
      >
        {item}
      </Link>
    </Box>
  ))

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible)
  }

  return (
    <>
      <Box
        fontWeight="semibold"
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
          margin: '50px 0 10px',
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
        { navbarVisible ?
          <Box
            key="navbar"
            as="ul" 
            variant="navbar"
            sx={{
              listStyleType: 'none',
              padding: 0,
            }}
          >
            {listItems}
          </Box> : null
        }
      </ReactCSSTransitionGroup>
    </>
  )
};
