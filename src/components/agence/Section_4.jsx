import React, { useRef } from 'react'
import TeamMember from "./TeamMember";
function Section_4() {
   const teamMemberImg = useRef(null);

 
  const teamMembers = [
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    name: "Carl",
    designation: "Creative Director"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    name: "Olivier",
    designation: "Art Director"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    name: "Lawrence",
    designation: "Developer"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    name: "Hugo Joseph",
    designation: "Motion Designer"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    name: "Chantal G.",
    designation: "Project Manager"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    name: "Mylène S.",
    designation: "UX Designer"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    name: "Sophie A.",
    designation: "Strategist"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    name: "Claire",
    designation: "Copywriter"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    name: "Michèle",
    designation: "Account Director"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    name: "Mel",
    designation: "Studio Manager"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    name: "Camille",
    designation: "Designer"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    name: "Maxime",
    designation: "Frontend Developer"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    name: "Meggie",
    designation: "Project Coordinator"
  },
  {
    imageUrl: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    name: "Joël",
    designation: "Creative Strategist"
  }
];
  return (
    <div className="section-4  relative py-[10vw] w-full h-full p-1">
        <div className=".teamMembers w-full h-full relative">
          {teamMembers.map((item,idx)=>(
       
            <TeamMember key={idx} image={item.imageUrl} name={item.name} designation={item.designation} />
         
          ))}
        </div>
      </div>
  )
}

export default Section_4