import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavC } from '../context/NavContext';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Footer() {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: 'power2.out',
    });
  }
  const navigate=useNavigate()
  const [navOpen, setNavOpen] = useContext(NavC);
  return (
    <div className='w-full h-[65vh] '>

    <div className='relative  w-full p-5 h-full bg-black text-white '>
     <div className="  wrapper font-[font2] flex flex-col  ">
        <div className="top flex items-center justify-between">
            <div className="left flex items-center gap-2 ">
                <h1 className='lg:text-[4vw] lg:w-[8vw] text-center lg:leading-[4vw] pt-1   rounded-full  border-2 text-xl  w-[6vh] border-white hover:text-[#D3FD50] hover:border-[#D3FD50]'>FB</h1>
                <h1 className='lg:text-[4vw] lg:w-[8vw] text-center lg:leading-[4vw] pt-1   rounded-full  border-2 text-xl  w-[6vh] border-white hover:text-[#D3FD50] hover:border-[#D3FD50]]'>IG</h1>
                <h1 className='lg:text-[4vw] lg:w-[8vw] text-center lg:leading-[4vw] pt-1   rounded-full  border-2 text-xl  w-[6vh] border-white hover:text-[#D3FD50] hover:border-[#D3FD50]'>IN</h1>
                <h1 className='lg:text-[4vw] lg:w-[8vw] text-center lg:leading-[4vw] pt-1   rounded-full  border-2 text-xl  w-[6vh] border-white hover:text-[#D3FD50] hover:border-[#D3FD50]'>BE</h1>
               
            </div>
            <div className="right">
              <h1 className='lg:text-[4vw] lg:w-[18vw] text-center lg:leading-[4vw] lg:pt-1  text-xl w-fit p-1  rounded-full  border-2 border-white  hover:text-[#D3FD50] hover:border-[#D3FD50]' >Contact</h1>
            </div>
        </div>
        <div className="absolute bottom-0 btm w-full px-10  " >
            <div className='flex items-center justify-between'>

            <div className="time">
                <h1 className='text-xl  hover:text-[#D3FD50] hover:border-[#D3FD50]'>Monteral</h1>
            </div>
            <div className="links lg:flex lg:items-center lg:justify-between lg:gap-5 hidden ">
                <h3 onClick={()=>{
            navigate("/projects")
            setNavOpen(false)
          }} className='text-xl  cursor-pointer  hover:text-[#D3FD50] hover:border-[#D3FD50]'>Project</h3>
                <h3 onClick={()=>{
            navigate("/agence")
            setNavOpen(false)
          }} className='text-xl  cursor-pointer  hover:text-[#D3FD50] hover:border-[#D3FD50]' >Agence</h3>
                <h3 onClick={()=>{
            navigate("/")
            setNavOpen(false)
          }} 
                className='text-xl  cursor-pointer  hover:text-[#D3FD50] hover:border-[#D3FD50]'>Contact</h3>
                <h3 onClick={()=>{
            navigate("/")
            setNavOpen(false)
          }} className='text-xl  cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50]'>About</h3>
            </div>
            <div className="returnToTop">
                <h3 onClick={scrollToTop} className='text-xl  cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50]'>Return to top</h3>
            </div>
            </div>
        </div>
     </div>
      
    </div>

    </div>
  )
}

export default Footer