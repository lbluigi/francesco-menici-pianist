import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Image } from 'theme-ui';
import 'react-h5-audio-player/lib/styles.css';

const ProjectItem = ({ title, description, fileUrl }) => {
  return (
    <Box
      as="figure"
      mx={['0', '10px', '20px']}
      mb="40px"
      sx={{
        width: ['100%', '45%', '35%'],
        '&:hover': {
          p: {
            opacity: 1,
          }
        }
      }}
    >
      <Flex 
        mb="20px"
        sx={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={fileUrl} alt={title} />
        <Flex
          as="p"
          bg="rgba(0,0,0,.85)"
          color="background"
          p="3"
          sx={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            opacity: 0,
            transition: 'opacity 0.35s ease-in-out',
          }}
        >
          {description}
        </Flex>
      </Flex>

      <Box
        as="figcaption"
        sx={{
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {title}
      </Box>
    </Box>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fileUrl: PropTypes.string,
};

export default ProjectItem;
