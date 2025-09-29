import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";


const Stair = (props) => {

    // to get the current parent we can use uselocation hook
 const currentPath=useLocation().pathname
const pageRef=useRef(null)

  const stairParent = useRef(null);
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to(stairParent.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y:"100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParent.current, {
      display:"none",
    });
    tl.to(".stair", {
      y:"0%",
    });
    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.5
       
    }) 
    
  },[currentPath]);

  return (
    <div>

    <div ref={stairParent} className="parent  fixed w-full h-screen  z-20">
      <div className="h-screen w-full flex ">
        <div className=" stair bg-black h-full w-1/5"></div>
        <div className=" stair bg-black h-full w-1/5"></div>
        <div className=" stair bg-red-500 h-full w-1/5"></div>
        <div className=" stair bg-black h-full w-1/5"></div>
        <div className=" stair bg-black h-full w-1/5"></div>
      </div>
    </div>
      <div ref={pageRef}> {props.children}
    </div>
    </div>
  );
};

export default Stair;
