import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaPhp, FaReact, FaNodeJs, FaFlask, FaGitAlt, FaGithub, FaDatabase, FaCode, FaJava, FaBootstrap, FaLaptopCode, FaTools, FaServer } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiPostman, SiFigma, SiJest, SiVite } from 'react-icons/si';

export const SkillsSection = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    <p>Here are the skills and technologies I use to build efficient and scalable applications:</p>
    <div className="skills-container">
      <div className="skills-category">
        <h3>Languages</h3>
        <ul>
          <li><FaHtml5 className="skill-icon" /> HTML</li>
          <li><FaCss3Alt className="skill-icon" /> CSS</li>
          <li><FaJsSquare className="skill-icon" /> JavaScript</li>
          <li><FaPython className="skill-icon" /> Python</li>
          <li><FaPhp className="skill-icon" /> PHP</li>
          <li><SiCplusplus className="skill-icon" /> C++</li>
          <li><FaJava className="skill-icon" /> Java</li>
          <li><FaDatabase className="skill-icon" /> SQL</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Frameworks and Libraries</h3>
        <ul>
          <li><FaReact className="skill-icon" /> React</li>
          <li><FaNodeJs className="skill-icon" /> Node.js</li>
          <li><FaFlask className="skill-icon" /> Flask</li>
          <li><FaBootstrap className="skill-icon" /> Bootstrap</li>
          <li><SiTailwindcss className="skill-icon" /> Tailwind CSS</li>
          <li><SiJest className="skill-icon" /> Jest</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Tools</h3>
        <ul>
          <li><FaGitAlt className="skill-icon" /> Git</li>
          <li><FaGithub className="skill-icon" /> GitHub</li>
          <li><FaCode className="skill-icon" /> VS Code</li>
          <li><SiPostman className="skill-icon" /> Postman</li>
          <li><FaLaptopCode className="skill-icon" /> XAMPP</li>
          <li><SiFigma className="skill-icon" /> Figma</li>
          <li><FaTools className="skill-icon" /> Chrome Developer Tools</li>
          <li><SiVite className="skill-icon" /> Vite</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Database Management</h3>
        <ul>
          <li><FaDatabase className="skill-icon" /> MySQL</li>
          <li><FaDatabase className="skill-icon" /> SQLite</li>
          <li><FaDatabase className="skill-icon" /> PostgreSQL</li>
        </ul>
      </div>
    </div>
  </section>
);
