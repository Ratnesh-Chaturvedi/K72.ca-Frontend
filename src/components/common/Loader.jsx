import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function Loader() {
  const parent = useRef(null);
  const innerParent = useRef(null);
  const loaderParent = useRef(null);

  const location = useLocation().pathname;

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(parent.current, {
      display: "block",
    });
    tl.from(".loader", {
      height: 0,
      stagger: {
        amount: -0.4,
      },
    });
    tl.to(".loader", {
        height:"100%",
      y: "100%",
      stagger: {
        amount: -0.4,
      },
    });

    tl.to(".loader", {
      y: "0",
      stagger: {
        amount: -0.4,
      },
    });
    tl.to(loaderParent.current,{
    display:"none",
    })
    tl.to(parent.current, {
     opacity:0,
     delay:.4,
     ease:"power2.out"
    });
tl.to(parent.current,{
        display:"none",
    })
  }, [location]);

  return (
    <div ref={parent} className="w-full h-screen fixed bg-black z-100 transition-all   ">
      <div ref={innerParent} className="part w-full h-full relative ">
        <div
          ref={loaderParent}
          className="inner w-[8vw] h-[5vw] absolute bottom-2 right-2  flex  overflow-y-hidden"
        >
          <div className="loader w-1/5 h-full bg-white "></div>
          <div className="loader w-1/5 h-full bg-white "></div>
          <div className="loader w-1/5 h-full bg-white "></div>
          <div className="loader w-1/5 h-full bg-white "></div>
          <div className="loader w-1/5 h-full bg-white "></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
