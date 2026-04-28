import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { personal } from '../../../data/personal';
import './Contact.css';

const LINKS = [
  {
    icon:  <FaEnvelope />,
    label: "Email",
    value: personal.social.email,
    href:  `mailto:${personal.social.email}`,
  },
  {
    icon:  <FaLinkedinIn />,
    label: "LinkedIn",
    value: "linkedin.com/in/rushil10shah",
    href:  personal.social.linkedin,
  },
  {
    icon:  <FaGithub />,
    label: "GitHub",
    value: "github.com/Rushil10",
    href:  personal.social.github,
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-wrap">
        <div className="contact-header fade-up delay-1">
          <h1 className="section-title">
            Let's <span className="accent">Connect</span>
          </h1>
          <p className="contact-bio">
            Have a project in mind, a question, or just want to say hi?
            Reach out — I'm always happy to chat.
          </p>
        </div>

        <div className="contact-cards fade-up delay-2">
          {LINKS.map(({ icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="contact-card">
              <div className="contact-card-icon">{icon}</div>
              <div className="contact-card-text">
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
