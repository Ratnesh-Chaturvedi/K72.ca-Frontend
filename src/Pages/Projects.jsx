import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/common/Footer";
function Projects() {
  const projectImg = [
    {
      img1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      img2: "https://plus.unsplash.com/premium_photo-1758893665497-220a2c5affe5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img1: "https://plus.unsplash.com/premium_photo-1759345157520-66920771f7b1?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1759327718818-0cfee2207279?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img1: "https://images.unsplash.com/photo-1758621518225-9248e65dbaee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1741514230333-d6a6a89c4a40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img1: "https://images.unsplash.com/photo-1743701168206-bd617221b559?q=80&w=814&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
        {
      img1: "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1733758839991-a750b4ae0e7a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      img1: "https://images.unsplash.com/photo-1752440284390-26d0527bbb9f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1759697435549-ce523a5a233f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      img1: "https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://plus.unsplash.com/premium_photo-1745529078769-14f550bb6858?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      img1: "https://images.unsplash.com/photo-1754634026421-fa4237aaaf17?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://plus.unsplash.com/premium_photo-1756998574065-17f002525ea4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".cardDiv", {
      height:0,
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".projectCardDiv",
        start: "top 100%",
        end: "top -130%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:w-full h-screen  w-[100vw]    ">
      <div className="w-full h-[70%]  ">
        <div className="w-full h-full relative ">
          <h1 className="lg:text-[15vw] font-[font2] lg:leading-[14vw] uppercase absolute left-3 bottom-0 md:text-[8vw] text-[7vh]">
            Projects
          </h1>
          <p className="absolute font-[font2] lg:text-4xl  lg:bottom-[35%] lg:right-[20%]  bottom-[10%] sm:right-[40%] right-[40%] text-[20px] ">
            16
          </p>
        </div>
      </div>
      <div className="projectCardDiv  w-full    ">
        {projectImg.map((item, idx) => {
          return (
            <div
              className="cardDiv w-full  flex  mt-2 gap-2 lg:h-[400px] p-2 h-[200px] "
              id={idx}
            >
              <ProjectCard img1={item.img1} img2={item.img2} />
            </div>
          );
        })}
      </div>
<div className="w-full  rounded-t-4xl overflow-hidden">
  
      <Footer />
</div>
    </div>
  );
}

export default Projects;
