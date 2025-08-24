import React from 'react';
import { Skills } from '../data/portfolioData';

interface SkillsSectionProps {
  skillsData: Skills;
  themeClasses: { [key: string]: string };
}

// const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData, themeClasses }) => {
//   const renderSkills = (title: string, skills: string[]) => (
//     <div>
//       <h4 className={`text-md font-semibold ${themeClasses.subtext} font-mono mb-2`}>{title}</h4>
//       <div className="flex flex-wrap gap-2">
//         {skills.map((skill, index) => (
//           <span
//             key={index}
//             className={`bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-medium dark:bg-gray-300 dark:text-gray-900 `}
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-4">
//       {renderSkills('Frontend', skillsData.frontend)}
//       {renderSkills('Backend', skillsData.backend)}
//       {renderSkills('Databases', skillsData.databases)}
//       {renderSkills('Tools', skillsData.tools)}
//     </div>
//   );
// };

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData, themeClasses }) => {
  const renderSkills = (title: string, skills: any) => (
    <div>
      <h4 className={`text-md font-semibold font-mono ${themeClasses.subtext} mb-2`}>{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`
              group relative overflow-hidden inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono
              bg-gray-700 text-white ring-1 ring-inset ring-gray-600 shadow-md transition-all duration-300 ease-in-out
              hover:bg-cyan-600 hover:ring-cyan-500 hover:scale-105
              dark:bg-gray-300 dark:text-gray-900 dark:ring-gray-400
              dark:hover:bg-cyan-400 dark:hover:text-white dark:hover:ring-cyan-300
            `}
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
      {renderSkills('Databases', skillsData.databases)}
      {renderSkills('Tools', skillsData.tools)}
    </div>
  );
};

export default SkillsSection;

