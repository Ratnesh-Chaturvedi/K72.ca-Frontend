import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

function Section_1() {
 const imageDivRef = useRef(null);
  const imgRef = useRef(null);
 gsap.registerPlugin(ScrollTrigger);
   const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
   useGSAP(() => {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 25%",
          end: "top -130%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          scrub: 1, 
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (e) => {
            let idx = Math.round(e.progress * (imageArray.length - 1));
            imgRef.current.src = imageArray[idx];
          },
        },
      });
  
   
    });
  return (
        <div className="section-1 w-full lg:mb-0  mb-[10vh] overflow-hidden ">
        <div
          ref={imageDivRef}
          className=" absolute lg:w-[15vw] lg:h-[20vw] w-[15vh] h-[20vh] lg:top-[25%] lg:left-[32%] rounded-2xl overflow-hidden top-[20%] left-[15%] "
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover  "
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>

        <div className="relative  ">
          <div className=" font-[font1] text-center pt-[29%]">
            <h2 className=" text-[19vw] leading-[16vw] uppercase">
              Soixan7e Douze
            </h2>
          </div>
          <div className="w-full lg:pl-[40%] pl-[30%] lg:mt-[3vw] text-start">
            <p className="lg:text-5xl font-[font1] lg:leading-[4vw] lg:mb-[5%] text-3xl leading-8 ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité
              nourrit notre créativité. On reste humbles et on dit non aux gros
              egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut faire de
              bons chiffres à court terme, mais on la tue à long terme. C’est
              pour ça qu’on s’engage à donner de la perspective, pour bâtir des
              marques influentes.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Section_1