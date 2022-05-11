import React from 'react'
import './portfolio.css'
import data from "./Data_Porfolio.js"
import Cards_Portfolio from './Cards_Portfolio'
import IMG1 from '../../assets/portfolio-img.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map( ({id, img, alt, title, toGithub, toLiveDemo}) => {
          return(
            <Cards_Portfolio
              id={id}
              img={img}
              alt={alt}
              title={title}
              toGithub={toGithub}
              toLiveDemo={toLiveDemo}
            />
            )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio