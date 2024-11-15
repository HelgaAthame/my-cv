"use client";
// import Image from "next/image";
// import github from "&/github.png";
// import "./content.scss";
import { ContentBlock } from "./ContentBlock";
import { content1, content2, content3, content4 } from "./contentTable";
import { Description } from "./Description";
import { Introduce } from "./Introduxe";
import { PhotoBlock } from "./PhotoBlock";

export const Content = () => {
  return (
    <div className="w-full h-full font-onest flex flex-col lg:flex-row">
      <div className="flex flex-col h-full lg:min-h-screen justify-evenly">
        <ContentBlock content={content1} />
        <ContentBlock content={content2} />
      </div>
      <div className="relative z-10">
        <div
          className="flex flex-col justify-center items-center 
      lg:h-screen lg:sticky lg:top-0"
        >
          <div className="flex flex-col items-center gap-4 ">
            <Introduce />
            <PhotoBlock />
            <Description />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full lg:min-h-screen justify-evenly">
        <ContentBlock content={content3} />
        <ContentBlock content={content4} />
      </div>
    </div>
  );
};
