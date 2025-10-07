import React, { useRef } from 'react'

function Section_3() {
 
      const imgDivScroll = useRef(null);
  return (
  <div className="section-3 relative w-full  bg-black">
        <div
          ref={imgDivScroll}
          className="img1 font-[font2]  h-screen w-full sticky top-0"
        >
          <div className="section-3-marque  flex overflow-x-hidden lg:mt-0 lg:pt-3 pt-12 ">
            <div className="behindText flex items-center justify-between">
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Meggi
              </h1>
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Meggi
              </h1>
            </div>
            <div className="behindText flex items-center justify-between">
              <h1 className="text-[11vw] uppercase text-[#D3FD50]  ml-[15vw] ">
                Meggi
              </h1>
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Meggi
              </h1>
            </div>
          </div>
        <div className="frontText absolute lg:top-[25%] left-0 top-[40%] z-40   lg:mt-[3vw] flex  w-full overflow-x-hidden ">
          <div className="reverseText flex items-center justify-between w-full">
            <h1 className="text-[10vw] uppercase text-[#D3FD50] ml-[15vw] ">
              Roussin
            </h1>
            <h1 className="text-[3vw] uppercase text-white ml-[15vw] ">
              Developer
            </h1>
          </div>
          <div className="reverseText flex items-center justify-between w-full">
            <h1 className="text-[10vw] uppercase text-[#D3FD50] ml-[15vw] ">
              Roussin
            </h1>
            <h1 className="text-[3vw] uppercase text-white ml-[15vw] ">
              Developer
            </h1>
          </div>
        </div>
        <img
          className="rounded-xl  absolute lg:h-full   lg:w-96 w-[50vh]  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  object-cover"
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          alt=""
        />
        </div>
        <div className="img2   font-[font2] sticky top-0  h-screen w-full bg-black">
          <div className="section-3-marque  flex overflow-x-hidden  lg:mt-0 lg:pt-3 pt-12" >
            <div className="behindText flex items-center justify-between">
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Laurence
              </h1>
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Laurence
              </h1>
            </div>
            <div className="behindText flex items-center justify-between">
              <h1 className="text-[11vw] uppercase text-[#D3FD50]  ml-[15vw] ">
                Laurence
              </h1>
              <h1 className="text-[11vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Laurence
              </h1>
            </div>
          </div>
          <div className="frontText absolute lg:top-[25%] left-0 top-[40%] z-40   lg:mt-[3vw] flex  w-full overflow-x-hidden ">
            <div className="reverseText flex  items-center justify-between w-full">
              <h1 className="text-[10vw] uppercase text-[#D3FD50] ml-[15vw] ">
                Meunier
              </h1>
              <h1 className="text-[3vw] uppercase text-white  ml-[15vw] ">
               
                Designer
              </h1>
            </div>
            <div className="reverseText flex items-center justify-between w-full">
              <h1 className="text-[10vw] uppercase text-[#D3FD50]  ml-[15vw] ">
                Meunier
              </h1>
              <h1 className="text-[3vw] uppercase text-white  ml-[15vw] ">
           
                Designer
              </h1>
            </div>
          </div>
          <img
            className=" rounded-xl  absolute lg:h-full   lg:w-96 w-[50vh]  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  object-cover"
            src="https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg"
            alt=""
          />
        </div>
      </div>
  )
}

export default Section_3