import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        
        <div className="project-card">
          <div>
            <h3>AI Malware Detection & Analysis System</h3>
            <p>An AI-powered system that analyzes Windows .exe files using static PE features and machine learning (Random Forest, XGBoost). Trained on over 600,000 samples from the EMBER dataset to achieve over 96% accuracy.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/abdmath/ai-malware-detector" target="_blank" rel="noopener noreferrer">View Project Repo</a>
          </div>
        </div>

        <div className="project-card">
          <div>
            <h3>Security Risk Assessment Dashboard</h3>
            <p>A full-stack web app to assess and visualize organizational cybersecurity risk based on NIST CSF and ISO 27001 frameworks. Features dynamic radar and heat map visualizations of controls and threats.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/abdmath/Security-Risk-Assessment-Dashboard" target="_blank" rel="noopener noreferrer">View Project Repo</a>
          </div>
        </div>

        <div className="project-card">
          <div>
            <h3>Enterprise Testing Dashboard</h3>
            <p>As part of my internship, I contributed to a secure, full-stack dashboard for performance and stress testing, implementing key features like RBAC and secure authentication to protect sensitive testing data and infrastructure.</p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Projects;