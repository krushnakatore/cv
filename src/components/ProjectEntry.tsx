import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectEntryProps {
  project: Project;
  themeClasses: { [key: string]: string };
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ project, themeClasses }) => {
  return (
    <div className={`${themeClasses.card} font-mono p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <div className="flex space-x-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 ${themeClasses.link} text-sm transition-colors`}
          >
            <Github size={12} />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 ${themeClasses.link} text-sm transition-colors`}
          >
            <ExternalLink size={12} />
            <span>Live</span>
          </a>
        </div>
      </div>
      <p className={`${themeClasses.subtext} text-sm mb-4`}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-medium dark:bg-gray-300 dark:text-gray-900 `}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectEntry;