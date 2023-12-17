import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsActive(false);
    }
  };

  return (
    <nav className='navbar'>
      <div className='nav-heading'>
        <h1>Portfolio</h1>
      </div>
      <div className={`nav-elements`}>
        <ul className={`nav-menu  ${isActive ? "nav-active" : ""}`}>
          <li className='nav-item' onClick={() => scrollToSection('Home')}>
            <a className='nav-link' href="#Home"></a>Home
          </li>
          <li className='nav-item' onClick={() => scrollToSection('Skills')}>
            <a className='nav-link' href="#Skills"></a>Skills
          </li>
          <li className='nav-item' onClick={() => scrollToSection('Project')}>
            <a className='nav-link' href="#Projects"></a>Projects
          </li>
          <li className='nav-item' onClick={() => scrollToSection('Contact')}>
            <a className='nav-link' href="#Contact"></a>Contact Me
          </li>
        </ul>
      </div>
      <div className="download">
        <a className="btn cv" href='https://drive.google.com/file/d/1uPj8zzHOb43KpnLF0iNkOhhd6PHt7E2f/view?usp=drive_link' target="_blank" rel="noopener noreferrer"><span>Download</span> CV</a>
      </div>

      <div onClick={toggleNav} className={`nav-icon ${isActive ? 'toggle' : ''}`}>
        <div className='line1 bar'></div>
        <div className='line2 bar'></div>
        <div className='line3 bar'></div>
      </div>
    </nav>
  );
};

export default Navbar;
