export interface CaseStudy {
    problem: string;
    design: string;
    result: string;
  }

  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    tag?: string;
    caseStudy?: CaseStudy;
    flow?: string[];
  }

  export interface Experience {
    role: string;
    company: string;
    years: string;
    description: string[];
    skills: string[];
  }

  export interface Education {
    degree: string;
    school: string;
    years: string;
  }

  export interface Certificate {
    name: string;
    issuer: string;
    year: string;
  }

  export interface Skills {
    frontend: string[];
    backend: string[];
    ai: string[];
    databases: string[];
    tools: string[];
  }

  export const projectsData: Project[] = [
    {
      title: 'KDL Auto-Remediation Agent',
      tag: 'Agent',
      description: 'An AI agent on the internal Aetherion platform that takes production errors from detection to a reviewed fix with no manual triage.',
      caseStudy: {
        problem: 'Errors and Kafka death loops in GCP logs were found and triaged by hand, which was slow and easy to miss.',
        design: 'A Temporal workflow scans GCP logs against per-service YAML rules, opens a Jira ticket, raises a fix PR for human review and posts it to Teams and Slack. Deduplication and hourly ticket/PR caps keep it safe.',
        result: 'Retries never create duplicate tickets, a human still approves every PR, and the full flow is verified end to end against a Jira sandbox and the Temporal runtime.',
      },
      flow: ['GCP logs', 'Detect (YAML rules)', 'Deduplicate', 'Jira ticket', 'Fix PR', 'Human review', 'Teams / Slack'],
      technologies: ['Python', 'Temporal', 'Kafka', 'GCP', 'Jira', 'LLM'],
    },
    {
      title: 'Daily Prioritization Agent',
      tag: 'AI Agent',
      description: 'An agent that turns a Jira dashboard or JQL query into a daily priority brief for the team.',
      caseStudy: {
        problem: 'Deciding each morning what to work on, and who should own it, took manual review of the whole Jira board.',
        design: 'An explainable scoring model ranks tickets, and an LLM recommends an owner for each one from the team’s current workload and past work.',
        result: 'The team gets a ready-to-read daily brief as a Word document and an email, with the reason behind every ranking.',
      },
      flow: ['Jira dashboard / JQL', 'Score tickets', 'LLM suggests owners', 'Daily brief (Word + email)'],
      technologies: ['Python', 'LLM', 'Jira / JQL', 'Prompt Design'],
    },
    {
      title: 'Fitness Website',
      description: 'A modern fitness platform where users can explore gym services, membership plans, trainers, classes, and the latest updates—all in one place.',
      technologies: ['Next JS', 'Tailwind CSS', 'Node JS', 'Mongo DB', 'Express JS', 'TypeScript'],
      githubUrl: 'https://github.com/krushnakatore/fitness_freak',
      liveUrl: 'https://fitness-freak-drab.vercel.app/',
    },
    {
      title: 'Packaging & Printing Website',
      description: 'A responsive website showcasing packaging and printing services, product catalogs, custom packaging solutions, company information, and customer inquiry features for businesses.',
      technologies: ['Next JS', 'Nest JS', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/krushnakatore/packaging_printing',
      liveUrl: 'https://packaging-printing.vercel.app/',
    },
  ];

  export const experienceData: Experience[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Calfus Pvt. Ltd.',
      years: 'Jun 2023 - Present',
      description: [
        'Designed and delivered the KDL Auto-Remediation Agent on the internal Aetherion platform (Python, Temporal): detects errors and Kafka death loops in GCP logs, creates a Jira ticket, raises a fix PR for human review and posts it to Microsoft Teams and Slack.',
        'Made the agent reliable with per-service YAML detection rules, deduplication so retries never create duplicate tickets, and hourly caps on tickets and PRs; verified end to end against a Jira sandbox and the Temporal runtime.',
        'Delivered the Daily Prioritization Agent, which turns a Jira dashboard or JQL query into a daily brief (Word document and email) using an explainable scoring model, with an LLM recommending ticket owners from current workload and past work.',
        'Delivered Kafka-driven middleware services; diagnosed and resolved distributed race conditions using GCP logs.',
        'Led upgrades of core enterprise applications from React 16 → 19 (3 major versions) and Node 14 → 22 (4 LTS releases), improving performance and security.',
        'Streamlined microfrontend flows for faster loading and optimized Camunda workflow re-triggering for high resiliency.',
        'Strengthened reliability with Cypress and Jest test suites; built APIs and tuned slow SQL queries.',
        'Integrated Twilio and WorkBright, working with external teams on callback/webhook handlers.',
        'Delivered backend microservices in NestJS and Kotlin, translating client business needs into technical solutions.',
      ],
      skills: ['TypeScript', 'React', 'Redux', 'Node.js', 'NestJS', 'Python', 'Temporal', 'Kafka', 'GCP', 'Kotlin', 'GraphQL', 'Docker', 'Jenkins', 'Cypress', 'Jest'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Humanitus Pvt. Ltd.',
      years: 'Mar 2022 - Jun 2023',
      description: [
        'Led development of a new app version from scratch using React hooks and Redux, with reusable, responsive components for all devices.',
        'Enhanced the CMS dashboard with scratch-card functionality and fixed frontend and backend bugs across the app and CMS.',
        'Designed an analytics dashboard with CleverTap queries for user insights.',
        'Built Node.js PDF generation and added Microsoft Clarity analytics to the React app.',
        'Wrote test cases to improve app reliability.',
      ],
      skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express.js', 'GraphQL', 'MUI', 'CleverTap'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      years: 'Jan 2020 - Mar 2022',
      description: [
        'Delivered full-stack apps with React and Node.js/Express.js for a seamless user experience and efficient server-side rendering.',
        'Improved React rendering performance and built scalable RESTful APIs for faster data retrieval.',
      ],
      skills: ['React', 'Node.js', 'Express.js', 'REST APIs'],
    },
  ];

  export const certificationsData: Certificate[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: 'Jul 2025',
    }
  ];


  export const educationData: Education[] = [
    {
      degree: 'Full Stack Web Development',
      school: 'Masai School, Bangalore',
      years: 'Jul 2021 - Feb 2022',
    },
    {
      degree: 'B.E. (First Class with Distinction)',
      school: 'Trinity College of Engineering, Pune',
      years: 'Jun 2014 - Jul 2018',
    },
  ];

  export const achievementsData: string[] = [
    'Second position in school, Matriculation Exams.',
    'Second Runner-up (Under 17), State Volleyball Championship, Maharashtra.',
  ];

  export const skillsData: Skills = {
    frontend: ['React JS', 'Next JS', 'TypeScript', 'Redux', 'GraphQL', 'HTML', 'CSS', 'Tailwind CSS', 'MUI', 'Antd'],
    backend: ['Node JS', 'NestJS', 'Express JS', 'Python', 'Kotlin', 'Kafka', 'Temporal', 'Socket.io', 'Camunda', 'Redis', 'REST APIs'],
    ai: ['LLM Integration', 'AI Agent Workflows', 'Prompt Design', 'Claude', 'GitHub Copilot', 'Cursor'],
    databases: ['PostgreSQL', 'SQL', 'MongoDB', 'Firebase'],
    tools: ['Git', 'GitHub', 'GitLab', 'Jira', 'Docker', 'Jenkins', 'GCP', 'AWS', 'Vercel', 'Jest', 'Cypress'],
  };
