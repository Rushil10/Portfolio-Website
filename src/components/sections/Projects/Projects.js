import React from 'react';
import { projects } from '../../../data/projects';
import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-wrap">
        <div className="projects-header fade-up delay-1">
          <h1 className="section-title">
            My <span className="accent">Projects</span>
          </h1>
          <p className="section-sub">
            Things I've built — most born from real problems I've faced.
          </p>
        </div>

        <div className="projects-grid fade-up delay-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
