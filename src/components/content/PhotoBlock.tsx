"use client";
import Image from "next/image";
import linkedin from "&/linkedin.png";
import github from "&/github.png";
import myPhoto from "&/myPhoto.jpg";
import { Fragment, useState } from "react";

export const PhotoBlock = () => {
  const [show, setShow] = useState(false);
  return (
    <section
      onClick={() => {
        setShow((prev) => !prev);
      }}
      className="info__wrapper w-40 h-40 rounded-full duration-1000 p-2 border-solid
      border-4 border-sky-200 hover:margin-neg-3rem relative hover:shadow-glow
      hover:width-12rem hover:height-12rem group
      cursor-pointer"
    >
      <div
        className="info__photo max-w-full max-h-full bg-red-200 overflow-hidden 
        rounded-full grayscale-[50%] opacity-40 contrast-200 hover:filter-none duration-200
        hover:width-12rem hover:height-12rem hover:shadow-smallglow hover:bg-size-12rem
        hover:opacity-80"
      >
        <Image src={myPhoto} alt={"my photo"} width={160} height={160} />
      </div>
      {show && (
        <Fragment>
          <div
            data-tooltip="+375(29)601-71-88"
            className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center
            rounded-full border-4 border-solid with-tooltip phone-icon absolute 
            -top-6 -left-14 overflow-hidden hover:shadow-smallglow"
          >
            📞
          </div>
          <div
            data-tooltip="athamethedarkset@gmail.com"
            className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -top-6 -right-14 absolute with-tooltip
             main-icon overflow-hidden hover:shadow-smallglow"
          >
            ✉
          </div>
          <div
            className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -bottom-6 -right-14 absolute linkedin-icon
             overflow-hidden hover:shadow-smallglow"
          >
            <Image
              src={linkedin}
              alt={"linkedin icon"}
              width={50}
              height={50}
            />
          </div>
          <div
            className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -bottom-6 -left-14 absolute github-icon
             overflow-hidden hover:shadow-smallglow"
          >
            <Image src={github} alt={"gihub icon"} width={50} height={50} />
          </div>
        </Fragment>
      )}
    </section>
  );
};
