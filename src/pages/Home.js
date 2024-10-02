import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';
import { FiDownload } from 'react-icons/fi';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

const skillsData = [
  { title: 'Languages', content: 'JavaScript, TypeScript, Python, Java, C++, C' },
  { title: 'Front-End', content: 'HTML, CSS, SCSS, JavaScript, TypeScript, React, Redux, Angular 16, Next.js, Tailwind CSS, Figma' },
  { title: 'Back-End', content: 'Node.js, Express.js, FastAPI, Flask' },
  { title: 'Database Management', content: 'SQL, MySQL, PostgreSQL, MongoDB, NoSQL, Database Design, Data Modeling, Query Optimization' },
  { title: 'Software Engineering', content: 'Object-Oriented Programming, Design Patterns, Software Development Life Cycle, System Design' },
  { title: 'DevOps & Cloud', content: 'Docker, AWS EC2, Firebase' },
  { title: 'Data Science', content: 'Data Analysis, NumPy, Pandas, Matplotlib, Data Visualization' },
  { title: 'Blockchain Development', content: 'Solidity, Ethereum, Smart Contracts' },
  { title: 'Problem Solving', content: 'Data Structures, Algorithms, Logical Reasoning' }
];

function Home() {
  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className='item'>
        <h1>{skill.title}</h1>
        <span>{skill.content}</span>
      </div>
    ));
  };

  return (
    <div className='home'>
      <div className='about'>
        <div className='me'>
          <img src={require('../assests/26904.png')} alt='Profile' />
        </div>

        <h2>Hi, My Name is Aaryan</h2>

        <div className='prompt'>
          <p>A Software Developer with a passion for learning and creating.</p>
          <a
            href='https://drive.google.com/file/d/1XR5JKcRHmtVcR_w4PzVqbg1-NUjvFZch/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='resume-button'
          >
            <FaCloudDownloadAlt className='resume-icon' />
            <span className='resume-text'>Download Resume</span>
          </a>
          <a href='https://www.linkedin.com/in/aaryan-verma/'>
            <LinkedInIcon />
          </a>
          <a href='mailto:aryanverma.av2000@gmail.com'>
            <EmailIcon />
          </a>
          <a href='https://github.com/aaryan-verma/'>
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <div className='list'>
          <div className='row'>
            {renderSkills(skillsData.slice(0, 3))}
          </div>
          <div className='row'>
            {renderSkills(skillsData.slice(3, 6))}
          </div>
          <div className='row'>
            {renderSkills(skillsData.slice(6, 9))}
          </div>
        </div>
      </div>
      <div className='view-projects'>
        <h1>View Projects</h1>
        <p>Explore my portfolio of projects</p>
        <Link to='/projects' className='view-projects-button'>
          View Projects <MdArrowForward className='arrow-icon' />
        </Link>
      </div>
    </div>
  );
}

export default Home;