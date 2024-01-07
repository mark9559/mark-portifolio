// components/Projects/Projects.js

import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      thumbnail: 'URL to thumbnail image',
      description: 'Brief description of the project...',
      demoLink: 'URL to demo',
      githubLink: 'URL to GitHub',
    },
    {
      id: 2,
      title: 'Project 2',
      thumbnail: 'URL to thumbnail image',
      description: 'Brief description of the project...',
      demoLink: 'URL to demo',
      githubLink: 'URL to GitHub',
    },
    {
      id: 3,
      title: 'Project 3',
      thumbnail: 'URL to thumbnail image',
      description: 'Brief description of the project...',
      demoLink: 'URL to demo',
      githubLink: 'URL to GitHub',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
