import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

function Section_2() {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const middleRef = useRef(null)
  const rightRef = useRef(null)

  useGSAP(() => {
    gsap.from(leftRef.current, {
      opacity: 0,
      scale: 1.5,
      color:"red",
      duration: .8,
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      
    })
    gsap.from(middleRef.current, {
      opacity: 0,
      scale: 1.5,
      color:"red",
      duration: .8,
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      }
    })
    gsap.from(rightRef.current, {
      opacity: 0,
      scale: 1.5,
      color:"red",
      duration: .8,
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      }
    })
  }, [])

  return (
    <div className='w-full h-screen lg:mt-3 '>
      <div className="section-2 lg:h-screen h-full font-[font1] lg:text-xl" ref={sectionRef}>
        <div className="flex   lg:items-center lg:justify-between py-4 px-[10%] lg:gap-[5%] h-[80%] mt-[5%] gap-[20px]  ">
          <div className="leftText flex flex-col justify-between h-full" ref={leftRef}>
            <h1>Expertise</h1>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div className="middleText flex flex-col justify-between h-full" ref={middleRef}>
            <h1>
              Stratégie <br /> Publicité <br />
              Branding <br />
              Branding <br />
              Contenu
            </h1>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>
          <div className="rightText flex flex-col justify-between h-[100%]" ref={rightRef}>
            <h1></h1>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_2