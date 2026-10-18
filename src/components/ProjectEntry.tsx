import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ui } from '../styles/ui';

interface ProjectEntryProps {
  project: Project;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ project }) => {
  const caseStudy = project.caseStudy;

  return (
    <div className={`${ui.card} ${ui.border} ${caseStudy ? 'sm:col-span-2' : ''} flex h-full flex-col border font-mono p-4 sm:p-6 rounded-xl shadow-lg transition-transform duration-300 md:hover:-translate-y-1`}>
      <div className="mb-2 flex flex-col gap-2">
        {project.tag && (
          <span className={`w-fit text-xs font-semibold uppercase tracking-wide ${ui.link}`}>{project.tag}</span>
        )}
        <h3 className="text-lg font-bold">{project.title}</h3>
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 ${ui.link} text-sm transition-colors`}
              >
                <Github size={12} />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 ${ui.link} text-sm transition-colors`}
              >
                <ExternalLink size={12} />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>
      <p className={`${ui.subtext} text-sm mb-4`}>{project.description}</p>
      {project.flow && (
        <ol aria-label="How it works" className="mb-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs">
          {project.flow.map((step, index) => (
            <li key={step} className="flex items-center gap-1.5">
              <span className={`rounded-md border ${ui.border} px-2 py-1 ${ui.heading}`}>{step}</span>
              {index < project.flow!.length - 1 && <ArrowRight size={12} className={ui.subtext} aria-hidden />}
            </li>
          ))}
        </ol>
      )}
      {caseStudy && (
        <dl className="mb-4 grid gap-3 text-sm md:grid-cols-3">
          {(['problem', 'design', 'result'] as const).map((key) => (
            <div key={key} className={`rounded-lg border ${ui.border} p-3`}>
              <dt className={`mb-1 text-xs font-bold uppercase tracking-wide ${ui.heading}`}>{key}</dt>
              <dd className={ui.subtext}>{caseStudy[key]}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`${ui.chip} px-2 py-0.5 rounded-full text-xs font-medium`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectEntry;
