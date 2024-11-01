import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Envelope, Github, Instagram, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <footer id="contact" className="footer bg-dark text-white py-4">
      <div className="ftcontainer text-center">
        <h3>Contact Me</h3>
        <p>Email: aadityasharma08072004@gmail.com</p>
        <div className="social-links">
            <a href="mailto:aadityasharma08072004@gmail.com" className="text-white mx-2">
            <Envelope size={30} /></a>
            <a href="https://github.com/Aaditya0807" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <Github size={30} />
            </a>
            <a href="https://instagram.com/just_aadityasharma" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <Instagram size={30} />
            </a>
            <a href="https://linkedin.com/in/aaditya-sharma-60b9a9309" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <Linkedin size={30} />
            </a>
        </div>
        <p className="mt-3">Created by Aaditya Sharma</p>
      </div>
    </footer>
  );
};

export default Footer;
