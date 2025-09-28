import React from 'react'
import Video from './Video'

function HomeTextTop() {
  return (
    <div className='font-[font1] text-center mt-3'>
        <div className='text-[9.5vw] leading-[8vw] uppercase '>L'étincelle</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center '>qui
           <span className='  w-[15vw] mb-2 overflow-hidden rounded-full'><Video/></span>
            génère</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase '>la créativité</div>
    </div>
  )
}

export default HomeTextTop