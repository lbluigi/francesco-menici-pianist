import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'theme-ui';
import 'react-h5-audio-player/lib/styles.css';
import ProjectItem from '../components/projects/ProjectItem';

const ProjectsGrid = ({ projectsGrid }) => {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {projectsGrid.map(project => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          fileUrl={project.file.url}
        />
      ))}
    </Flex>
  );
};

ProjectsGrid.propTypes = {
  projectsGrid: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default ProjectsGrid;
