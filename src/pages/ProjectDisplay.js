import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from './../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import GridLoader from 'react-spinners/GridLoader';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      {loading ? (
        <div className="loader" style={{ opacity: 0.5 }}>
          <GridLoader 
            size={20}
            color={"#123abc"}
            loading={loading}/>
        </div>
      ) : (
        <div className='projectDisplay'>
          <img src={project.image} alt={project.name} />
        </div>
      )}
      <p><b>Skills:</b> {project.skills}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
