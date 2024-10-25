import Image from "next/image";
import linkedin from "&/linkedin.png";
import github from "&/github.png";
import myPhoto from "&/myPhoto.jpg";

export const PhotoBlock = () => (
  <section className="group column two flex items-center justify-center md:absolute md:-translate-x-2/4 md:-translate-y-2/4 md:left-2/4 md:top-2/4">
    <div className="hidden group-hover:block">
      <p className="p6 day-night">💡</p>
      <p className="p6">Hi!</p>
      <p className="p6">&nbsp;</p>
    </div>
    <div className="block">
      <p className="p7">My name is</p>
    </div>
    <div className="block">
      <p className="p9">OLGA Khmaruk</p>
    </div>
    <div className="block" id="photo">
      <section className="mini-col">
        <p
          data-tooltip="+375(29)601-71-88"
          className="p6 icon with-tooltip phone-icon"
        >
          📞
        </p>
        <p
          data-tooltip="athamethedarkset@gmail.com"
          className="p6 icon with-tooltip main-icon"
        >
          ✉
        </p>
      </section>
      <section
        className="info__wrapper w-40 h-40 rounded-full transition-1000 p-2 border-solid border-4 border-sky-200]
      hover:border-32rem hover:margin-neg-3rem hover:border-[rgba(200,220,250,0)] hover:width-12rem hover:height-12rem"
      >
        <div
          className="info__photo msx-w-full max-h-full bg-red-200 overflow-hidden rounded-full grayscale-[50%] opacity-40 contrast-200
        hover:filter-none hover:width-12rem hover:height-12rem hover:shadow-custom hover:bg-size-12rem"
        >
          <Image src={myPhoto} alt={"my photo"} width={160} height={160} />
        </div>
      </section>
      <section className="mini-col">
        <p className="p6 icon linkedin-icon">
          <Image src={linkedin} alt={"linkedin icon"} width={50} height={50} />
        </p>
        <p className="p6 icon github-icon">
          <Image src={github} alt={"gihub icon"} width={50} height={50} />
        </p>
      </section>
    </div>
    <div className="block">
      <p className="p7">I&apos;m from </p>
    </div>
    <div className="block">
      <p className="p6">Minsk</p>
    </div>
    <div className="block">
      <p className="p7">I&apos;m looking for a full time job as a</p>
    </div>
    <div className="block">
      <p className="p8">JavaScript Front-End Developer</p>
    </div>
    <div className="block"></div>
  </section>
);
