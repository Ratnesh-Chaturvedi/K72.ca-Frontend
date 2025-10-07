import React, { useRef } from "react";
import Footer from "../common/Footer";

function Section_5() {
  const wrapper = useRef(null);
  return (
    <div ref={wrapper} className=" relative w-full ">
      <div className=" projects  project1  w-full sticky top-0 rounded-t-3xl  overflow-hidden">
        <div className="relative ">
          <img      
            className="img1 w-full h-[100vh] object-cover "
            src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
            alt=""
          />
          <div className=".texts absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[font2] uppercase text-center ">
            <h1 className="text-3xl">Lamajeure</h1>
            <h1 className="lg:text-[8vw] text-[15vw]">Lamajeure</h1>
          </div>
        </div>
      </div>
      <div className="projects  project2 w-full sticky top-0  rounded-t-3xl overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-[100vh] object-contain bg-red-700   "
            src="https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
            alt=""
          />
          <div className=".texts absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[font2] uppercase text-center ">
            <h1 className="text-3xl">GardaWorld</h1>
            <h1 className="text-[8vw]">Crisis24</h1>
          </div>
        </div>
      </div>
      <div className="projects project3 w-full sticky top-0  rounded-t-3xl overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-[100vh] object-cover bg-[#EDEDED]  "
            src="https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124"
            alt=""
          />
          <div className=".texts absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[font2] uppercase text-center ">
            <h1 className="text-3xl">GardaWorld</h1>
            <h1 className="text-[8vw]">Crisis24</h1>
          </div>
        </div>
      </div>
      <div className="footer w-full bg-red-400 sticky top-0 rounded-t-3xl overflow-hidden ">
      <Footer/>

      </div>
    </div>
  );
}

export default Section_5;
