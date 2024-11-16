"use client";

import { /*useEffect,*/ useEffect, useRef, useState } from "react";
export const StarBackground = () => {
  const spaceRef = useRef(null);
  const [limit, setLimit] = useState(1000);
  const starArr = new Array(limit).fill(0);

  const handleResize = () => {
    const newLimit = Math.floor(
      (window.innerHeight / 50) * (window.innerWidth / 50)
    );
    setLimit(newLimit);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="space -z-20 absolute h-full w-[99vw] left-[0.2rem] top-[0.2rem] overflow-hidden transform origin-center"
      ref={spaceRef}
    >
      {starArr.map((_el, ind) => (
        <div
          key={ind}
          className="star absolute w-[1px] h-[1px] bg-gray-400 opacity-0 animate-[glitter_8s_ease-in_infinite]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
