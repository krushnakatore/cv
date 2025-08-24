import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, Download, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import SectionWithAnimation from '../components/SectionWithAnimation';
import ExperienceEntry from '../components/ExperienceEntry';
import ProjectEntry from '../components/ProjectEntry';
import EducationEntry from '../components/EducationEntry';
import SkillsSection from '../components/SkillsSection';
import { projectsData, experienceData, educationData, skillsData, certificationsData } from '../data/portfolioData';
import { CertificationsEntry } from '@/components/CertificationsEntry';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeClasses = {
    container: theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
    card: theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900',
    heading: theme === 'dark' ? 'text-white' : 'text-gray-900',
    subtext: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    link: theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500',
    button: theme === 'dark' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-blue-600 hover:bg-blue-700',
    formInput: theme === 'dark' ? 'bg-gray-700 text-white focus:ring-cyan-500' : 'bg-gray-200 text-gray-900 focus:ring-blue-500',
    border: theme === 'dark' ? 'border-gray-700' : 'border-gray-300',
    sectionBorder: theme === 'dark' ? 'border-gray-700' : 'border-gray-300',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <div className={`${themeClasses.container} min-h-screen font-mono transition-colors duration-500`}>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        toggleTheme={toggleTheme}
        theme={theme}
        themeClasses={themeClasses}
      />
      <main className="container relative mx-auto overflow-auto p-4 md:p-16">
        <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">
          <SectionWithAnimation themeClasses={themeClasses}>
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-1.5">
                <h1 className={`text-2xl font-bold ${themeClasses.heading}`}>Krushna Katore</h1>
                <p className={`max-w-md text-pretty font-mono text-sm ${themeClasses.subtext}`}>
                  Software Engineer
                </p>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                <a href="https://surl.li/nfhauy" target="_blank" rel="noopener noreferrer" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <MapPin size={12} />
                   Pune, Maharashtra.
                  </a>
                  </div>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                  <a href="mailto:krushnakatore88@gmail.com" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <Mail size={12} />
                    krushnakatore88
                  </a>
                </div>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                  <a href="tel:+1234567890" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <Phone size={12} />
                    +917798854401
                  </a>
                </div>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                  <a href="https://www.linkedin.com/in/krushna-katore-0915a0358/" target="_blank" rel="noopener noreferrer" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <Linkedin size={12} />
                    linkedin.com/in/krushnakatore
                  </a>
                </div>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                  <a href="https://github.com/krushnakatore" target="_blank" rel="noopener noreferrer" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <Github size={12} />
                    github.com/krushnakatore
                  </a>
                </div>
                <div className="flex gap-x-1 pt-1 font-mono text-sm">
                  <a href="https://drive.google.com/file/d/1znV5E1kW_Zl-tK0yLC3cnwkQIOsV_qNW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`${themeClasses.link} flex items-center gap-x-1`}>
                    <Download size={12} />
                     Resume
                  </a>
                </div>
                
              </div>
              <img
                src="/pp1.jpg"
                alt="Profile picture"
                className="size-50 rounded-full object-cover"
              />
            </div>
          </SectionWithAnimation>

          <SectionWithAnimation id="about" title="About" themeClasses={themeClasses}>
            <p className={`text-pretty font-mono text-sm ${themeClasses.subtext}`}>
              I'm a Senior Software Engineer who loves diving into challenging problems and building strong, scalable solutions. 
              I'm always looking to learn and improve my skills, and I find a lot of satisfaction in helping my team members grow. 
              I'm driven to not only solve technical issues but also to make sure the work we do contributes to the bigger picture.
            </p>
          </SectionWithAnimation>

          <SectionWithAnimation id="experience" title="Experience" themeClasses={themeClasses}>
            {experienceData.map((job, index) => (
              <ExperienceEntry key={index} job={job} themeClasses={themeClasses} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="projects" title="Projects" themeClasses={themeClasses}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {projectsData.map((project, index) => (
                <ProjectEntry key={index} project={project} themeClasses={themeClasses} />
              ))}
            </div>
          </SectionWithAnimation>

          <SectionWithAnimation id="education" title="Education" themeClasses={themeClasses}>
            {educationData.map((education, index) => (
              <EducationEntry key={index} education={education} themeClasses={themeClasses} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="certifications" title="Certifications" themeClasses={themeClasses}>
            {certificationsData.map((certification, index) => (
              <CertificationsEntry key={index} certification={certification} themeClasses={themeClasses} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="skills" title="Skills" themeClasses={themeClasses}>
            <SkillsSection skillsData={skillsData} themeClasses={themeClasses} />
          </SectionWithAnimation>
        </section>
      </main>
    </div>
  );
}