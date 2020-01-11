import React from 'react';
import { Box, Heading } from 'rebass';

export default ({ type, title, backgroundColor, children }) => {
  return (
    <Box
      as={type}
      backgroundColor={backgroundColor}
      padding="30px 0"
      width="90%"
      margin="0 auto"
    >
      <Heading
        as="h3"
        fontSize="25px"
        padding="45px 0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '10px',
            height: '1px',
            backgroundColor: 'black',
            marginRight: '10px',
          },
          '&:after': {
            content: '""',
            display: 'inline-block',
            width: '10px',
            height: '1px',
            backgroundColor: 'black',
            marginLeft: '10px',
          }
        }}
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
};
