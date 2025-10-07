
import React, { createContext, useState } from 'react'



export const NavC=createContext();
function NavContext({children}) {
    const [navOpen,setNavOpen]=useState(false);
  return (
    <div>
        <NavC.Provider value={[navOpen,setNavOpen]}>
        { children}
        </NavC.Provider>
        </div>
  )
}

export default NavContext
