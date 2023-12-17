import React from 'react';
import './Hackathon.css'

const Hackathon = () => {
  return (
    <div>
      <div className="h-container">
        <div className="h-heading">
          <h1>Hackathon</h1>
        </div>
        <div className="h-content">
          <div className="h-title">
            <h2>Tic Tac Toe</h2>
          </div>
          <div className="h-details">
            <h3>
              I participated in a hackathon conducted at DAIICT College, Gandhinagar from October 22nd to October 24th. Our project focused on creating a fresh start guide for 12th-grade students, providing fundamental knowledge about their respective fields.
            </h3>
          </div>
          <div className="link-btns">
            <a href="https://freshweb-2d87c.web.app/" className='btn cv link-btn' target="_blank" rel="noopener noreferrer">Project</a>
            <a href="https://drive.google.com/file/d/1Zd8XcXe8JfT-TOKk0ok5MpVtkkwCsAR2/view?usp=drive_link" className='btn cv link-btn' target="_blank" rel="noopener noreferrer">Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
