import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/aaryan-verma/'><LinkedInIcon/></a>

        <a href="mailto:aryanverma.av2000@gmail.com"><EmailIcon/></a>
        < a href = 'https://github.com/aaryan-verma/'><GitHubIcon/></a>
            < a href = 'https://www.instagram.com/__aaryan__verma__/'><InstagramIcon/></a>
            <a href = 'https://twitter.com/__aaryanverma/'><TwitterIcon/></a>
        </div>
        <p>&copy; 2022 portfolio</p>
    </div>
  )
}

export default Footer