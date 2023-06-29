import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';
import { FiDownload } from 'react-icons/fi';

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
            href='https://drive.google.com/file/d/1cw7lJ6DkNUF1EED3hZywm4YXuvuFa4SZ/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='resume-button'
          >
            <FiDownload className='resume-icon' />
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
            <h1>Front-End</h1>
            <span>
              React, Redux, HTML, CSS, JavaScript
            </span>
          </li>
          <li className='item'>
            <h1>Back-End</h1>
            <span>
              Express, Node.js, Flask
            </span>
          </li>
          <li className='item'>
            <h1>Languages</h1>
            <span>
              Python, JavaScript, C, C++, Java
            </span>
          </li>
          <li className='item'>
            <h1>Data Science</h1>
            <span>
              Data Analysis, Machine Learning, Python Libraries (NumPy, Pandas, Matplotlib, etc.), Data Visualization
            </span>
          </li>
          <li className='item'>
            <h1>Blockchain Development</h1>
            <span>
              Solidity, Ethereum, Smart Contracts
            </span>
          </li>
          <li className='item'>
            <h1>Software Engineering</h1>
            <span>
              Object-Oriented Programming, Design Patterns, Software Development Life Cycle
            </span>
          </li>
          <li className='item'>
            <h1>Database Management</h1>
            <span>
              SQL, MySQL, MongoDB
            </span>
          </li>
          <li className='item'>
            <h1>Problem Solving</h1>
            <span>
              Data Structures, Algorithms, Logical Reasoning
            </span>
          </li>
          <li className='item'>
            <h1>Communication Skills</h1>
            <span>
              Effective Communication, Presentation Skills, Technical Writing
            </span>
          </li>
          <li className='item'>
            <h1>Organizational Skills</h1>
<span>
Time Management, Task Prioritization, Team Collaboration
</span>
</li>
</ol>
</div>
</div>
);
}

export default Home;
