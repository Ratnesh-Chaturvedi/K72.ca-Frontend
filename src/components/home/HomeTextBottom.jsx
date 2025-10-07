import React from 'react'
import { Link } from 'react-router-dom'

function HomeTextBottom() {
  return (
    <div className='flex items-center justify-center gap-3 font-[font2] '>
        <Link className='lg:text-[6vw] text-[7vw] p-2 lg:leading-[7vw] border-2 border-white  rounded-full uppercase lg:px-4 cursor-pointer hover:text-yellow-300 hover:border-yellow-300 pt-2' to="/projects">Projects</Link>
        <Link className='lg:text-[6vw] text-[7vw] p-2 lg:leading-[7vw] border-2 border-white  rounded-full uppercase lg:px-4 cursor-pointer hover:text-yellow-300 hover:border-yellow-300 pt-2' to="/agence">Agency</Link>
      
    </div>
  )
}

export default HomeTextBottom