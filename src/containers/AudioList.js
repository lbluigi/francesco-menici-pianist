import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioList = ({ audioList }) => {
  // console.log(audioList);
  // return <p>Audio list</p>;
  console.log(audioList)
  return audioList.map(audio => (
    <>
      <p>{audio.title}</p>
      <AudioPlayer
        key={audio.id}
        src={audio.file.url}
        onPlay={e => console.log("onPlay")}
      />
    </>
  ))
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
