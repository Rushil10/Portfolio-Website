import React from 'react';
import { experience } from '../../../data/experience';
import ExpCard from '../../ui/ExpCard/ExpCard';
import './Experience.css';

function Experience() {
  return (
    <div className="exp-page">
      <div className="exp-wrap">
        <div className="exp-header fade-up delay-1">
          <h1 className="section-title">
            Work <span className="accent">Experience</span>
          </h1>
          <p className="section-sub">
            Internships and roles I've held along the way.
          </p>
        </div>

        <div className="exp-list fade-up delay-2">
          {experience.map((item, i) => (
            <ExpCard key={i} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
