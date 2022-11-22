import React from 'react'
import bounceEffectArrow from '../Asset/Images/down-arrow.svg'

function Bouncing() {
  return (
    <div className='bounceEffectWrapper'>
      <a href='#about'><img src={bounceEffectArrow} className="bounceEffect" alt="Bottom Arrow"/></a>
    </div>
  )
}

export default Bouncing