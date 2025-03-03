import React from 'react'
import nxt from '../../images/Creative-Food-Delivery-Website-Design.jpg'
import OIP from '../../images/e-commerce-online-shop-webpage-design-vector.jpg'
import max from '../../images/you.jpeg'
import key from '../../images/Key-Me-Kiosk-Kroger-Screen-Close-up-642x1024.jpg'
import './works.css'


const Portfolio = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that every project I work on is of the highest quality</span>
        <div className='worksImgs'>
            <a href='https://nxtwatch.ccbp.tech/'><img src={nxt} alt='nxt' className='worksImg'/></a>
            <a href='https://sai22260.ccbp.tech/'><img src={OIP} alt='OIP' className='worksImg'/></a>
            <a href='https://sssp1.ccbp.tech/'><img src={max} alt='max' className='worksImg'/></a>
            <a href='https://vishwateja950.github.io/kana/'><img src={key} alt='' className='worksImg'/></a>
        </div>
    </section>
  )
}

export default Portfolio