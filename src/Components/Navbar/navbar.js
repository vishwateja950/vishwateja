import React, { useState } from 'react'
import logo from '../../logo/Logo-removebg-preview.png'
import {Link } from 'react-scroll';
import menu from '../../images/1564512_burger_catalogue_list_menu_icon.png'

import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo ' className='logo'/>
        <div className='menu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='menuList'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='menuList'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='menuList'>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='menuList'>Contact</Link>
        </div>
        <button className='navBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            Contact Me
            
        </button>
        <img src={menu} alt='Menu ' className='mobileMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className='navmenu' style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='menuList'onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='menuList'onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='menuList'onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='menuList'onClick={()=> setShowMenu(false)}>Contact</Link>
        </div>
        
    </nav>
  )
}

export default Navbar