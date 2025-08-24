import React from 'react';
import { Experience } from '../data/portfolioData';

interface ExperienceEntryProps {
  job: Experience;
  themeClasses: { [key: string]: string };
}

const ExperienceEntry = ({ job, themeClasses }: ExperienceEntryProps) => {
    return (
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold font-mono">{job.role}</h3>
          <p className={`text-sm tabular-nums font-mono ${themeClasses.subtext}`}>{job.years}</p>
        </div>
        <p className={`font-mono text-sm leading-none font-bold underline ${themeClasses.subtext}`}>
        {job.company}
        </p>
        <ul className={`list-disc pl-4 space-y-1 text-sm font-mono ${themeClasses.subtext}`}>
          {job?.description?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 mt-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className={`bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-mono font-medium dark:bg-gray-300 dark:text-gray-900 `}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

export default ExperienceEntry;