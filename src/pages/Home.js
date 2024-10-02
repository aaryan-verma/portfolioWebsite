import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';
import { FiDownload } from 'react-icons/fi';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';


function Home() {
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
        <ol className='list'>
          <li className='item'>
            <h1>Languages</h1>
            <span>
              JavaScript, TypeScript, Python, Java, C++, C
            </span>
          </li>
          <li className='item'>
            <h1>Front-End</h1>
            <span>
              HTML, CSS, SCSS, JavaScript, TypeScript, React, Redux, Angular 16, Next.js, Tailwind CSS, Figma
            </span>
          </li>
          <li className='item'>
            <h1>Back-End</h1>
            <span>
              Node.js, Express.js, FastAPI, Flask
            </span>
          </li>
          <li className='item'>
            <h1>Database Management</h1>
            <span>
              SQL, MySQL, PostgreSQL, MongoDB, NoSQL, Database Design, Data Modeling, Query Optimization
            </span>
          </li>
          <li className='item'>
            <h1>Software Engineering</h1>
            <span>
              Object-Oriented Programming, Design Patterns, Software Development Life Cycle, System Design
            </span>
          </li>
          <li className='item'>
            <h1>DevOps & Cloud</h1>
            <span>
              Docker, AWS EC2, Firebase
            </span>
          </li>
          <li className='item'>
            <h1>Data Science</h1>
            <span>
              Data Analysis, NumPy, Pandas, Matplotlib, Data Visualization
            </span>
          </li>
          <li className='item'>
            <h1>Blockchain Development</h1>
            <span>
              Solidity, Ethereum, Smart Contracts
            </span>
          </li>
          <li className='item'>
            <h1>Problem Solving</h1>
            <span>
              Data Structures, Algorithms, Logical Reasoning
            </span>
          </li>
        </ol>
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
