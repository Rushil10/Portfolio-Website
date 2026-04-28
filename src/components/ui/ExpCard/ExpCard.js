import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ExpCard.css';

function ExpCard({ item, isLast }) {
  const { company, role, term, note, description, bullets, tags, link } = item;

  return (
    <div className={`exp-item${isLast ? ' last' : ''}`}>
      <div className="exp-timeline">
        <div className="exp-dot" />
        {!isLast && <div className="exp-line" />}
      </div>

      <div className="exp-card">
        <div className="exp-card-header">
          <div>
            <h3 className="exp-role">{role}</h3>
            <div className="exp-company">
              {company}
              {link && (
                <a href={link} target="_blank" rel="noreferrer" className="exp-link" aria-label="link">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
            {note && <div className="exp-note">{note}</div>}
          </div>
          <span className="exp-term">{term}</span>
        </div>

        {bullets && bullets.length > 0 ? (
          <ul className="exp-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        ) : (
          description && <p className="exp-desc">{description}</p>
        )}

        <div className="exp-tags">
          {tags && tags.map((tag, i) => (
            <span key={i} className="exp-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
