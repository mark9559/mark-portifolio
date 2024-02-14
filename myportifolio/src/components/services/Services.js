import React from 'react';
import './services.css'; // Import your custom styles if needed
import { Button } from 'flowbite-react';


const Services = () => {
  return (
    <div className="services-container">
      <h1 className="section-title">Skills</h1>
      <div className="cards-container">
        {/* Service Card 1 */}
        <div className="service-card">
          <h2 className='mb-5'>FrontEnd Technologies</h2>
          <div className="chips-container ">
          <Button color="dark"  pill>HTML</Button>
          <Button color="dark"  pill>CSS</Button>
          <Button color="dark"  pill>JavaScript</Button>
          <Button color="dark"  pill>React.js</Button>
          <Button color="dark"  pill>BootStrap</Button>
          <Button color="dark"  pill>Tailwind</Button>


          </div>
              
            
        </div>

        {/* Service Card 2 */}
        <div className="service-card">
          <h2 className='mb-5' >BackEnd Technologies</h2>
          <div className="chips-container">
          <Button color="dark"  pill>Python</Button>
          <Button color="dark"  pill>Flask</Button>
          <Button color="dark"  pill>Node.js</Button>
          <Button color="dark"  pill>JSON</Button>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="service-card">
          <h2 className='mb-5'>Tools and Databases</h2>
          <div className="chips-container">
          <Button color="dark"  pill>SQL</Button>
          <Button color="dark"  pill>Postgres</Button>
          <Button color="dark"  pill>Git</Button>
          <Button color="dark"  pill>GitHub</Button>
          <Button color="dark"  pill>Figma</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
