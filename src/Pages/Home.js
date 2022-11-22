import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Bouncing from '../Components/Bouncing'
import About from '../Components/About'
import Youtube from '../Components/Youtube'
import Journey from '../Components/Journey'

function Home() {
  return (
    <main>
      <section className='heroWapper'>
        <Navbar />
        <Hero />
        <Bouncing />
      </section>  
      <section className='aboutWapper' id='about'>
        <About />
      </section>
      <section className='youtubeWrapper'>
        <Youtube />
      </section>
      <section className='journeyWrapper' id='journey'>
        <Journey />
      </section>
      <section className='projectWrapper' id='project'>

      </section>
    </main>
  )
}

export default Home