import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ data }) {
  const { title, date, image, achievements, description, tags, link, gitLink } = data;

  return (
    <div className="project-card">
      <div className="card-image-wrap">
        {image && <img src={image} alt={title} className="card-image" />}
        <div className="card-image-overlay" />
        {achievements && achievements.map((a, i) => (
          <span key={i} className="card-badge">{a}</span>
        ))}
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className="card-date">{date}</span>
        </div>

        <p className="card-desc">{description}</p>

        <div className="card-tags">
          {tags && tags.map((tag, i) => (
            <span key={i} className="card-tag">{tag}</span>
          ))}
        </div>

        <div className="card-links">
          {gitLink && (
            <a href={gitLink} target="_blank" rel="noreferrer" className="card-link" aria-label="GitHub">
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="card-link card-link-live" aria-label="Live">
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
