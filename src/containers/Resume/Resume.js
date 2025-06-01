import React from "react";
import "./Resume.css"; // Import the CSS file
import { krushnaKatore, greeting } from "../../portfolio"; // Import contactInfo and greeting
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHome } from "react-icons/fa"; // Importing icons
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Resume(props) {
  const theme = props.theme;

  return (
      <div className="resume-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <div className="resume-page-container" style={{ backgroundColor: theme.body, color: theme.resumeText }}>
          <div className="resume-header-top">
            {/* Top-right contact info */}
            <div className="contact-links-top">
              <a href={`mailto:${krushnaKatore.email}`} target="_blank" rel="noopener noreferrer" style={{ color: theme.resumeText }}>
                {krushnaKatore.email} <FaEnvelope size={16} className="icon-margin" />
              </a>
              <a href={krushnaKatore.github} target="_blank" rel="noopener noreferrer" style={{ color: theme.resumeText }}>
                github.com/krushnakatore <FaGithub size={16} className="icon-margin" />
              </a>
              <a href={krushnaKatore.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: theme.resumeText }}>
                linkedin.com/in/krushnakatore <FaLinkedin size={16} className="icon-margin" />
              </a>
              <a href={`tel:${krushnaKatore.phone}`} style={{ color: theme.resumeText }}>
                {krushnaKatore.phone} <FaPhone size={16} className="icon-margin" />
              </a>
              <span style={{ color: theme.resumeText }}>{krushnaKatore.location} <FaHome size={16} className="icon-margin" /></span>
              <a href={krushnaKatore.website} target="_blank" rel="noopener noreferrer" style={{ color: theme.resumeText }}>
                {krushnaKatore.website.replace('https://', '')} <i className="fa fa-globe icon-margin"></i> {/* Using a generic globe icon, replace with specific if you have */}
              </a>
            </div>

            {/* Name and Title */}
            <div className="name-title">
              <h1 style={{ color: theme.resumeText }}>{krushnaKatore.name}</h1>
              <p style={{ color: theme.resumeText }}>{krushnaKatore.title}</p>
            </div>
          </div>

          <section className="resume-section summary-section">
            <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2, width: "50%" }}>SUMMARY</h1>
            <p style={{ color: theme.resumeText }}>
              A Full-Stack Web Developer who likes to use his skills in challenging situations and to find answers to problems. Highly motivated to learn and improve his knowledge.
            </p>
          </section>

          <div className="main-resume-content">
            {/* Left Column */}
            <div className="left-column">


              <section className="resume-section education-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>EDUCATION</h1>
                <div className="education-item">
                  <h3 style={{ color: theme.resumeText }}>Full Stack Web Development</h3>
                  <p className="sub-detail" style={{ color: theme.secondaryText }}>Masai School, Bangalore</p>
                  <p className="date-range" style={{ color: theme.secondaryText }}>JULY 2021 - FEB 2022</p>
                </div>
                <div className="education-item">
                  <h3 style={{ color: theme.resumeText }}>B.E. (First Class with Distinction)</h3>
                  <p className="sub-detail" style={{ color: theme.secondaryText }}>Trinity College of Engineering, Pune</p>
                  <p className="date-range" style={{ color: theme.secondaryText }}>June 2014 - July 2018</p>
                </div>
              </section>

              <section className="resume-section skills-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>SKILLS</h1>
                <div className="skills-grid">
                  <div>
                    <ul>
                      <li style={{ color: theme.resumeText }}>HTML</li>
                      <li style={{ color: theme.resumeText }}>CSS</li>
                      <li style={{ color: theme.resumeText }}>JavaScript</li>
                      <li style={{ color: theme.resumeText }}>Node JS</li>
                      <li style={{ color: theme.resumeText }}>Tailwind CSS</li>
                      <li style={{ color: theme.resumeText }}>Express JS</li>
                      <li style={{ color: theme.resumeText }}>Mongo DB</li>
                      <li style={{ color: theme.resumeText }}>Socket.IO</li>
                      <li style={{ color: theme.resumeText }}>SQL</li>
                      <li style={{ color: theme.resumeText }}>Antd</li>
                      <li style={{ color: theme.resumeText }}>Netlify</li>
                      <li style={{ color: theme.resumeText }}>Jira</li>
                      <li style={{ color: theme.resumeText }}>Clever Tap</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li style={{ color: theme.resumeText }}>React JS</li>
                      <li style={{ color: theme.resumeText }}>Redux</li>
                      <li style={{ color: theme.resumeText }}>Typescript</li>
                      <li style={{ color: theme.resumeText }}>Graph QL</li>
                      <li style={{ color: theme.resumeText }}>Git Hub / Git Lab</li>
                      <li style={{ color: theme.resumeText }}>Postman</li>
                      <li style={{ color: theme.resumeText }}>Postgre SQL</li>
                      <li style={{ color: theme.resumeText }}>Cypress</li>
                      <li style={{ color: theme.resumeText }}>NestJS</li>
                      <li style={{ color: theme.resumeText }}>Vercel</li>
                      <li style={{ color: theme.resumeText }}>Jest</li>
                      <li style={{ color: theme.resumeText }}>GCB</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="resume-section accomplishments-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>ACCOMPLISHMENTS</h1>
                <ul>
                  <li style={{ color: theme.resumeText }}>Achieved second position in a school for Matriculation Exams.</li>
                  <li style={{ color: theme.resumeText }}>Second Runner-up (Under 17) State Volleyball Championship, Maharashtra.</li>
                  <li style={{ color: theme.resumeText }}>Participation (Under 14) State Volleyball Championship, Maharashtra.</li>
                </ul>
              </section>

              <section className="resume-section soft-skills-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>SOFTS SKILLS</h1>
                <p style={{ color: theme.resumeText }}>Creativity | Decision-making | Multi-Tasking</p>
              </section>

              <section className="resume-section interests-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>INTERESTS</h1>
                <p style={{ color: theme.resumeText }}>Cycling | Swimming | Reading books | Volleyball</p>
              </section>

              <section className="resume-section projects-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>PROJECTS</h1>
                <div className="project-item">
                  <h3 style={{ color: theme.resumeText }}>TWITTER CLONE</h3>
                  <ul>
                    <li style={{ color: theme.resumeText }}>Added user authentication, profile editing, post interactions (like, follow, media, emojis), and full post management (create, edit, delete).</li>
                  </ul>
                </div>
                <div className="project-item">
                  <h3 style={{ color: theme.resumeText }}>MERN STACK WEBSITE - E-COMMERCE</h3>
                  <ul>
                    <li style={{ color: theme.resumeText }}>Built Admin and User dashboards with role-based access, filters, search, PayPal integration, and full e-commerce features including cart and category pages.</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Right Column with Vertical Divider */}
            <div className="right-column">
              <section className="resume-section professional-experience-section">
                <h1 style={{ color: theme.resumeText, borderBottomColor: theme.headingBorderColor, borderWidth: 2 }}>PROFESSIONAL EXPERIENCE</h1>
                <div className="experience-item">
                  <h3 style={{ color: theme.resumeText }}>Software Engineer - Calfus Pvt. Ltd.</h3>
                  <p className="date-range" style={{ color: theme.secondaryText }}>JUN 2023 - Present</p>
                  <ul>
                    <li style={{ color: theme.resumeText }}>Designed and implemented intricate UI elements to enhance customer experience.</li>
                    <li style={{ color: theme.resumeText }}>Ensured project consistency by leveraging existing components and structures.</li>
                    <li style={{ color: theme.resumeText }}>Resolved <span style={{ fontWeight: 'bold' }}>React</span> and <span style={{ fontWeight: 'bold' }}>Nest</span> production bugs promptly.</li>
                    <li style={{ color: theme.resumeText }}>Developed comprehensive test suites using <span style={{ fontWeight: 'bold' }}>Cypress</span> and <span style={{ fontWeight: 'bold' }}>Jest</span> unit tests.</li>
                    <li style={{ color: theme.resumeText }}>Optimized <span style={{ fontWeight: 'bold' }}>Redux</span> and Context for efficient state management.</li>
                    <li style={{ color: theme.resumeText }}>Contributed to backend development, crafting APIs and SQL queries.</li>
                    <li style={{ color: theme.resumeText }}>Collaborated on a new backend service using <span style={{ fontWeight: 'bold' }}>NestJS</span>.</li>
                    <li style={{ color: theme.resumeText }}>Addressed configuration issues like <span style={{ fontWeight: 'bold' }}>CORS</span>.</li>
                    <li style={{ color: theme.resumeText }}>Utilized <span style={{ fontWeight: 'bold' }}>Kotlin</span> to troubleshoot and resolve production bugs.</li>
                    <li style={{ color: theme.resumeText }}>Engaged with clients to understand requirements and deliver desired outcomes.</li>
                    <li style={{ color: theme.resumeText }}>Tech Stack: <span style={{ fontWeight: 'bold' }}>JavaScript, TypeScript, React, Redux, Node.js, NestJS, Apache Kafka, Git, MUI, HTML, CSS, Jenkins, Docker, Kotlin, GraphQL, Cypress, Jest.</span></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 style={{ color: theme.resumeText }}>Full Stack Developer - Humanitus Pvt. Ltd.</h3>
                  <p className="date-range" style={{ color: theme.secondaryText }}>MAR 2022 - JUN 2023</p>
                  <ul>
                    <li style={{ color: theme.resumeText }}>Enhanced the CMS dashboard with features like scratch-card functionality.</li>
                    <li style={{ color: theme.resumeText }}>Implemented features like scratch-card functionality.</li>
                    <li style={{ color: theme.resumeText }}>Addressed various frontend and backend bugs in the app and CMS website.</li>
                    <li style={{ color: theme.resumeText }}>Developed comprehensive test cases for app reliability.</li>
                    <li style={{ color: theme.resumeText }}>Utilized <span style={{ fontWeight: 'bold' }}>React hooks</span> and <span style={{ fontWeight: 'bold' }}>Redux tools</span> efficiently.</li>
                    <li style={{ color: theme.resumeText }}>Created reusable, responsive components for all devices.</li>
                    <li style={{ color: theme.resumeText }}>Led the development of a new app version from scratch.</li>
                    <li style={{ color: theme.resumeText }}>Designed and implemented an analytics dashboard.</li>
                    <li style={{ color: theme.resumeText }}>Integrated <span style={{ fontWeight: 'bold' }}>Clever Tap</span> quizzes for user insights.</li>
                    <li style={{ color: theme.resumeText }}>Developed <span style={{ fontWeight: 'bold' }}>Node JS</span> APIs for PDF generation.</li>
                    <li style={{ color: theme.resumeText }}>Implemented Microsoft Clarity script for analytics in <span style={{ fontWeight: 'bold' }}>React</span>.</li>
                    <li style={{ color: theme.resumeText }}>Tech Stack: <span style={{ fontWeight: 'bold' }}>JavaScript, TypeScript, React, Redux, Node.js, Express.js, GraphQL, Git, MUI, HTML, CSS, Clevertap.</span></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 style={{ color: theme.resumeText }}>Freelance Developer</h3>
                  <p className="date-range" style={{ color: theme.secondaryText }}>JAN 2020 - MAR 2022</p>
                  <ul>
                    <li style={{ color: theme.resumeText }}>Developed Full Stack applications using <span style={{ fontWeight: 'bold' }}>React JS</span> for the frontend and <span style={{ fontWeight: 'bold' }}>Node JS/Express JS</span> for the backend, ensuring a seamless user experience and efficient server-side rendering.</li>
                    <li style={{ color: theme.resumeText }}>Optimized <span style={{ fontWeight: 'bold' }}>React</span> application performance by leveraging the <span style={{ fontWeight: 'bold' }}>React Fiber reconciler</span> to efficiently update the DOM, resulting in a smoother user experience.</li>
                    <li style={{ color: theme.resumeText }}>Developed and maintained scalable <span style={{ fontWeight: 'bold' }}>RESTful APIs</span> using <span style={{ fontWeight: 'bold' }}>Node JS</span> and <span style={{ fontWeight: 'bold' }}>Express JS</span>, improving data retrieval speed and enhancing the overall performance of the client’s backend services.</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
  );
}

export default Resume;