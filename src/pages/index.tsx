import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Mail, Linkedin, Github, Phone, Download, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import SectionWithAnimation from '../components/SectionWithAnimation';
import ExperienceEntry from '../components/ExperienceEntry';
import ProjectEntry from '../components/ProjectEntry';
import EducationEntry from '../components/EducationEntry';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { ui } from '../styles/ui';
import { projectsData, experienceData, educationData, skillsData, certificationsData, achievementsData } from '../data/portfolioData';
import { CertificationsEntry } from '@/components/CertificationsEntry';

const SITE_URL = 'https://krushna-katore-portfolio.vercel.app';
const RESUME_URL = '/resume.pdf';

const META_TITLE = 'Krushna Katore | Software Engineer';
const META_DESCRIPTION = 'Software Engineer with 5+ years in full-stack development (React, Node.js, NestJS), building AI agents for incident response and engineering prioritization.';

// Structured data so search engines can show a proper profile result
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Krushna Katore',
  jobTitle: 'Software Engineer',
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  email: 'mailto:krushnakatore88@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  worksFor: { '@type': 'Organization', name: 'Calfus Pvt. Ltd.' },
  sameAs: ['https://www.linkedin.com/in/krushna-katore-0915a0358/', 'https://github.com/krushnakatore'],
  knowsAbout: ['React', 'Node.js', 'NestJS', 'TypeScript', 'Python', 'Apache Kafka', 'Temporal', 'GCP', 'AI agents'],
};

const contactLinks = [
  { href: 'https://maps.google.com/?q=Pune,+Maharashtra', icon: MapPin, label: 'Pune, Maharashtra', external: true },
  { href: 'mailto:krushnakatore88@gmail.com', icon: Mail, label: 'krushnakatore88@gmail.com', external: false },
  { href: 'tel:+917798854401', icon: Phone, label: '+91 7798854401', external: false },
  { href: 'https://www.linkedin.com/in/krushna-katore-0915a0358/', icon: Linkedin, label: 'linkedin.com/in/krushna-katore', external: true },
  { href: 'https://github.com/krushnakatore', icon: Github, label: 'github.com/krushnakatore', external: true },
  { href: RESUME_URL, icon: Download, label: 'Resume (PDF)', external: true },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // The initial theme is set before paint by the script in _document.tsx
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <>
    <Head>
      <title>{META_TITLE}</title>
      <meta name="description" content={META_DESCRIPTION} />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={META_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:image" content={`${SITE_URL}/og.jpg`} />
      <meta property="og:image:width" content="630" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Krushna Katore" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={META_TITLE} />
      <meta name="twitter:description" content={META_DESCRIPTION} />
      <meta name="twitter:image" content={`${SITE_URL}/og.jpg`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </Head>
    <div id="top" className={`bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen overflow-x-clip font-mono transition-colors duration-500`}>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        toggleTheme={toggleTheme}
      />
      <main className="relative mx-auto w-full px-4 py-6 sm:px-6 md:p-16">
        <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">
          <SectionWithAnimation>
            <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <h1 className={`text-2xl font-bold sm:text-3xl ${ui.heading}`}>Krushna Katore</h1>
                <p className={`mt-2 max-w-md text-pretty font-mono text-sm ${ui.subtext}`}>
                  Software Engineer · Full Stack & AI Agents
                </p>
                <div className="mt-5 space-y-2.5 font-mono text-sm">
                  {contactLinks.map(({ href, icon: Icon, label, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`${ui.link} flex w-fit items-center gap-x-2 break-all`}
                    >
                      <Icon size={14} className="shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <Image
                src="/pp1.jpg"
                alt="Krushna Katore"
                width={192}
                height={192}
                priority
                className="size-28 shrink-0 rounded-full object-cover sm:size-40 md:size-48"
              />
            </div>
          </SectionWithAnimation>

          <SectionWithAnimation id="about" title="About">
            <p className={`text-pretty font-mono text-sm ${ui.subtext}`}>
              Software Engineer with 5+ years of experience in full-stack development (React, Node.js, NestJS) and recent
              experience building AI agents for incident response and engineering prioritization.
            </p>
            <p className={`text-pretty font-mono text-sm ${ui.subtext}`}>
              Skilled in Kafka-based services, GCP, Jira and Temporal workflows, with a strong focus on reliable,
              well-tested systems. I enjoy turning messy operational problems into automated workflows, leading
              large upgrades, and helping teammates grow.
            </p>
          </SectionWithAnimation>

          <SectionWithAnimation id="experience" title="Experience">
            {experienceData.map((job, index) => (
              <ExperienceEntry key={index} job={job} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
              {projectsData.map((project, index) => (
                <ProjectEntry key={index} project={project} />
              ))}
            </div>
          </SectionWithAnimation>

          <SectionWithAnimation id="education" title="Education">
            {educationData.map((education, index) => (
              <EducationEntry key={index} education={education} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="certifications" title="Certifications">
            {certificationsData.map((certification, index) => (
              <CertificationsEntry key={index} certification={certification} />
            ))}
          </SectionWithAnimation>

          <SectionWithAnimation id="skills" title="Skills">
            <SkillsSection skillsData={skillsData} />
          </SectionWithAnimation>

          <SectionWithAnimation id="achievements" title="Achievements">
            <ul className={`list-disc space-y-1 pl-4 font-mono text-sm ${ui.subtext}`}>
              {achievementsData.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </SectionWithAnimation>
        </section>
      </main>
      <Footer links={contactLinks} />
      <BackToTop />
    </div>
    </>
  );
}
