import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './welcomepage.css';

const WelcomePage = ({ history }) => {
  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation sequence
    tl.from('.welcome-text', { opacity: 0, duration: 1.5, y: -50 })
      .to('.welcome-text', { opacity: 0, duration: 1, delay: 1 })
      .to('.welcome-page', { scaleY: 0, transformOrigin: 'top', duration: 1, ease: 'power3.inOut' })
      .from('.portfolio-text', { opacity: 0, duration: 1, y: -20, stagger: 0.5, delay: 0.5 })
      .to('.portfolio-text', { opacity: 0, duration: 1, delay: 2 })
      .to('.welcome-page', { scaleY: 1, transformOrigin: 'top', duration: 1, onComplete: () => history.push('/') });

  }, [history]);

  return (
    <div className="welcome-page">
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
      
    </div>
  );
};

export default WelcomePage;
