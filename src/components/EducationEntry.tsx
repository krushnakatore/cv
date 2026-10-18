import React from 'react';
import { Education } from '../data/portfolioData';
import { ui } from '../styles/ui';

interface EducationEntryProps {
  education: Education;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ education }) => {
  return (
    <div className="space-y-1 font-mono">
      <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">{education.school}</h3>
        <p className={`shrink-0 text-sm tabular-nums ${ui.subtext}`}>{education.years}</p>
      </div>
      <p className={`font-mono text-sm leading-none ${ui.subtext}`}>
        {education.degree}
      </p>
    </div>
  );
};

export default EducationEntry;