import React, { useRef, useState } from 'react';

function TeamMember(props) {
  const overlay = useRef(null);
  const textleft = useRef(null);
  const textright = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    overlay.current.style.height = "100%";
    textleft.current.style.color = "black";
    textright.current.style.color = "black";
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    overlay.current.style.height = "0%";
    textleft.current.style.color = "white";
    textright.current.style.color = "white";
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-[10vh] sm:h-[12vh] md:h-[14vh] lg:h-[10vh] transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* IMAGE - show only on hover */}
      {isHovered && (
        <img
          src={props.image}
          alt={props.name}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] z-20 object-cover rounded-xl transition-all duration-300"
        />
      )}

      {/* TEXT SECTION */}
      <div className="relative w-full h-full border-y border-white transition-all">
        <div
          ref={textleft}
          className="absolute z-10 left-0 text-white font-[font1] text-sm sm:text-base md:text-lg lg:text-[1.4vw] uppercase p-2"
        >
          {props.designation}
        </div>
        <div
          ref={textright}
          className="absolute z-10 right-0 text-white font-[font2] text-base sm:text-xl md:text-2xl lg:text-[2.5vw] uppercase p-2"
        >
          {props.name}
        </div>
        <div
          ref={overlay}
          className="absolute top-0 w-full h-0 bg-[#D3FD50] transition-all duration-300"
        ></div>
      </div>
    </div>
  );
}

export default TeamMember;
