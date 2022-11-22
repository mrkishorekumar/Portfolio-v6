import React, { useState } from 'react'
import JourneyList from '../Utils/Journey.json'
import JourneyImg from '../Asset/Images/Journey.svg'
import Left from '../Asset/Images/LeftArrow.svg'
import Right from '../Asset/Images/RightArrow.svg'

function Journey() {

    const [state, setState] = useState(0)

    const next = () => {
        if (state < JourneyList.length - 1) {
            setState(prev => prev + 1)
        }
    }

    const previous = () => {
        if (state > 0) {
            setState(prev => prev - 1)
        }
    }

    return (
        <section className='journeySectionWrapper'>
            <div className='journeyTitle'>
                <h1>Journey</h1>
                <p>The Journey I went throw was challenging for me. Although I chose Information Technology as my field, my education was not related; it became one of <span className='underline'>my favorite paths</span>. So I started exploring a lot in it.</p>
            </div>
            <div className='journeyContent'>
                <div className='youtubeContent'>
                    <h1>{JourneyList[state].title}</h1>
                    <p>{JourneyList[state].para}</p>
                    <div className='sliderButton'>
                        <div><img src={Left} alt="LeftArrow" className='arrow' onClick={previous} loading="lazy" /></div>
                        <div><img src={Right} alt="Arrow" className='arrow' onClick={next} loading="lazy" /></div>
                    </div>
                </div>
                <div className='aboutImage'>
                    <img src={JourneyImg} alt="JourneyImg" loading="lazy" />
                </div>
            </div>
        </section>
    )
}

export default Journey