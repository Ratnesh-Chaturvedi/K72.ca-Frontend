import React from 'react'
import Video from './Video'

function HomeTextTop() {
  return (
    <div className='font-[font1] text-center lg:mt-3 mt-50 '>
        <div className='lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[9vw] uppercase '>L'étincelle</div>
        <div className='lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[9vw] uppercase flex items-center justify-center '>qui
           <span className='  lg:w-[15vw] lg:h-full w-16 mb-2  h-10  overflow-hidden rounded-full'><Video/></span>
            génère</div>
        <div className='lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[9vw] uppercase '>la créativité</div>
    </div>
  )
}

export default HomeTextTop