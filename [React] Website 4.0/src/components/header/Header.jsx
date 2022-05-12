import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/pokemon_PNG148.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>xxx xxx</h1>
        <h5 className="text-light">Front-End Dev</h5>

        <CTA/>
        <HeaderSocial/>


        <div className="me">
          <img className="img-me" src={ME} alt=""/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header