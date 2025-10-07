import React, { useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";

import Section_1 from "../components/agence/Section_1";
import Section_2 from "../components/agence/Section_2";
import Section_3 from "../components/agence/Section_3";
import Section_4 from "../components/agence/Section_4";
import Section_5 from "../components/agence/Section_5";

function Agence() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <div className="lg:w-full h-screen  ">
      <div className="section1 ">
        <Section_1 />
      </div>
      <div className="section-2">
        <Section_2 />
      </div>
      <div className="section-3 ">
        <Section_3 />
      </div>
      <div className="section-4">
        <Section_4 />
      </div>
      <div className="section-5">
           <Section_5 />
      </div>
   
    </div>
  );
}

export default Agence;
