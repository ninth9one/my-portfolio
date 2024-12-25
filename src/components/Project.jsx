import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, description, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
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
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;