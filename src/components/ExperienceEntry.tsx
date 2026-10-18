import React from 'react';
import { Experience } from '../data/portfolioData';
import { ui } from '../styles/ui';

interface ExperienceEntryProps {
  job: Experience;
}

const ExperienceEntry = ({ job }: ExperienceEntryProps) => {
    return (
      <div className="space-y-2">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold font-mono">{job.role}</h3>
          <p className={`shrink-0 text-sm tabular-nums font-mono ${ui.subtext}`}>{job.years}</p>
        </div>
        <p className={`font-mono text-sm leading-none font-bold underline ${ui.subtext}`}>
        {job.company}
        </p>
        <ul className={`list-disc pl-4 space-y-1 text-sm font-mono ${ui.subtext}`}>
          {job?.description?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 mt-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className={`${ui.chip} px-2 py-0.5 rounded-full text-xs font-mono font-medium`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

export default ExperienceEntry;