import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioList = ({ audioList }) => {
  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {audioList.map(audio => (
        <Box
          key={audio.id}
          marginBottom="15px"
          width={['100%', '100%', '49%']}
          sx={{
            '.rhap_container': {
              backgroundColor: 'secondary',
              padding: '15px',
            },
            '.rhap_progress-indicator, .rhap_progress-filled, .rhap_volume-indicator': {
              backgroundColor: 'primary',
            },
            '.rhap_download-progress': {
              backgroundColor: '#4d4d4d',
            },
            p: {
              margin: 0,
            },
            '*': {
              color: 'white',
            },
          }}
        >
          <AudioPlayer
            as={AudioPlayer}
            showJumpControls={false}
            showSkipControls={false}
            customAdditionalControls={[]}
            layout="horizontal"
            header={<p>{audio.title}</p>}
            src={audio.file.url}
          />
        </Box>
      ))}
    </Box>
  );
};

AudioList.propTypes = {
  audioList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default AudioList;
