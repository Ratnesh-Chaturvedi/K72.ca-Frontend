import React from 'react'
import { Link } from 'react-router-dom'

function HomeTextBottom() {
  return (
    <div className='flex items-center justify-center gap-3 font-[font2] '>
        <Link className='text-[6vw] leading-[7vw] border-2 border-white  rounded-full uppercase px-4 cursor-pointer hover:text-yellow-300 hover:border-yellow-300 pt-2' to="/projects">Projects</Link>
        <Link className='text-[6vw] leading-[7vw] border-2 border-white  rounded-full uppercase px-4 cursor-pointer hover:text-yellow-300 hover:border-yellow-300 pt-2  ' to="/agence">Agence</Link>
    </div>
  )
}

export default HomeTextBottom