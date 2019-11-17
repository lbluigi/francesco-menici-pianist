import React from 'react';
import { Image } from 'rebass';

export default ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    sx={{
      objectFit: 'cover',
      objectPosition: 'center',
      marginTop: '20px',
      height: '200px',
      width: '100%',
      '@media screen and (min-width: 576px)': {
        height: '350px',
        marginTop: '50px',
      },
      '@media screen and (min-width: 768px)': {
        height: '450px',
      },
      '@media screen and (min-width: 992px)': {
        height: '550px',
      },
      '@media screen and (min-width: 1125px)': {
        height: '650px',
      },
    }}
  />
);