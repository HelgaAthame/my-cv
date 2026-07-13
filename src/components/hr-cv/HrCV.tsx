"use client";

import { useState } from "react";
import Image from "next/image";
import linkedin from "../../../public/linkedIn.avif";
import github from "../../../public/github.avif";
import myPhoto from "../../../public/myPhoto.avif";

export const HrCV = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "projects">("skills");

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row gap-6 items-center mb-12">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient shadow-premium-lg">
              <Image
                src={myPhoto.src}
                alt="Olga"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">Olga</h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-4">Frontend Developer</p>
            <p className="text-slate-600 max-w-2xl mb-4">
              Frontend developer with 3+ years of experience, including almost 2 years of commercial development.
              Skilled in React, Next.js, TypeScript, Node.js, and modern frontend technologies.
              Passionate about building scalable web applications and continuously learning new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-600">
              <a href="mailto:athamethedarkset@gmail.com" className="text-amber-600 hover:text-amber-700 font-medium">
                athamethedarkset@gmail.com
              </a>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600">+375 (29) 601-71-88</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600">Minsk, Belarus</span>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <a
                href="https://www.linkedin.com/in/olga-k-aa9054220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <Image src={linkedin.src} alt="LinkedIn" width={24} height={24} />
                LinkedIn
              </a>
              <a
                href="https://github.com/HelgaAthame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <Image src={github.src} alt="GitHub" width={24} height={24} />
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Key Skills */}
        <section className="mb-12 bg-slate-800/50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-sky-400 mb-4">Key Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Toolkit", "Node.js", "Supabase", "Drizzle ORM"].map((skill) => (
              <div key={skill} className="bg-slate-700/50 px-4 py-2 rounded-lg text-center text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* About Me */}
        <section className="mb-12 bg-slate-800/50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-sky-400 mb-4">About Me</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>3+ years in Frontend development, almost 2 years of commercial experience</li>
            <li>Deep knowledge of HTML, CSS, JavaScript with focus on React + Redux Toolkit</li>
            <li>Experience developing complex SPAs from scratch (online stores, messengers, games)</li>
            <li>Proficient with Next.js (SSR), TypeScript, and modern development tools</li>
            <li>Backend experience with Node.js, Express, Nest.js, and REST APIs</li>
            <li>Completed RS School courses with top rankings (1st place in React, 14th from 9000+ in JS/FE)</li>
            <li>Experience with testing (Vitest, Jest, Cypress, Playwright) and CI/CD</li>
            <li>Team development experience with Agile methodologies</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-400 mb-6">Experience</h2>
          
          <div className="space-y-8">
            {/* Laboratory42 */}
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Frontend Developer</h3>
                  <p className="text-sky-400">Laboratory42 (Lab42)</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">Jun 2023 - Present · 2 yrs</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">Belarus · On-site</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Developing and maintaining frontend applications using React and Next.js</li>
                <li>Collaborating with cross-functional teams to deliver high-quality software</li>
                <li>Implementing responsive and accessible user interfaces</li>
              </ul>
            </div>

            {/* CreativeIT */}
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Frontend Developer</h3>
                  <p className="text-sky-400">CreativeIT</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">Aug 2021 - Apr 2023 · 1 yr 9 mos</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">Minsk, Belarus</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Built responsive web applications using React.js and modern JavaScript</li>
                <li>Worked with HTML, CSS, and various frontend frameworks</li>
                <li>Collaborated with designers and backend developers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-400 mb-6">Featured Projects</h2>
          
          <div className="space-y-6">
            {/* PulseOps */}
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-100">PulseOps</h3>
                <a
                  href="https://pulse-ops-ai-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 text-sm"
                >
                  Live Demo →
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-3">
                SaaS revenue metrics with an AI analyst — a lightweight alternative to ChartMogul for indie founders.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Drizzle ORM", "Groq AI"].map((tech) => (
                  <span key={tech} className="bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Solo full-stack development: product, design, and engineering</li>
                <li>Event-sourced metrics architecture with pure domain logic</li>
                <li>AI analyst feature using Groq with strict JSON contracts</li>
                <li>Passwordless auth with passkeys, Google OAuth, and hCaptcha</li>
                <li>100% test coverage of domain layer with Vitest</li>
              </ul>
            </div>

            {/* E-commerce with SSR */}
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-100">E-commerce with Server-Side Rendering</h3>
                <a
                  href="https://store-example7.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 text-sm"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Next.js", "React", "TypeScript", "SSR"].map((tech) => (
                  <span key={tech} className="bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                Full-featured e-commerce application with server-side rendering for optimal SEO and performance.
              </p>
            </div>

            {/* Music Library */}
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-100">Music Library (Fullstack)</h3>
                <a
                  href="https://nest-next-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 text-sm"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Next.js", "Nest.js", "React", "TypeScript"].map((tech) => (
                  <span key={tech} className="bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                Full-stack music library application with Nest.js backend and Next.js frontend.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-400 mb-6">Education</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Belarusian State Academy of Sciences</h3>
                  <p className="text-slate-400">Master's degree</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">Grade: 9</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">The Rolling Scopes School</h3>
                  <p className="text-slate-400">React Course</p>
                </div>
                <span className="text-sky-400 text-sm mt-1 md:mt-0">Grade: 100% · 1st position</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">The Rolling Scopes School</h3>
                  <p className="text-slate-400">JS/FE Front-end Developer Course</p>
                </div>
                <span className="text-sky-400 text-sm mt-1 md:mt-0">14th position from 9000+ students</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">The Rolling Scopes School</h3>
                  <p className="text-slate-400">Node.js Course</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">Jun 2021 – Aug 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sky-400 mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold text-slate-100 mb-3">Frontend</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>React (hooks, JSX, router)</li>
                <li>Redux (thunk, RTK, RTK Query)</li>
                <li>Next.js (SSR, auth, routing)</li>
                <li>TypeScript, JavaScript ES6+</li>
                <li>HTML5 (semantic, pixel perfect)</li>
                <li>CSS (SCSS, Tailwind v4, modules, styled components)</li>
                <li>Adaptive & responsive layout (flex, grid)</li>
                <li>React Query, Zustand, Formik, Hook Form</li>
                <li>Vite, Webpack, Babel</li>
                <li>Lucide React, Recharts (data visualization)</li>
                <li>next-themes, class-variance-authority</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold text-slate-100 mb-3">Backend & Database</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Node.js, Express, Nest.js</li>
                <li>MongoDB, Mongoose</li>
                <li>PostgreSQL (with pg driver)</li>
                <li>Supabase (auth, realtime, database)</li>
                <li>Drizzle ORM, Firebase (auth, firestore)</li>
                <li>REST APIs, GraphQL (SDL)</li>
                <li>WebSockets, Socket.io</li>
                <li>Swagger/OpenAPI</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold text-slate-100 mb-3">Testing & DevOps</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Vitest (with coverage), Jest, Chai, Mocha, Istanbul</li>
                <li>Cypress, Playwright, React Testing Library</li>
                <li>Git (GitHub, GitLab)</li>
                <li>Docker, CI/CD (GitHub Actions)</li>
                <li>Netlify, Vercel</li>
                <li>Postman, DevTools</li>
                <li>ESLint, Prettier</li>
                <li>drizzle-kit (migrations)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold text-slate-100 mb-3">AI Tools & Development</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Claude, GPT, Grok, Gemini</li>
                <li>Cursor, Windsurf, CodeX</li>
                <li>Cascade (AI pair programming)</li>
                <li>AI-assisted development workflow</li>
                <li>Prompt engineering for code generation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold text-slate-100 mb-3">Other</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Phaser (game development), Unity (C#)</li>
                <li>Design patterns, OOP, MVC</li>
                <li>Agile (Scrum, Kanban; Jira, Trello)</li>
                <li>Markdown, Git Bash</li>
                <li>Figma, Photoshop</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 mt-6">
            <h3 className="font-bold text-slate-100 mb-3">Soft Skills</h3>
            <ul className="text-slate-300 text-sm space-y-1 md:grid md:grid-cols-2 md:gap-x-8">
              <li>Team development experience</li>
              <li>Quick learner of new technologies</li>
              <li>Dedicated and responsible</li>
              <li>Process optimization mindset</li>
              <li>Always delivers on time</li>
              <li>Effective communication</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm py-8 border-t border-slate-700">
          <p>© 2024 Olga. Built with Next.js, React, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};
