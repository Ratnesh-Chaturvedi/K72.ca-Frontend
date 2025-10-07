import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Agence from "./Pages/Agence"
import Projects from "./Pages/Projects"
import Navbar from './components/Navigation Bar/Navbar'
import FullScreenNav from './components/Navigation Bar/FullScreenNav'
import Loader from './components/common/Loader'


const App = () => {


  return (
    <>
 <Navbar/>
    {/* <Loader/> */}
    <FullScreenNav/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agence" element={<Agence/>} />
        <Route path="/projects" element={<Projects/>} />

    </Routes>
    </>
  )
}

export default App