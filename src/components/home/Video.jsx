import React from 'react'
import vid from '../../assets/vid.mp4'

function Video() {
  return (
    <div className='w-full h-full object-cover'>
      <video autoPlay muted loop src={vid} className="w-full h-full object-cover" />
    </div>
  )
}

export default Video
