import React from 'react'
import './Projects.css'
import project_data from './Project_data'
import Hackathon from './Hackathon'

const Projects = () => {
  return (
    <div className='p-main' id='Project'>
      <div className="p-title">
        <h1>Projects</h1>
      </div>
      <div className='p-container'>
        {
          project_data.map((project, index) => (
            <div className="p-card" key={index}>
              <div className="p-img">
                <img src={project.image} alt="" />
              </div>
              <div className="p-heading">
                <h2>{project.heading}</h2>
              </div>
              <div className="p-text">
                <h4>{project.text}</h4>
              </div>
              <div className="p-buttons">
                <h2>Technology :- {project.tech}</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='btn link-btn cv'>Link</a>
              </div>
            </div>
          ))
        }
      </div>
      <Hackathon/>
    </div>
  )
}

export default Projects
