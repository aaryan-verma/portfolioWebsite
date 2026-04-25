import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import '../styles/Home.css';

const fullName = "Aaryan Verma";
const fullBio = "Software Engineer driving robust fintech and microservices architecture.";

function Home() {
  const [nameText, setNameText] = useState('');
  const [bioText, setBioText] = useState('');

  useEffect(() => {
    let isMounted = true;
    const typeText = async () => {
      for (let i = 0; i <= fullName.length; i++) {
        if (!isMounted) return;
        setNameText(fullName.slice(0, i));
        await new Promise(r => setTimeout(r, 40));
      }
      for (let i = 0; i <= fullBio.length; i++) {
        if (!isMounted) return;
        setBioText(fullBio.slice(0, i));
        await new Promise(r => setTimeout(r, 10));
      }
    };

    typeText();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className='home'>
      <div className='bento-container'>
        
        {/* Top Row */}
        <div className='bento-item bento-bio'>
          <h1>{nameText}{nameText.length < fullName.length && <span className="cursor">|</span>}</h1>
          <h2>{bioText}{nameText.length === fullName.length && bioText.length < fullBio.length && <span className="cursor">|</span>}</h2>
          <div className='socials'>
            <a
              href='https://drive.google.com/file/d/1LI5tOvIbBC0r1UYUGg0QXBHffE584WdQ/view'
              target='_blank'
              rel='noopener noreferrer'
              className='resume-btn'
            >
              <FaCloudDownloadAlt style={{ fontSize: '1.2rem' }} /> Resume
            </a>
            <a href='https://www.linkedin.com/in/aaryan-verma/' target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href='mailto:aryanverma.av2000@gmail.com'>
              <EmailIcon />
            </a>
            <a href='https://github.com/aaryan-verma/' target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
        
        <div className='bento-item bento-profile'>
          <img src={require('../assests/26904.png')} alt='Profile' />
        </div>

        {/* Middle Row Skills */}
        <div className='bento-item bento-skill'>
          <h3>Languages</h3>
          <p>Python, Java, JavaScript, C, SQL</p>
        </div>
        <div className='bento-item bento-skill'>
          <h3>Frameworks</h3>
          <p>FastAPI, Flask, Node.js, Next.js, React.js, Angular 16, Vue, Tailwind CSS</p>
        </div>
        <div className='bento-item bento-skill'>
          <h3>Tools & Tech</h3>
          <p>Docker, RabbitMQ, Git, AWS (EC2, ECS, ECR, SQS, S3), Datadog, Sumsub</p>
        </div>
        <div className='bento-item bento-skill'>
          <h3>Databases</h3>
          <p>PostgreSQL, MongoDB, Redis, ClickHouse</p>
        </div>

        {/* Bottom Rows */}
        <div className='bento-item bento-expertise'>
          <h3>Expertise</h3>
          <p>Data Structures and Algorithms, System Design, Microservices, Distributed Systems, Backend Development</p>
        </div>

        <div className='bento-item bento-interests'>
          <h3>Interests & Obsessions</h3>
          <p>Active Day Trading (Scalping), Algorithmic Market Analysis, Competitive Programming</p>
        </div>

        <div className='bento-item bento-achievements'>
          <h3>Achievements</h3>
          <div className='achievements-grid'>
            <div className='achievement-card'>
              <h4>LeetCode</h4>
              <span>Knight (Top 5% globally)</span>
            </div>
            <div className='achievement-card'>
              <h4>CodeChef</h4>
              <span>Global Rank 93 in Long One Challenge</span>
            </div>
            <div className='achievement-card'>
              <h4>GeeksforGeeks</h4>
              <span>Global Rank 699 in Job-A-Thon 7</span>
            </div>
          </div>
        </div>

        <Link to='/projects' className='bento-item bento-projects'>
          <h3>Explore Projects <MdArrowForward className='arrow-icon' /></h3>
          <p>View my full portfolio of work</p>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;