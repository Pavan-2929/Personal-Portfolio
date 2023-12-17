import React from "react";
import "./Skills.css";
import data from "./data";
import MERN from '../../assets/MERN.png'

const Skills = () => {
  return (
    <div className="skill-container" id="Skills">
      <h1>Tech Stack</h1>
      <div className="tech-icons">
        {data.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
          </div>
        ))}
      </div>
      <div className="mern-div">
        <img src={MERN} alt="" className="mern" />
      </div>
    </div>
  );
};

export default Skills;
