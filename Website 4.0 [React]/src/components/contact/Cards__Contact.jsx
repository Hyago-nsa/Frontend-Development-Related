import React from 'react'

const Cards__Contact = (props) => {
  return (
    <article className="contact__option">
            <p className='contact__option-icon'></p>{props.icon}
            <h4>{props.title}</h4>
            <h5>{props.subtitle}</h5>
            <a href={props.contact} target="_blank">Send a message</a>
          </article>
  )
}

export default Cards__Contact