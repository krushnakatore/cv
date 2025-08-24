import React from 'react';
import { Education } from '../data/portfolioData';

interface EducationEntryProps {
  education: Education;
  themeClasses: { [key: string]: string };
}

const EducationEntry: React.FC<EducationEntryProps> = ({ education, themeClasses }) => {
  return (
    <div className="space-y-1 font-mono">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">{education.school}</h3>
        <p className={`text-sm tabular-nums ${themeClasses.subtext}`}>{education.years}</p>
      </div>
      <p className={`font-mono text-sm leading-none ${themeClasses.subtext}`}>
        {education.degree}
      </p>
    </div>
  );
};

export default EducationEntry;