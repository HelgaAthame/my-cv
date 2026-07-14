"use client";

import { useEffect, useRef, useState } from "react";

type Star = { top: number; left: number; delay: number };

export const StarBackground = () => {
  const spaceRef = useRef(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generate = () => {
      const limit = Math.floor(
        (window.innerHeight / 50) * (window.innerWidth / 50)
      );
      setStars(
        Array.from({ length: limit }, () => ({
          top: Math.random() * 100,
          left: Math.random() * 100,
          delay: Math.random() * 8,
        }))
      );
    };

    generate();
    window.addEventListener("resize", generate);

    return () => {
      window.removeEventListener("resize", generate);
    };
  }, []);

  return (
    <div
      className="space -z-20 absolute h-full w-[99vw] left-[0.2rem] top-[0.2rem] overflow-hidden transform origin-center"
      ref={spaceRef}
    >
      {stars.map((star, ind) => (
        <div
          key={ind}
          className="star absolute w-[1px] h-[1px] bg-gray-400 opacity-0 animate-[glitter_8s_ease-in_infinite]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
