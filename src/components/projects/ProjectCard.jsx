import React from "react";

function ProjectCard({ img1, img2 }) {
  return (
    <>
      <div className=" w-1/2  mt-1 hover:rounded-4xl transition-all  relative overflow-hidden">
        <img className=" h-full w-full object-cover " src={img1} alt="" />
        <div className="w-full h-full absolute  top-0  flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-all">
          <h2 className="font-[font2] text-4xl absolute uppercase border-2 border-white rounded-full p-2">
            Voir le Projets
          </h2>
        </div>
      </div>
      <div className=" w-1/2 hover:rounded-4xl overflow-hidden mt-1 relative transition-all ">
        <img className="  h-full w-full object-cover " src={img2} alt="" />
        <div className="w-full h-full absolute  top-0  flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-all">
          <h2 className="font-[font2] text-4xl absolute uppercase border-2 border-white rounded-full p-2">
            Voir le Projets
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
