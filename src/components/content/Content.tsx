"use client";
// import Image from "next/image";
// import github from "&/github.png";
import "./content.scss";
import { ContentBlock } from "./ContentBlock";
import { content1, content2, content3, content4 } from "./contentTable";
import { Description } from "./Description";
import { Introduce } from "./Introduxe";
import { PhotoBlock } from "./PhotoBlock";

export const Content = () => {
  return (
    <div className="w-full h-full font-onest flex flex-col lg:flex-row">
      <div className="flex flex-col h-full justify-evenly">
        <ContentBlock content={content1} />
        <ContentBlock content={content2} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Introduce />
        <PhotoBlock />
        <Description />
      </div>
      <div className="flex flex-col h-full justify-evenly">
        <ContentBlock content={content3} />
        <ContentBlock content={content4} />
      </div>

      {/* <section className="column one">
        <div className="block">
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="database in projects"
          >
            Firebase
          </p>
          <p
            className="p2 flying dontDisplay with-tooltip"
            data-tooltip="studying in process"
          >
            React
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="more then 20 projects"
          >
            VSCode
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="develop and build my apps with Vite"
          >
            Vite
          </p>
          <p
            className="p4 flying dontDisplay with-tooltip"
            data-tooltip="work with console"
          >
            GitHub
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="use always"
          >
            MVC
          </p>
          <p
            className="p4 flying dontDisplay with-tooltip"
            data-tooltip="helps to write good code"
          >
            ESLint
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="worked with real website"
          >
            SEO
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="use to write styles"
          >
            SASS
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="everyday using"
          >
            DevTools
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="tried it in one project"
          >
            Tilewind
          </p>
          <p className="p1 flying">MY SKILLS</p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="I like to work with classes"
          >
            OOP
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="develop all my projects with TS"
          >
            TypeScript
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="15 years of using"
          >
            Photoshop
          </p>
          <p
            className="p4 flying dontDisplay with-tooltip"
            data-tooltip="able to write proper config"
          >
            Webpack
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="pixel perfect HTML writing"
          >
            Figma
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="course in progress"
          >
            Node.js
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="my credo"
          >
            Agile
          </p>
          <p
            className="p2 flying dontDisplay with-tooltip"
            data-tooltip="more 20&nbsp;000 lines of code"
          >
            JavaScript
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="nice practice"
          >
            Scrum
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="up-to-date knowledge"
          >
            CSS
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="use trello"
          >
            Kanban
          </p>
          <p
            className="p3 flying dontDisplay with-tooltip"
            data-tooltip="up-to-date knowledge"
          >
            HTML
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="use in readme.md and pull requests"
          >
            Markdown
          </p>
          <p
            className="p4 flying dontDisplay with-tooltip"
            data-tooltip="able to deploy project using CLI"
          >
            Netlify
          </p>
          <p
            className="p5 flying dontDisplay with-tooltip"
            data-tooltip="finished course"
          >
            Performance
            <br />
            Optimization
          </p>
        </div>
        <div className="block">
          <p
            data-tooltip="3 kyu"
            className="p5 codewars flying dontDisplay with-tooltip"
          >
            CodeWars
          </p>
          <p
            data-tooltip="athamethedarkest@gmail.com"
            className="p3 email flying dontDisplay with-tooltip"
          >
            E-MAIL
          </p>
          <p className="p4 github flying dontDisplay">GitHub</p>
          <p className="p1 contacts flying">MY CONTACTS</p>
          <p className="p5 linkedin flying dontDisplay">LinkedIn</p>
          <p
            data-tooltip="+375(29)601-71-88"
            className="p2 phone flying dontDisplay with-tooltip"
          >
            Phone
          </p>
          <p
            data-tooltip="#1561"
            className="p5 design flying dontDisplay with-tooltip"
          >
            Discord
          </p>
          <p
            data-tooltip="https://t.me/HelgaAthame"
            className="p4 telegram flying dontDisplay"
          >
            Telegram
          </p>
        </div>
      </section>
      <section className="column two">
        <div className="block">
          <p className="p6 day-night">💡</p>
          <p className="p6">Hi!</p>
          <p className="p6">&nbsp;</p>
        </div>
        <div className="block">
          <p className="p7">My name is</p>
        </div>
        <div className="block">
          <p className="p9">OLGA</p>
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
          <section className="info__wrapper">
            <div className="info__photo"></div>
          </section>
          <section className="mini-col">
            <p className="p6 icon linkedin-icon">
              <Image src={github} alt={"gitnub logo"} />
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
      <section className="column three">
        <div className="block">
          <p className="p4 file-manager flying dontDisplay">File Manager</p>
          <p className="p4 gem-puzzle flying dontDisplay">Gem Puzzle</p>
          <p className="p5 crud-api flying dontDisplay">CRUD API</p>
          <p className="p2 bomberman flying dontDisplay">Bomberman</p>
          <p className="p5 websocket flying dontDisplay">Websocket Backend</p>
          <p className="p1 flying">MY PROJECTS</p>
          <p className="p5 medical-center flying dontDisplay">Medical Center</p>
          <p className="p3 online-store flying dontDisplay">Online Store</p>
          <p className="p5 async-race flying dontDisplay">Async Race</p>
          <p className="p5 news-api flying dontDisplay">News Api</p>
          <p className="p3 song-bird flying dontDisplay">Song Bird</p>
          <p className="p4 online-zoo flying dontDisplay">Online Zoo</p>
        </div>

        <div className="block">
          <p className="p4 seo-course flying dontDisplay">Pro SEO course</p>
          <p className="p3 node-js-course flying dontDisplay">
            Node.JS RS School
          </p>
          <p className="p2 javascript-course flying dontDisplay">
            JS Front End RS School
          </p>
          <p className="p5 university flying dontDisplay">University</p>
          <p className="p1 education flying">EDUCATION</p>
          <p className="p5 academy-of-science flying dontDisplay">
            Magistracy of the National Academy of Sciences
          </p>
          <p className="p5 design flying dontDisplay">Web Design course</p>
          <p className="p3 react-course flying dontDisplay">React RS School</p>
          <p className="p4 performance-optimization-course flying dontDisplay">
            Performance Optimization course
          </p>
        </div>
      </section> */}
    </div>
  );
};
