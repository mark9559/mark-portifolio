import React,{ useEffect } from 'react';
import './projects.css';
import { Button } from 'flowbite-react';
import 'aos/dist/aos.css';
import AOS from 'aos';


// Importing local images
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';


const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Kicks Buzz Sneaker Shop',
      thumbnail: thumbnail1,
      description: 'This is a simple Sneaker Shop Management System built with HTML, CSS, and JavaScript.',
      demoLink: 'https://mark9559.github.io/Phase-1-Project/#',
      githubLink: 'https://github.com/mark9559/Phase-1-Project',
    },
    {
      id: 2,
      title: 'Kicks Buzz Sneaker Shop - React',
      thumbnail: thumbnail2,
      description: 'A Sneaker Shop Management System built with React Js.',
      demoLink: 'https://654d65d70abc781129583b3c--meek-kataifi-39d1af.netlify.app/',
      githubLink: 'https://github.com/mark9559/Phase-2-Project',
    },
    {
      id: 3,
      title: 'Boma Homes Ltd',
      thumbnail: thumbnail3,
      description: 'This is a Full-Stack Real Estate Management System built using React JS for the front-end and Flask(Python), for the back-end.',
      demoLink: 'https://joyful-mandazi-6ea363.netlify.app/',
      githubLink: 'https://github.com/mark9559/Phase-4-group-project-Boma-',
    },
    {
      id: 4,
      title: 'Portfolio',
      thumbnail: thumbnail4,
      description: 'This is my portfolio template built using React Js and Tailwind.',
      demoLink: 'https://github.com/mark9559/mark-portifolio',
      githubLink: 'https://github.com/mark9559/mark-portifolio',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="projects-container py-16" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 mt-10 text-purple-600" data-aos="fade-up">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="projects-card rounded-lg overflow-hidden shadow-lg mb-8 hover:scale-105 transition-transform" data-aos="fade-up">
              <img className="w-full h-50 object-cover transition-transform duration-300 transform group-hover:scale-105" src={project.thumbnail} alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" data-aos="fade-up">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button color="purple" data-aos="fade-up" pill>
                      Demo
                    </Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button color="purple" data-aos="fade-up" pill>
                      Github
                    </Button>
                  </a>
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
