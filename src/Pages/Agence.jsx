import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


function Agence() {

gsap.registerPlugin(ScrollTrigger)
 const imageDivRef=useRef(null)
const imgRef=useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
 useGSAP(()=>{
  gsap.to(imageDivRef.current,{

    scrollTrigger:
    {
      trigger:imageDivRef.current,
      start:"top 25%",
      end:"top -130%",
      scrub:1,
      pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
      onUpdate:(e)=>{
      let idx=(Math.round(e.progress*(imageArray.length-1)))
      imgRef.current.src=imageArray[idx];
      }
    }
  })
 })


  return (
    <div>
      <div className="section-1 ">
        <div ref={imageDivRef} className=" absolute w-[15vw] h-[20vw] top-[25%] left-[32%] rounded-2xl overflow-hidden">
          <img ref={imgRef}
            className="h-full w-full object-cover"
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
          <div className="w-full pl-[40%]">
            <p className="text-5xl font-[font1] leading-[4vw] mb-[5%]">
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
      <div className="section-2 h-screen font-[font1] text-xl ">
        <div className="flex items-center justify-between py-4 px-[10%] gap-[5%] h-[70%] mt-[5%]">

             <div className="flex flex-col justify-between h-[100%] "> 
              <h1>Expertise</h1>
              <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
             </div>
             <div className="flex flex-col justify-between  h-[100%]">
              <h1>  Stratégie <br /> Publicité <br />Branding <br />Branding <br />Contenu</h1>
              <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
             </div>
             <div className="flex flex-col justify-between  h-[100%]">
              <h1>
              
              </h1>
              <p>
                Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. 
              </p>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Agence;
