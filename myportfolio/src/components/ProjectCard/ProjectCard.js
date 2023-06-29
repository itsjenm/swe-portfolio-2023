import React from 'react';

const ProjectCard = ({ title, description, technologies, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
