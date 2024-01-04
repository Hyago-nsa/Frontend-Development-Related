import React from 'react'
import './experience.css'
import Cards_Experience from './Cards_Experience'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Proficiency</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Cards_Experience
            language="HTML"
            proficiency="Intermediate"
            />
            <Cards_Experience
            language="CSS"
            proficiency="Intermediate"
            />
             <Cards_Experience
            language="JavaScript"
            proficiency="Basic"
            />
             <Cards_Experience
            language="ReactJS"
            proficiency="Basic"
            />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Cards_Experience
            language="MySQL"
            proficiency="Basic"
            />
            <Cards_Experience
            language="MongoDB"
            proficiency="Basic"
            />
             <Cards_Experience
            language="Python"
            proficiency="Basic"
            />
             <Cards_Experience
            language="NodeJS"
            proficiency="Basic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience