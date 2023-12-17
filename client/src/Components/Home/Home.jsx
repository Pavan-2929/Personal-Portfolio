import React from 'react'
import Developer from '../../assets/Developer.png'
import './Home.css'
import ReactTyped from 'react-typed'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { SiGeeksforgeeks } from 'react-icons/si';

const Home = () => {

  return (

    <div className='home-container' id='Home'>
      <div className="home-left">
        <img src={Developer} />
      </div>
      <div className="home-right">
        <h2>Hello, It's Me,</h2>
        <h1>Pavan Kapadiya</h1>
        <span className='typing'>
          <p>I'm a &nbsp;</p><ReactTyped className='react-typed'
            strings={[
              'Front-end Developer',
              'React Developer'
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </span>
        <p className='home-text'>Welcome to my website! Please take your time to explore my portfolio and discover all of my projects. If you find something that interests you, don't hesitate to reach out to me. I'm excited to connect with you!</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/pavan-kapadiya-6b7789273/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='social-i' />
          </a>
          <a href="https://github.com/Pavan14075" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='social-i' />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/kapadiya_pavan" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className='social-i' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home
