import React from 'react'
import './about.css'
import Cards_About from './Cards_About'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import ME from '../../assets/pokemon_PNG148.png'

const About = () => {
  return (
    <section id="about">
      <div className='about'>

      </div>
      <h5 >Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about__me-image">
            <img src={ME} className="img-me" alt=""/>
          </div>
        </div>

        <div className="about_content">
            <div className="about__cards">
              <Cards_About
              icon={<FaAward/>}
              mainTitle="Experience"
              description="None"
              />

              <Cards_About
              icon={<FiUsers/>}
              mainTitle="Satisfied Users"
              description="1"
              />

              <Cards_About
              icon={<VscFolderLibrary/>}
              mainTitle="Projects"
              description="10+ Completed"
              />
              
          </div>

          <p className='text-about'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate minus doloribus itaque numquam libero tenetur sapiente magnam cumque recusandae 
            velit quos, molestias beatae, nobis incidunt fugiat voluptatum aut hic blanditiis?
          </p>

          <div className='btn-about'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About