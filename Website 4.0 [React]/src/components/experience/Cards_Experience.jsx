import React from "react";
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

function Cards_proficiency(props){
  return(
    <article className='experience__details'>
      <BsPatchCheckFill className="experience__details-icon"/>
      <div>
      <h4>{props.language}</h4>
      <small class="text-light">{props.proficiency}</small>
      </div>

  </article>

  )

}

export default Cards_proficiency;