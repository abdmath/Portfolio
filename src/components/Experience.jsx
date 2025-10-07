import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="experience-card">
        <h3>Software Developer Intern at <span>AiTesta</span></h3>
        <p className="date">Aug 2025 - Present</p>
        <ul>
          [cite_start]<li>Developing a full-stack enterprise dashboard for software testing platforms (similar to JMeter Workbench) using React, Flask, and PostgreSQL. [cite: 16]</li>
          [cite_start]<li>Built secure authentication and role-based access control, ensuring compliance with industry security best practices. [cite: 17]</li>
          [cite_start]<li>Collaborated with a cross-functional team to deliver a scalable, cloud-ready platform for performance and stress testing. [cite: 18]</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;