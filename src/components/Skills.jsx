import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Cybersecurity & Risk Management</h3>
          <ul>
            <li>Vulnerability Assessment</li>
            <li>Penetration Testing</li>
            <li>Ethical Hacking</li>
            <li>Threat Modeling</li>
            <li>Incident Response</li>
            <li>Risk Assessment</li>
            <li>ISO 27001 / NIST CSF</li>
            <li>GDPR / SOC 2</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Security Tools & Frameworks</h3>
          <ul>
            <li>Nmap / Wireshark</li>
            <li>Burp Suite</li>
            <li>Metasploit</li>
            <li>Nessus / OpenVAS</li>
            <li>Kali Linux</li>
            <li>OSINT Tools</li>
            <li>OWASP Top 10</li>
            <li>Shodan / VirusTotal</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Programming & Platforms</h3>
          <ul>
            <li>Python (Flask)</li>
            <li>JavaScript (React)</li>
            <li>HTML / CSS</li>
            <li>Bash Scripting</li>
            <li>SQL (PostgreSQL)</li>
            <li>AWS (IAM, S3, VPC)</li>
            <li>Azure Security Center</li>
            <li>GitHub Actions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;