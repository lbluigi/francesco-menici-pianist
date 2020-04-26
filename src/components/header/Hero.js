import React from 'react';
import { Image } from 'rebass';
import PropTypes from 'prop-types';

const Hero = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    sx={{
      objectFit: 'cover',
      objectPosition: 'center',
      marginTop: ['20px', '50px'],
      height: ['200px', '350px', '450px', '550px', '650px'],
      width: '100%',
    }}
  />
);

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;
