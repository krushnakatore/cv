export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
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
    databases: string[];
    tools: string[];
  }
  
  export const projectsData: Project[] = [
    {
      title: 'Twitter Clone',
      description: 'Replica of Twitter aka X, to send images and videos to your close friends.',
      technologies: ['React JS', 'Tailwind CSS', 'Node JS', 'Mongo DB', 'Express JS', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com/krushnakatore/twitterfrontend',
      liveUrl: 'https://twitterfrontend.vercel.app/',
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A personal portfolio showcasing my development work.',
    //   technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    //   githubUrl: 'https://github.com/yourusername/portfolio',
    //   liveUrl: '#',
    // },
    {
      title: 'E-commerce Website',
      description: 'A RESTful API for an e-commerce platform with user authentication, product management, and order processing.',
      technologies: ['Express.js', 'MongoDB', 'JWT', 'Node JS', 'Paypal',],
      githubUrl: 'https://github.com/krushnakatore/ecomfrontend',
      liveUrl: 'https://ecomfrontend-eofr.vercel.app/',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A single-page application that fetches and displays real-time weather data for any city.',
    //   technologies: ['React', 'OpenWeatherMap API', 'CSS'],
    //   githubUrl: 'https://github.com/yourusername/weather-app',
    //   liveUrl: '#',
    // },
    // {
    //   title: 'Personal Blog',
    //   description: 'A full-stack blog where I can write and publish articles with a user-friendly CMS.',
    //   technologies: ['Next.js', 'Markdown', 'Firebase'],
    //   githubUrl: 'https://github.com/yourusername/blog-platform',
    //   liveUrl: '#',
    // },
  ];
  
  export const experienceData = [
    {
      role: 'Software Engineer',
      company: 'Calfus Technologies Pvt. Ltd.',
      years: 'Jun 2023 - Present',
      description: ['Designed and implemented intricate UI elements to enhance customer experience.', 'Ensured project consistency by leveraging existing components and structures.', 'Resolved React and Nest production bugs promptly.', 'Developed comprehensive test suites using Cypress and Jest unit tests.', 'Optimized Redux and Context for efficient state management.', 'Contributed to backend development, crafting APIs and SQL queries.', 'Collaborated on a new backend service using NestJS.', 'Addressed configuration issues like CORS.', 'Utilized Kotlin to troubleshoot and resolve production bugs.', 'Engaged with clients to understand requirements and deliver desired outcomes.'],
      skills: ['JavaScript', 'React', 'Node.js', 'AWS', 'Docker']
    },
    {
      role: 'Full Stack Developer',
      company: 'Humanitus Pvt. Ltd.',
      years: 'Apr 2022 - Jun 2023',
      description: ['Enhanced the CMS dashboard with features like scratch-card functionality.', 'Addressed various frontend and backend bugs in the app and CMS website.', 'Developed comprehensive test cases for app reliability.', 'Utilized React hooks and Redux tools efficiently.', 'Created reusable, responsive components for all devices.', 'Led the development of a new app version from scratch.', 'Designed and implemented an analytics dashboard.', 'Integrated Clever- Tap queries for user insights.', 'Developed Node JS code for PDF generation.', 'Implemented Microsoft Clarity script for analytics in React.'],
      skills: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Firebase']
    },
  ];

  export const certificationsData: Certificate[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: ' Jul 2025',
    }
  ];
  
  
  export const educationData: Education[] = [
    {
      degree: 'Full Stack Web Development',
      school: 'Masai School, Banglore',
      years: 'Jul 2021 - Feb 2022',
    },
    {
      degree: 'B.E. (First Class with Distinction)',
      school: 'Trinity College of Engineering, Pune',
      years: 'Jun 2014 - Jul 2018',
    },
  ];
  
  export const skillsData: Skills = {
    frontend: ['HTML', 'CSS', 'TypeScript', 'React JS', 'Next JS', 'BootStrap', 'Tailwind CSS', 'CleverTap', 'Antd', 'Jest', 'Cypress'],
    backend: ['Node JS', 'Express JS', 'Kotlin', 'REST APIs','Nest JS', 'Firebase', 'Graph QL'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'GCP', 'Git Lab', 'Jira'],
  };