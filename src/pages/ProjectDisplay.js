import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from './../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <div className='projectDisplay'>
          <img src = {project.image} />
        </div>
        <p><b>Skills:</b> {project.skills}</p>
        <p><b>{project.link}</b></p>
        <GitHubIcon/>
    </div>
  )
}

export default ProjectDisplay