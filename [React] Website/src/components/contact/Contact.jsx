import React from 'react'
import './contact.css'
import Cards__Contact from './Cards__Contact'
import {MdOutlineMailOutline} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h4wbm9d', 'template_y0qafaa', form.current, '7CuPXS4xj2MgKMMB1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset();
    };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Cards__Contact
          icon={<MdOutlineMailOutline/>}
          title="Email"
          subtitle="hyago.nsa.bot@gmail.com"
          contact="mailto:hyago.nsa.bot@gmail.com"
          />

          <Cards__Contact
          icon={<FaLinkedin/>}
          title="Linkedin"
          subtitle="Hyago Eurico"
          contact="https://www.linkedin.com/notifications/"
          />

        </div>
        {/* END */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact