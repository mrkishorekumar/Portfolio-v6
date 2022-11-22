import React from 'react'
import CodeTyping from '../Asset/Images/CodeTyping.svg'
import Button from './Button'

function About() {
  return (
    <section className='aboutSectionWrapper' >
        <div className='aboutContent'>
            <h1>About</h1>
            <p>I'm a <span className='underline'>Self-taught Program</span>. Doing various Projects in different Tech Stack for my clients and my Projects. I'm interested in Building up real-time Projects, mainly in Web Technologies. So my main aim is to Build and Delopy a Real-time Project and Develop it!</p>
            <div className='btnWrappper'>
              <Button bg="black" color="white" link="https://github.com/mrkishorekumar" val="Github" className="mt-3" />
              <Button bg="white" color="black" link="https://www.linkedin.com/in/mrkishorekumar/" val="LinkedIn" className="mt-3" />
            </div>
        </div>
        <div className='aboutImage'>
            <img src={CodeTyping} alt="CodeTyping " />
        </div>
    </section>
  )
}

export default About