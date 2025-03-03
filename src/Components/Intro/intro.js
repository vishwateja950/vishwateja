import React from 'react'
import logo from '../../logo/WhatsApp_Image_2025-03-02_at_19.02.29_8ceed218-removebg-preview.png'
import {Link} from 'react-scroll'
import resume from '../../images/Thogari Vishwateja.pdf'
import './intro.css'
import { jsPDF } from "jspdf";

const Intro = () => {
  const doc = new jsPDF();

doc.save("resume");
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Vishwateja Thogari</span> <br/>Frontend Developer</span>
            <p className='introPara'>I am a skilled frontend Developer with experience in creating visually appealing and user friendly websites.</p>
            <a href={resume} download='Resume'>
            <Link><button className='btn'>Hire Me</button></Link>
            </a>

        </div>

        <img src={logo} alt='profile' className='bg'/>
    
       
    </section>
  )
}

export default Intro;
