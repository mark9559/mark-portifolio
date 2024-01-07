import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-top">
        <h2>Services</h2>
        <div className="service-cards">
        <div className="service-card">
            <h5 className="service-title">Frontend</h5>
            <div className="progress-circle">
              <div className="progress-circle-bg"></div>
              <div className="progress-circle-fill"></div>
              <span className="progress-label">65%</span>
            </div>
          </div>
          <div className="service-card">
            <h5 className="service-title">Backend</h5>
            <div className="progress-circle">
              <div className="progress-circle-bg"></div>
              <div className="progress-circle-fill"></div>
              <span className="progress-label">55%</span>
            </div>
          </div>
          <div className="service-card">
            <h5 className="service-title">UI/UX Design</h5>
            <div className="progress-circle">
              <div className="progress-circle-bg"></div>
              <div className="progress-circle-fill"></div>
              <span className="progress-label">75%</span>
            </div>
          </div>
          {/* Add similar cards for UI/UX design and Backend */}
        </div>
      </div>

      <div className="services-bottom">
        <div className="service-cards">
          <div className="service-card">
            <h5 className="service-title">Languages</h5>
            {/* Add content for languages */}
          </div>
          <div className="service-card">
            <h5 className="service-title">Frameworks and Libraries</h5>
            {/* Add content for frameworks and libraries */}
          </div>
          <div className="service-card">
            <h5 className="service-title">Tools and Databases</h5>
            {/* Add content for tools and libraries */}
          </div>
          {/* Add similar cards for frameworks/libraries and tools/databases */}
        </div>
      </div>
    </div>
  );
};

export default Services;
