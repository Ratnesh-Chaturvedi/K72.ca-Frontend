import React from 'react'
import Video from '../components/home/Video'
import HomeTextTop from '../components/home/HomeTextTop'
import HomeTextBottom from '../components/home/HomeTextBottom'

function Home() {
  return (
    <>
    <div className='w-full h-screen object-cover fixed '>
     <Video/>
    </div>
    <div className='w-full h-screen relative flex flex-col justify-between'>
      <HomeTextTop/>
      <HomeTextBottom/>
    </div>
    <div className='absolute top-[55%] right-[0] w-[25%] mr-[5%]  '><p className='font-[font1] text-[.8rem] leading-5'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p> </div>
    
    </>
  )
}

export default Home