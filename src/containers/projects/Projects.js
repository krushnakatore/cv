import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/";

// export default function Projects() {
//   const [repo, _] = useState([]);

//   return (
//     <div className="main" id="opensource">
//       <h1 className="project-title">Open Source Projects</h1>
//       <div className="repo-cards-div-main">
//         {repo.map((v, i) => {
//           return <ProjectCard repo={v} key={v.node.id} />;
//         })}
//       </div>
//       <a className="resume-btn" href="https://github.com/harikanani">
//         More Projects (Github)
//       </a>
//     </div>
//   );
// }

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-1">KRUSHNA KATORE</h1>
      <p className="text-lg mb-6">A Full-Stack Web Developer who likes to use his skills in challenging situations and to find answers to problems. Highly motivated to learn and improve his knowledge.</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>TWITTER CLONE:</strong> Added user authentication, profile editing, post interactions (like, follow, media, emojis), and full post management (create, edit, delete).
          </li>
          <li>
            <strong>MERN STACK WEBSITE - E-COMMERCE:</strong> Built Admin and User dashboards with role-based access, filters, search, PayPal integration, and full e-commerce features including cart and category pages.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">PROFESSIONAL EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="font-bold">Software Engineer - Calfus Pvt. Ltd. (Jun 2023 – Present)</h3>
          <ul className="list-disc pl-5">
            <li>Designed and implemented intricate UI elements to enhance customer experience.</li>
            <li>Resolved production bugs and developed test suites using Cypress and Jest.</li>
            <li>Worked on Redux, Context API, and backend APIs using NestJS and SQL.</li>
            <li>Collaborated on backend services using Kotlin and resolved configuration issues like CORS.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Software Engineer - Humanitus Pvt. Ltd. (Mar 2022 – Jun 2023)</h3>
          <ul className="list-disc pl-5">
            <li>Enhanced CMS dashboard, added scratch-card and analytics features.</li>
            <li>Built reusable components, implemented Microsoft Clarity & CleverTap analytics.</li>
            <li>Created Node.js code for PDF generation and addressed frontend/backend bugs.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Freelance Developer (Jan 2020 – Mar 2022)</h3>
          <ul className="list-disc pl-5">
            <li>Developed full-stack apps using React and Node/Express.</li>
            <li>Built scalable REST APIs and optimized React with React Fiber for performance.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <ul className="list-disc pl-5">
          <li>Masai School, Bangalore – Full Stack Web Development (Jul 2021 – Feb 2022)</li>
          <li>Trinity College of Engineering, Pune – B.E. First Class with Distinction (2014 – 2018)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
        <p>React, Redux, TypeScript, Node.js, NestJS, Express, PostgreSQL, MongoDB, GraphQL, Cypress, Jest, Docker, Jenkins, Kotlin, Firebase, HTML, CSS, MUI, Tailwind CSS, Git, GCP, Jira, CleverTap, Socket.io</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">SOFT SKILLS</h2>
        <p>Creativity, Decision-making, Multi-tasking</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ACCOMPLISHMENTS</h2>
        <ul className="list-disc pl-5">
          <li>Second place in school Matriculation Exams</li>
          <li>2nd Runner-up – U17 State Volleyball Championship, Maharashtra</li>
          <li>Participant – U14 State Volleyball Championship, Maharashtra</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">INTERESTS</h2>
        <p>Cycling, Swimming, Reading books, Volleyball</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">CONTACT</h2>
        <p>Email: <a href="mailto:krushnakatore88@gmail.com" className="text-blue-600 underline">krushnakatore88@gmail.com</a></p>
        <p>Phone: +91 798854401</p>
        <p>Location: Pune, India</p>
        <p>Portfolio: <a href="https://krushna-katore.vercel.app/" className="text-blue-600 underline">krushna-katore.vercel.app</a></p>
        <p>GitHub: <a href="https://github.com/krushnakatore" className="text-blue-600 underline">github.com/krushnakatore</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/krushna-katore-0915a0358/" className="text-blue-600 underline">linkedin.com/in/krushna-katore</a></p>
      </section>
    </div>
  );
};

export default Projects;

