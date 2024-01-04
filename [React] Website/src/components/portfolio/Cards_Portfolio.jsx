import React from "react";
import "./portfolio.css"

function Cards_Portfolio(props) {
  return (
    <article key={props.id} class="portfolio__item">
    <div className="portfolio__item-image">
      <img src={props.img} alt={props.alt} className="portfolio__img"/>
    </div>
      <h3>{props.title}</h3>
      <div className="portfolio__item-cta">
      <a href={props.toGithub} className='btn'>Github</a>
      <a href={props.toLiveDemo} className='btn btn-primary' target="_blank">Live Demo</a>
      </div>
  </article>
  )
}

export default Cards_Portfolio