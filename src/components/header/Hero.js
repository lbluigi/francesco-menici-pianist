import React from 'react';
import { Image } from 'theme-ui';
import PropTypes from 'prop-types';

const Hero = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    marginTop={['20px', '50px']}
    width="100%"
    sx={{
      display: 'block',
      objectFit: 'cover',
      objectPosition: 'center',
      height: ['200px', '350px', '450px', '550px', '650px'],
    }}
  />
);

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;
