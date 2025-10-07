import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" style={{ justifyContent: 'center' }}>Get In Touch</h2>
      <p>
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <a href="mailto:abdmath05@gmail.com" className="btn">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;