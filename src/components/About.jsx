import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a dedicated and detail-oriented developer, currently gaining hands-on experience as a Software Developer Intern at AiTesta[cite: 14, 15]. My work involves developing full-stack enterprise solutions using React, Flask, and PostgreSQL, with a strong focus on security best practices like secure authentication and role-based access control[cite: 16, 17].
          </p>
          <p>
            As a final-year Computer Science student at Lords Institute of Engineering and Technology (affiliated with Osmania University), my academic journey is centered around cybersecurity, networking, and cryptography[cite: 4, 5, 6, 7]. I am driven by the challenge of solving complex problems and am passionate about applying my skills in threat modeling, penetration testing, and risk assessment to create robust and resilient systems.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src={profilePic} alt="Abdul Matheen" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;