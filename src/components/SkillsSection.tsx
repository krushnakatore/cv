import React from 'react';
import { Skills } from '../data/portfolioData';
import { ui } from '../styles/ui';

interface SkillsSectionProps {
  skillsData: Skills;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData }) => {
  const renderSkills = (title: string, skills:string[]) => (
    <div>
      <h4 className={`text-md font-semibold font-mono ${ui.subtext} mb-2`}>{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`${ui.chip} inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono transition-colors duration-300 hover:bg-cyan-600 hover:text-white`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {renderSkills('Frontend', skillsData.frontend)}
      {renderSkills('Backend', skillsData.backend)}
      {renderSkills('AI & Agents', skillsData.ai)}
      {renderSkills('Databases', skillsData.databases)}
      {renderSkills('Tools & Cloud', skillsData.tools)}
    </div>
  );
};

export default SkillsSection;

