import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <h1>Hi, my name is</h1>
      <h2>Abdul Matheen.</h2>
      <h3>I build secure digital experiences.</h3>
      <p>
        I'm a <span className="highlight">Software Developer Intern</span> with a deep passion for cybersecurity. I specialize in building secure full-stack applications and analyzing systems for vulnerabilities to make the digital world a safer place.
      </p>
      <a href="mailto:abdmath05@gmail.com" className="btn">
        Get In Touch
      </a>
    </section>
  );
};

export default Hero;