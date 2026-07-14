"use client";

import Image from "next/image";
import {
  Mail,
  Send,
  MapPin,
  Printer,
  ExternalLink,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code2,
  Database,
  FlaskConical,
  Bot,
  Layers,
} from "lucide-react";
import linkedinLogo from "../../../public/linkedIn.avif";
import githubLogo from "../../../public/github.avif";
import myPhoto from "../../../public/myPhoto2.jpg";

const keySkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Toolkit", "Node.js", "Supabase", "JavaScript"];

const aboutPoints = [
  "4+ years of commercial Frontend development experience",
  "Deep understanding of AI-assisted development — orchestrating Claude, Codex, GPT and other leading models into a fast, production-grade workflow",
  "Deep knowledge of HTML, CSS, JavaScript with focus on React + Redux Toolkit",
  "Contributed to 20+ commercial projects across different domains, team sizes, and tech stacks",
  "Experience developing complex SPAs from scratch (online stores, messengers, games)",
  "Proficient with Next.js (SSR), TypeScript, and modern development tools",
  "Backend experience with Node.js, Express, Nest.js, REST APIs, and Supabase",
  "Completed RS School courses with top rankings (1st place in React, 14th from 9000+ in JS/FE)",
  "Experience with testing (Vitest, Jest, Cypress, Playwright) and CI/CD",
  "Team development experience with Agile methodologies",
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Laboratory42 (Lab42)",
    period: "Jun 2023 - Present · 3 yrs",
    location: "Belarus · On-site",
    points: [
      "Developing and maintaining frontend applications using React and Next.js",
      "Collaborating with cross-functional teams to deliver high-quality software",
      "Implementing responsive and accessible user interfaces",
    ],
  },
  {
    role: "Frontend Developer",
    company: "CreativeIT",
    period: "Aug 2021 - Apr 2023 · 1 yr 9 mos",
    location: "Minsk, Belarus",
    points: [
      "Built responsive web applications using React.js and modern JavaScript",
      "Worked with HTML, CSS, and various frontend frameworks",
      "Collaborated with designers and backend developers",
    ],
  },
];

const education = [
  { school: "Belarusian State Academy of Sciences", degree: "Master's degree", note: "GPA: 9/10" },
  { school: "The Rolling Scopes School", degree: "React Course", note: "100% · 1st position" },
  { school: "The Rolling Scopes School", degree: "JS/FE Front-end Developer Course", note: "14th of 9000+" },
  { school: "The Rolling Scopes School", degree: "Node.js Course", note: "Jun – Aug 2021" },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React (hooks, JSX, router)", "Redux (thunk, RTK, RTK Query)", "Next.js (SSR, auth, routing)",
      "TypeScript", "JavaScript ES6+", "HTML5 (semantic, pixel perfect)", "SCSS", "Tailwind v4",
      "CSS Modules", "Styled Components", "Flex & Grid layout", "React Query", "Zustand",
      "Formik", "React Hook Form", "Zod", "Vite", "Webpack", "Babel", "Lucide React", "Recharts",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: [
      "Node.js", "Express", "Nest.js", "MongoDB", "Mongoose", "PostgreSQL", "Supabase",
      "Drizzle ORM", "Firebase", "REST APIs", "GraphQL", "WebSockets", "Socket.io", "Swagger/OpenAPI",
    ],
  },
  {
    title: "Testing & DevOps",
    icon: FlaskConical,
    items: [
      "Vitest", "Jest", "Chai", "Mocha", "Istanbul", "Cypress", "Playwright",
      "React Testing Library", "Git", "Docker", "GitHub Actions", "Netlify", "Vercel", "ESLint", "Prettier",
    ],
  },
  {
    title: "AI Tools & Development",
    icon: Bot,
    items: ["Claude", "Codex", "GPT", "Gemini", "Grok", "Cursor", "Windsurf", "Cascade", "Prompt engineering"],
  },
  {
    title: "Other",
    icon: Layers,
    items: ["Phaser", "Unity (C#)", "OOP & Design Patterns", "Agile / Scrum / Kanban", "Jira", "Trello", "Figma", "Photoshop"],
  },
];

const projects = [
  {
    name: "PulseOps",
    featured: true,
    link: "https://pulse-ops-ai-five.vercel.app/",
    description: "SaaS revenue metrics with an AI analyst — a lightweight alternative to ChartMogul for indie founders.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Drizzle ORM", "Groq AI"],
    points: [
      "Solo full-stack development: product, design, and engineering",
      "Event-sourced metrics architecture with pure domain logic",
      "AI analyst feature using Groq with strict JSON contracts",
      "Passwordless auth with passkeys, Google OAuth, and hCaptcha",
      "100% test coverage of domain layer with Vitest",
    ],
  },
  {
    name: "E-commerce with Server-Side Rendering",
    link: "https://store-example7.vercel.app/",
    description: "Full-featured e-commerce application with server-side rendering for optimal SEO and performance.",
    tech: ["Next.js", "React", "TypeScript", "SSR"],
  },
  {
    name: "Music Library (Fullstack)",
    link: "https://nest-next-kappa.vercel.app/",
    description: "Full-stack music library application with Nest.js backend and Next.js frontend.",
    tech: ["Next.js", "Nest.js", "React", "TypeScript"],
  },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
    <span className="w-1.5 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
    {children}
  </h2>
);

export const HrCV = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 space-y-6">
            <div className="bg-white rounded-2xl shadow-premium-lg overflow-hidden print-card">
              <div className="h-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
              <div className="px-6 pb-6 -mt-12 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-white shadow-premium">
                  <div className="w-full h-full" style={{ transform: "scale(3.1)", transformOrigin: "47% 27%" }}>
                    <Image
                      src={myPhoto.src}
                      alt="Olga"
                      width={432}
                      height={436}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h1 className="mt-4 text-2xl font-bold text-slate-900">Olga</h1>
                <p className="text-amber-600 font-medium">Frontend Developer (Full-Stack)</p>

                <button
                  onClick={() => window.print()}
                  className="no-print mt-4 inline-flex items-center gap-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Printer size={16} />
                  Save as PDF
                </button>

                <div className="w-full mt-6 pt-6 border-t border-slate-100 space-y-3 text-left">
                  <a
                    href="mailto:olgaivanovna2304@gmail.com"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 break-all"
                  >
                    <Mail size={16} className="text-amber-500 shrink-0" />
                    olgaivanovna2304@gmail.com
                  </a>
                  <a
                    href="https://t.me/HelgaAthame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600"
                  >
                    <Send size={16} className="text-amber-500 shrink-0" />
                    @HelgaAthame
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <MapPin size={16} className="text-amber-500 shrink-0" />
                    Minsk, Belarus
                  </div>
                  <a
                    href="https://www.linkedin.com/in/olga-k-aa9054220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600"
                  >
                    <Image src={linkedinLogo.src} alt="" width={16} height={16} className="shrink-0" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/HelgaAthame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600"
                  >
                    <Image src={githubLogo.src} alt="" width={16} height={16} className="shrink-0" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-premium p-6 print-card">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500 mb-4">
                <Sparkles size={16} className="text-amber-500" />
                Key Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-amber-50 text-amber-800 border border-amber-100 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-premium p-6 print-card">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500 mb-4">
                <CheckCircle2 size={16} className="text-amber-500" />
                Soft Skills
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Team development experience",
                  "Quick learner of new technologies",
                  "Dedicated and responsible",
                  "Process optimization mindset",
                  "Always delivers on time",
                  "Effective communication",
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main className="space-y-8 min-w-0">
            <div className="hidden lg:block">
              <p className="text-slate-600 max-w-2xl">
                Frontend developer with 4+ years of commercial development experience.
                Skilled in React, Next.js, TypeScript, Node.js, and modern frontend technologies. Passionate about
                building scalable web applications and continuously learning new technologies.
              </p>
            </div>

            <section className="bg-white rounded-2xl shadow-premium p-6 print-card">
              <SectionHeading>About Me</SectionHeading>
              <ul className="sm:columns-2 gap-x-6 text-sm text-slate-700">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 mb-2 break-inside-avoid">
                    <CheckCircle2 size={15} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionHeading>Experience</SectionHeading>
              <div className="space-y-6">
                {experience.map((job, i) => (
                  <div
                    key={job.company}
                    className={`relative pl-8 ${i < experience.length - 1 ? "border-l-2 border-amber-100 pb-2" : "border-l-2 border-transparent"}`}
                  >
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white" />
                    <div className="bg-white rounded-xl shadow-premium p-6 print-card">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                          <p className="text-amber-600 font-medium">{job.company}</p>
                        </div>
                        <span className="text-slate-500 text-sm mt-1 md:mt-0 whitespace-nowrap">{job.period}</span>
                      </div>
                      <p className="text-slate-500 text-sm mb-3">{job.location}</p>
                      <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading>Featured Projects</SectionHeading>
              <div className="space-y-6">
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <div
                      key={project.name}
                      className="bg-white rounded-xl shadow-premium p-6 border-2 border-amber-200 print-card"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-600">Featured</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                      <p className="text-slate-500 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                        {project.points?.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                <div className="grid md:grid-cols-2 gap-6">
                  {projects
                    .filter((p) => !p.featured)
                    .map((project) => (
                      <div key={project.name} className="bg-white rounded-xl shadow-premium p-6 print-card">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium shrink-0 ml-2"
                          >
                            Demo <ExternalLink size={14} />
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-slate-700 text-sm">{project.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            <section>
              <SectionHeading>Education</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((edu) => (
                  <div key={`${edu.school}-${edu.degree}`} className="bg-white rounded-xl shadow-premium p-5 flex gap-3 print-card">
                    <GraduationCap size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{edu.degree}</h3>
                      <p className="text-slate-500 text-sm">{edu.school}</p>
                      <p className="text-amber-600 text-xs font-medium mt-1">{edu.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading>Technical Skills</SectionHeading>
              <div className="grid md:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="bg-white rounded-xl shadow-premium p-6 print-card">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                      <group.icon size={16} className="text-amber-500" />
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-md text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="text-center text-slate-400 text-sm py-6 border-t border-slate-200">
              <p>© 2024 Olga. Built with Next.js, React, and Tailwind CSS.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};
