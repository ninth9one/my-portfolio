import React from 'react';
import Project from '../components/Project';
import '../App.css';



const Portfolio = () => {
  const projects = [
    {
      title: "ReadMe Generator",
      videoSrc: "/videos/readMeGenerator.mp4", 
      //liveLink: "",
      repoLink: "https://github.com/ninth9one/README-generator",
    },
    {
      title: "Vehicle Builder",
      videoSrc: "/videos/vehicle-builder.mp4",
      //liveLink: "",
      repoLink: "https://github.com/ninth9one/vehicle-builder",
    },
    {
      title: "Weather Dashboard (WIP)",
      //videoSrc: "",
      //liveLink: "",
      repoLink: "https://github.com/ninth9one/weather-api",
    },
    {
      title: "Employee Tracker",
      videoSrc: "/videos/employee-tracker.mp4",
      //liveLink: "",
      repoLink: "https://github.com/ninth9one/employee-tracker",
    },
    /*{
      title: "Project Five",
      videoSrc: "/videos/project5.mp4",
      liveLink: "https://deployedapp5.example.com",
      repoLink: "https://github.com/username/project5",
    },
    {
      title: "Project Six",
      videoSrc: "/videos/project6.mp4",
      liveLink: "https://deployedapp6.example.com",
      repoLink: "https://github.com/username/project6",
    }, */
  ];

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoSrc={project.videoSrc}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
