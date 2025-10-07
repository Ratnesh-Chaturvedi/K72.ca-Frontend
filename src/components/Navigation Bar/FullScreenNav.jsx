import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { React, useContext, useRef } from "react";
import { NavC } from "../context/NavContext";
import { useNavigate } from "react-router-dom";

function FullScreenNav() {
  const navigate=useNavigate();
 const bottomPart=useRef(null)
  const fullSNav = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavC);

  function gsapAnimation() {
    const tl = gsap.timeline();
    gsap.to(fullSNav.current, {
      display: "block",
    });
    tl.to(".stairRing", {
      height: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".allLinks", {
      opacity: 1,
    });
    
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".stairRing", {
      height: "0%",
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".allLinks", {
      opacity: 1,
    });
    tl.to(fullSNav.current, {
      display: "none",
    });
   
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );
  return (
    <div
      ref={fullSNav}
      className="  z-50    w-full h-screen overflow-hidden fixed"
    >
      <div className="h-screen w-full  fixed ">
        <div className="h-full w-full flex  ">
          <div className=" stairRing bg-black h-full w-1/5"></div>
          <div className="stairRing   bg-black h-full w-1/5"></div>
          <div className=" stairRing  bg-black h-full w-1/5"></div>
          <div className=" stairRing  bg-black h-full w-1/5"></div>
          <div className=" stairRing  bg-black h-full w-1/5"></div>
        </div>
      </div>

      <div  className=" relative z-40  ">
        <div className="flex items-center justify-between   ">
          <div className="link lg:p-3 lg:w-36 w-30 pl-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className=" relative  w-20 h-20 cursor-pointer "
          >
            <div className="absolute link  w-1 h-full bg-amber-300 left-0   rotate-45 "></div>
            <div className="absolute link w-1 h-full bg-amber-300 left-0   -rotate-45"></div>
          </div>
        </div>

        <div className="allLinks  flex flex-col items-center justify-center  w-full lg:mt-[3vw] mt-[20vh]">
          <div onClick={()=>{
            navigate("/projects")
            setNavOpen(false)
          }} className=" link origin-top relative  border-t-1 border-t-white w-full  overflow-hidden ">
            <h1 className="font-[font2] lg:pt-2 lg:text-[8vw] uppercase text-center  lg:leading-[7vw] 
            text-[8vh] leading-[8vh]">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50] h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 See Everything
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover "
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                   See Everything
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                    See Everything
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                   See Everything
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
          onClick={()=>{
            navigate("/agence")
              setNavOpen(false)
          }} className="link origin-top relative  border-t-1 border-t-white w-full  overflow-hidden ">
            <h1 className="font-[font2] lg:pt-2 lg:text-[8vw] uppercase text-center  lg:leading-[7vw] 
            text-[8vh] leading-[8vh]">
              Agency
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50] h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 Know US
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover "
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                  Know US
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                   Know US
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                   Know US
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div onClick={()=>{
            navigate("/")
              setNavOpen(false)
          }} className="link origin-top relative  border-t-1 border-t-white w-full  overflow-hidden ">
            <h1 className="font-[font2] lg:pt-2 lg:text-[8vw] uppercase text-center  lg:leading-[7vw] 
            text-[8vh] leading-[8vh]">
             Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50] h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                Send us a fax
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover "
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                  Send us a fax
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 Send us a fax
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                   Send us a fax
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div onClick={()=>{
            navigate("/")
              setNavOpen(false)
          }} className="link origin-top relative  border-y-1 border-t-white w-full  overflow-hidden ">
            <h1 className="font-[font2] lg:pt-2 lg:text-[8vw] uppercase text-center  lg:leading-[7vw] 
            text-[8vh] leading-[8vh]">
              Blog
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50] h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                  Read articles
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover "
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 Read articles
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 Read articles
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw]   text-center lg:leading-[7vw]  uppercase
                 text-[8vh] leading-[8vh]">
                 Read articles
                </h2>
                <img
                  className=" rounded-full shrink-0 lg:w-38 w-30 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        
          
         
        </div>
        <div>
          
        </div>
      </div>
     <div ref={bottomPart} className='absolute link bottom-0 w-full font-[font2] '>
 <div className="flex items-center justify-between  p-2">

            <div className="time lg:w-1/3 w-1/2 text-start">
                <h1 className='text-xl'>Monteral</h1>
            </div>
            <div className=" lg:w-1/3  links lg:flex items-center justify-center gap-5 hidden ">
                <h3 className='text-xl'>Project</h3>
                <h3 className='text-xl' >Agence</h3>
                <h3 className='text-xl'>Contact</h3>
                <h3 className='text-xl'>About</h3>
            </div>
            <div className="lg:w-1/3 w-1/2 font-[font1]">
                <div className="left flex items-center justify-center gap-2">
                <h1 className='lg:text-[2vw] lg:w-[5vw] text-center lg:leading-[3vw] pt-1 text-xl w-[7vh]  rounded-full  border-2 border-white hover:text-[#D3FD50] hover:border-[#D3FD50] '>FB</h1>
                <h1 className='lg:text-[2vw] lg:w-[5vw] text-center lg:leading-[3vw] pt-1 text-xl w-[7vh]  rounded-full  border-2 border-white hover:text-[#D3FD50] hover:border-[#D3FD50]   '>IG</h1>
                <h1 className='lg:text-[2vw] lg:w-[5vw] text-center lg:leading-[3vw] pt-1 text-xl w-[7vh]  rounded-full  border-2 border-white hover:text-[#D3FD50] hover:border-[#D3FD50] '>IN</h1>
                <h1 className='lg:text-[2vw] lg:w-[5vw] text-center lg:leading-[3vw] pt-1 text-xl w-[7vh]  rounded-full  border-2 border-white hover:text-[#D3FD50] hover:border-[#D3FD50]  '>BE</h1>
               
            </div>
            </div>
 </div>
            </div>
    </div>
  );
}

export default FullScreenNav;
