import React from 'react'
import Video from '../components/home/Video'
import HomeTextTop from '../components/home/HomeTextTop'
import HomeTextBottom from '../components/home/HomeTextBottom'

function Home() {
  return (
    <>
    <div className='w-full h-screen object-cover fixed bg-red-200'>
     <Video/>
    </div>
    <div className='w-full h-screen relative flex flex-col justify-between'>
      <HomeTextTop/>
      <HomeTextBottom/>
    </div>
    
    
    </>
  )
}

export default Home