import React from 'react'
import Button from './Button'
import Working from '../Asset/Images/WebsiteCreato.svg'

function Hero() {
  return (
    <section className='heroWrapper'>
      <div className='heroTitle'>
        <h1>Hi, I'm Kishore</h1>
        <p>am empathetic <span className='underline'>front end developer</span>. I design useful products with keeping on mind accessiblity.</p>
        <Button bg="white" color="black" link="https://www.linkedin.com/in/mrkishorekumar/" val="Contact" className="mt-3" />
      </div>
      <div className='heroImg'>
        <img src={Working} alt='Working' />
      </div>
    </section>
  )
}

export default Hero