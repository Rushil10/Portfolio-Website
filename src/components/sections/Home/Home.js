import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { personal } from '../../../data/personal';
import './Home.css';

function Home() {
  const downloadResume = () => {
    fetch(personal.resume)
      .then(r => r.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a   = document.createElement('a');
        a.href     = url;
        a.download = personal.resume;
        a.click();
      });
  };

  return (
    <div className="home">
      <div className="home-bg-glow" />
      <div className="home-grid-dots" />

      <div className="home-content">
        <p className="home-greeting fade-up delay-1">{personal.greeting}</p>

        <h1 className="home-name fade-up delay-2">{personal.name}</h1>

        <div className="home-typewriter fade-up delay-3">
          <span className="typewriter-prefix">I'm a&nbsp;</span>
          <Typewriter
            options={{
              strings:   personal.roles,
              autoStart: true,
              loop:      true,
            }}
          />
        </div>

        <div className="home-socials fade-up delay-4">
          <a href={personal.social.github}    target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personal.social.linkedin}  target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={personal.social.twitter}   target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href={personal.social.instagram} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={`mailto:${personal.social.email}`} className="social-icon" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <button className="home-cta fade-up delay-5" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
