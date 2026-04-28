import React from 'react';
import { Link } from 'react-router-dom';
import { skills } from '../../../data/skills';
import { personal } from '../../../data/personal';
import me from '../../../images/me.jpg';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-wrap">
        <div className="about-grid">

          <div className="about-left fade-up delay-1">
            <div className="about-photo-wrap">
              <img src={me} alt="Rushil Shah" className="about-photo" />
              <div className="about-photo-glow" />
            </div>

            <h1 className="section-title" style={{ marginTop: '2rem' }}>
              About <span className="accent">Me</span>
            </h1>
            <p className="about-bio">{personal.bio}</p>

            <ul className="about-list">
              {personal.about.map((item, i) => (
                <li key={i} className="about-list-item">
                  <span className="about-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-right fade-up delay-2">
            <h2 className="section-title">
              Technical <span className="accent">Skills</span>
            </h2>
            <p className="about-skills-sub">Technologies I've worked with</p>

            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <button className="about-cta">Get In Touch</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
