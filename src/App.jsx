import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Agence from "./Pages/Agence"
import Projects from "./Pages/Projects"
import Navbar from './components/Navigation Bar/Navbar'


const App = () => {

  return (
    <>
 <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agence" element={<Agence/>} />
        <Route path="/projects" element={<Projects/>} />

    </Routes>
    </>
  )
}

export default App