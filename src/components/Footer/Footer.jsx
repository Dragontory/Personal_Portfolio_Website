import React from 'react';
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {

  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="mailto:yang.6485@osu.edu"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="tel:+2166505526"><FontAwesomeIcon icon={faPhone} /></a>
        <a href="https://www.instagram.com/tryyng/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/toryyang/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/Dragontory" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">Home </a>
          <a href="./#about">About </a>
          <a href="./#work">Experience </a>
          <a href="./#contact">Contact </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Blog (Coming Soon) </a>
        </p>
        <p className = "link-2" >Phone: <a href="./#contact">Contact</a></p>
        <p className = "link-2" >Email: <a href="mailto:toryyang03@gmail.com">toryyang03@gmail.com</a></p>
        <p>Tory Yang 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

