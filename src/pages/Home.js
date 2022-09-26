import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import App from './../App';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Aaryan</h2>
            
            <div className='prompt'>
                <p>A Software Developer with a passion for learning and creating.</p>
                <h3><a href='https://drive.google.com/file/d/15ph5FqJkf6GldwrGMzv1zWrGu_Rk4C6V/view'>Download Resume</a></h3>
                <a href='https://www.linkedin.com/in/aaryan-verma/'><LinkedInIcon/></a>
                <a href="mailto:aryanverma.av2000@gmail.com"><EmailIcon/></a>
                < a href = 'https://github.com/aaryan-verma/'><GitHubIcon/></a>
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
                        Express, Node, MySQL, MongoDB
                    </span>
                </li>
                <li>
                    <h1>Languages</h1>
                    <span>
                        Python, JavaScript, C, C++, Java, Solidity
                    </span>
                </li>
            </ol>
        </div>
    </div>
  );
}

export default Home;