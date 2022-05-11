import React from 'react'
import "./about.css"

function Cards_About(props) {
  return (
    <article className='about__card'>
        <p className="about__icon">{props.icon}</p>
        <h5>{props.mainTitle}</h5>
        <small>{props.description}</small>
    </article>
  )
}

export default Cards_About