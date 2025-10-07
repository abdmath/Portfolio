import React from 'react';
import './Navbar.css';
import resumePdf from '../assets/resume.pdf'; // 1. Import the PDF file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          {/* 2. Use the imported variable in the href */}
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-nav">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;