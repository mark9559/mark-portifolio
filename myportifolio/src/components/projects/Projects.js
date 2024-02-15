import React from 'react';
import './projects.css';
import { Button } from 'flowbite-react';


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
    <div className="projects-container py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 mt-10 text-purple-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="projects-card rounded-lg overflow-hidden shadow-lg mb-8">
              <img className="w-full h-40 object-cover" src={project.thumbnail} alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Button color="purple" pill>
                    Demo
                  </Button>
                  <Button color="purple" pill>
                    Github
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
