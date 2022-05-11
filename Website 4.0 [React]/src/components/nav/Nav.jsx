import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {BsFolder2Open} from "react-icons/bs"


const Nav = () => {
  const [activeNav, setActiveNav] = React.useState("#");
  return (
    <nav>
      <li>
        <ul><a href="#" onClick={ () => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a></ul>
        <ul><a href="#about" onClick={ () => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}><AiOutlineUser/></a></ul>
        <ul><a href="#experience" onClick={ () => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook/></a></ul>
        <ul><a href="#portfolio" onClick={ () => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BsFolder2Open/></a></ul>
        <ul><a href="#contact" onClick={ () => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a></ul>
      </li>
    </nav>
  )
}

export default Nav