import React from 'react'
import html from '../../images/html-tags-8668441_1280.png'
import ui from '../../images/woman-uploading-ui-ux-deisgn-8158228-6756067.webp'
import react from '../../images/react-app-development-company-banner.png'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className='skillDesc'>I am a frontend Developer with a passion for building user-friendly and responsive web applications.I am proficient in HTML,CSS,JavaScript,React Js.</span>
       <div className='skillBars'>
        <div className='skillBar'>
             <img src={ui}alt='html' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>UI/UX</h2>
                <p>UI/UX Designers are responsible for the overall feel, look, and functionality of a product from the user’s perspective</p>
             </div>
        </div>
        <div className='skillBar'>
             <img src={html}alt='ui' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>Website development</h2>
                <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
             </div>
        </div>
        <div className='skillBar'>
             <img src={react}alt='react' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>Deployment</h2>
                <p>Website deployment is the process of taking the codebase of a website application or site to the internet and making it accessible to users.</p>
             </div>
        </div>
        
       </div>
    </section>
  )
}

export default Skills