import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Project = ({ title, videoSrc, liveLink, repoLink }) => {
  return (
    <div className="project-card">
      <div className="video-container">
        <video width="600" controls>
          <source src= {videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;