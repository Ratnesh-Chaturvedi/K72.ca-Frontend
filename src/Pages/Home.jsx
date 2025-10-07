import React from 'react'
import Video from '../components/home/Video'
import HomeTextTop from '../components/home/HomeTextTop'
import HomeTextBottom from '../components/home/HomeTextBottom'

function Home() {
  return (
    
    <div >

    <div className='fixed w-full h-screen object-cover  '>
     <Video/>
    </div>
    <div className='w-full h-screen relative flex flex-col justify-between'>
      <HomeTextTop/>
      <HomeTextBottom/>
    </div>
    <div className='absolute lg:top-[55%] top-[55%] right-[0] lg:w-[25%] lg:mr-[5%] w-[70%]  sm:top-[40%] sm:w-[60%]   '>
      <p className='font-[font1] text-[3vw] lg:text-[16px]  lg:leading-tight leading-[3vw] '> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p> </div>
    
    </div>
    
  )
}

export default Home