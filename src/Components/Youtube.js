import React from 'react'
import Button from './Button'
import YoutubeImg from '../Asset/Images/Youtube.svg'

function Youtube() {
  return (
    <section className='youtubeSectionWrapper'>
        <div className='aboutImage'>
            <img src={YoutubeImg} alt="YoutubeImg" loading="lazy" />
        </div>
        <div className='youtubeContent'>
            <h1>I learn, I Teach</h1>
            <p>I started a <span className='underline'>Youtube Channel</span> to help people who are Self-taught Programmers. Since I know the difficulty of learning programming languages, I make it simplified and better understandable for my viewers in tamil. This work helps a lot for me since I'm repeatedly learning programming Stuffs and others to Learn! You can find awesome Web development lessons here! Also, beginner to advanced programming tips and tricks that will take your coding skills to the next level.</p>
            <div className='btnWrappper'>
              <Button bg="white" color="black" link="http://youtube.com/mrkishorekumar?sub_confirmation=1" val="Subscribe" className="mt-3" />
              <Button bg="black" color="white" link="https://www.youtube.com/c/MRKishoreKumar/playlists" val="Check My Playlist" className="mt-3 borderWhite" />
            </div>
        </div>
    </section>
  )
}

export default Youtube