import React from 'react';
import Project from '../components/Project';

const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description of project one.',
    image: '/images/project1.png',
    deployedLink: 'https://example.com/project1',
    repoLink: 'https://github.com/username/project1',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description of project two.',
    image: '/images/project2.png',
    deployedLink: 'https://example.com/project2',
    repoLink: 'https://github.com/username/project2',
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;