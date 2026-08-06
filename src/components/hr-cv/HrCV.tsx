"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Send,
  MapPin,
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

import { Hero } from "./Hero";
import { ProjectsBento } from "./ProjectsBento";
import { ThemeToggle } from "./ThemeToggle";

// Deterministic PRNG (mulberry32) — NOT Math.random(). This runs at module
// scope on both server and client during static export; a real random
// source here would produce different markup on each and reintroduce the
// hydration-mismatch bug this file already hit once with StarBackground.
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Builds a repeating-linear-gradient of colored stripes with widths and
// gaps randomized within the given bounds, cycling through `colors`. Same
// seed => same layout, so the base/glow layers can share one call and stay
// in registration.
function buildStripeGradient(
  angleDeg: number,
  colors: string[],
  {
    count,
    minWidth,
    maxWidth,
    minGap,
    maxGap,
    seed,
  }: { count: number; minWidth: number; maxWidth: number; minGap: number; maxGap: number; seed: number },
) {
  const random = mulberry32(seed);
  let pos = 0;
  const stops: string[] = [];
  for (let i = 0; i < count; i++) {
    const color = colors[i % colors.length];
    const width = Math.round(minWidth + random() * (maxWidth - minWidth));
    const gap = Math.round(minGap + random() * (maxGap - minGap));
    stops.push(`${color} ${pos}px`, `${color} ${pos + width}px`);
    pos += width;
    stops.push(`transparent ${pos}px`, `transparent ${pos + gap}px`);
    pos += gap;
  }
  return `repeating-linear-gradient(${angleDeg}deg, ${stops.join(", ")})`;
}

const stripeAngle = 115;
const stripeLayout = { count: 28, minWidth: 4, maxWidth: 48, minGap: 4, maxGap: 14, seed: 1 };
// Alpha values are far lower than the light theme's were: on a near-black
// page the same opacities read as bright bars rather than texture.
const stripeBaseColors = [
  "rgba(251, 191, 36, 0.05)",
  "rgba(148, 163, 184, 0.05)",
  "rgba(249, 115, 22, 0.04)",
  "rgba(129, 140, 248, 0.04)",
];
const stripeGlowColors = [
  "rgba(251, 191, 36, 0.14)",
  "rgba(148, 163, 184, 0.12)",
  "rgba(249, 115, 22, 0.12)",
  "rgba(129, 140, 248, 0.1)",
];
// The light theme's pastel set. Same seed and layout, so switching themes
// never shifts the stripe positions — only their color.
const stripeBaseColorsLight = [
  "rgba(255, 247, 217, 0.5)",
  "rgba(231, 237, 255, 0.4)",
  "rgba(254, 231, 204, 0.45)",
  "rgba(237, 241, 246, 0.36)",
];
const stripeGlowColorsLight = [
  "rgba(253, 237, 169, 0.65)",
  "rgba(212, 221, 255, 0.55)",
  "rgba(254, 212, 165, 0.6)",
  "rgba(222, 229, 237, 0.5)",
];

const stripesBaseGradient = buildStripeGradient(stripeAngle, stripeBaseColors, stripeLayout);
const stripesGlowGradient = buildStripeGradient(stripeAngle, stripeGlowColors, stripeLayout);
const stripesBaseGradientLight = buildStripeGradient(stripeAngle, stripeBaseColorsLight, stripeLayout);
const stripesGlowGradientLight = buildStripeGradient(stripeAngle, stripeGlowColorsLight, stripeLayout);

const keySkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Toolkit", "Node.js", "Supabase", "JavaScript"];

// Each of these points at something on this page a reader can open and
// check. The previous version was a list of adjectives ("deep knowledge
// of…", "experience with…") — true, but unfalsifiable, and therefore worth
// nothing to someone comparing twenty CVs.
const aboutPoints = [
  "4+ years of commercial frontend work at Lab42 and CreativeIT — 20+ projects across different domains, team sizes and stacks",
  "Full-stack when the project needs it: I built and maintain both sides of Sensy (NestJS, PostgreSQL/Prisma, Redis) and shipped PulseOps solo on Supabase and Drizzle",
  "I test the part that carries the risk — pure domain logic, no browser required. PulseOps has 100% coverage of its metrics layer under Vitest",
  "Accessibility as work, not a checkbox: when a design needed a select the OS cannot draw, I rebuilt it as an ARIA listbox with the full keyboard contract instead of a div with a click handler",
  "Performance stated as a number and then measured: Bullet Heaven targets 60 FPS at 5000+ entities and ships an in-game overlay reporting frame p50/p99 and draw calls",
  "Comfortable owning a feature end to end — product decision, design, API, UI, deploy — and equally comfortable working to someone else's spec in a team",
  "AI-assisted development in daily use (Claude, Codex, GPT, Cursor). The leverage is in reviewing what the model produces, not in the prompt",
  "RS School graduate: 1st place in the React course, 14th of 9000+ in JS/FE",
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
      "Formik", "React Hook Form", "Zod", "shadcn/ui", "React Native", "Expo",
      "Vite", "Webpack", "Babel", "Lucide React", "Recharts",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: [
      "Node.js", "Express", "Nest.js", "MongoDB", "Mongoose", "PostgreSQL", "Supabase",
      "Drizzle ORM", "TypeORM", "Prisma", "Firebase", "Redis", "REST APIs", "GraphQL", "WebSockets", "Socket.io", "Swagger/OpenAPI",
    ],
  },
  {
    title: "Testing & DevOps",
    icon: FlaskConical,
    items: [
      "Vitest (with coverage)", "Jest", "Cypress", "Playwright", "React Testing Library",
      "Git", "Docker", "GitHub Actions", "GitLab CI/CD", "Netlify", "Vercel", "ESLint", "Prettier",
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
    items: [
      "PixiJS 8 (WebGL2)", "Canvas / game loop architecture", "Performance profiling", "Phaser",
      "Unity (C#)", "OOP & Design Patterns", "Agile / Scrum / Kanban", "Jira", "Trello", "Figma", "Photoshop",
    ],
  },
];

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 flex items-center gap-3 font-display text-xl font-bold tracking-tight t-title">
    <span className="h-6 w-1.5 rounded-full accent-bar" />
    <span className="text-shine-hover">{children}</span>
  </h2>
);

/**
 * The page-wide background: two stripe layers plus a cursor halo. Extracted
 * so the case-study pages can share exactly the same backdrop instead of
 * re-deriving it (and drifting out of sync with this file's stripe seed).
 */
export const PageBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--x", `${e.clientX}px`);
      glowRef.current?.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={glowRef} className="no-print bg-stripes pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-stripes-base stripes-dark" style={{ backgroundImage: stripesBaseGradient }} />
      <div className="bg-stripes-glow stripes-dark" style={{ backgroundImage: stripesGlowGradient }} />
      <div className="bg-stripes-base stripes-light" style={{ backgroundImage: stripesBaseGradientLight }} />
      <div className="bg-stripes-glow stripes-light" style={{ backgroundImage: stripesGlowGradientLight }} />
      <div className="cursor-glow" />
    </div>
  );
};

export const HrCV = () => (
  <div className="relative min-h-screen overflow-hidden p-4 md:p-8 lg:p-12">
    <PageBackground />
    <ThemeToggle />

    <div className="relative mx-auto max-w-6xl space-y-12">
      <Hero />

      {/* Projects come before experience on purpose: the work is the
          argument, and two of these are things a reviewer can open and
          poke at in ten seconds. */}
      <section id="projects" className="animate-fade-in-up scroll-mt-8" style={{ animationDelay: "0.05s" }}>
        <SectionHeading>Featured Projects</SectionHeading>
        <ProjectsBento />
      </section>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px] lg:gap-8">
        <main className="min-w-0 space-y-10">
          <section className="surface print-card rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            <SectionHeading>About Me</SectionHeading>
            <p className="relative mb-5 pl-5 font-display text-lg leading-snug t-title before:absolute before:bottom-1 before:left-0 before:top-1 before:w-1 before:rounded-full before:bg-[color:var(--accent)] before:content-['']">
              <span className="font-bold t-accent">4+ years</span> of commercial frontend development in{" "}
              <span className="font-semibold t-title">React, Next.js and TypeScript</span> — and a habit of following a problem
              past the frontend when that is where it actually lives: into a NestJS API, a Postgres schema, or a render loop
              with a 16.7-millisecond budget. I would rather ship one thing that holds up under review than five that demo well.
            </p>
            <ul className="gap-x-6 text-sm t-body sm:columns-2">
              {aboutPoints.map((point) => (
                <li key={point} className="mb-2 flex break-inside-avoid items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 t-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: "0.19s" }}>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <div
                  key={job.company}
                  className={`relative pl-8 ${i < experience.length - 1 ? "border-l-2 border-[color:var(--accent-soft-border)] pb-2" : "border-l-2 border-transparent"}`}
                >
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[color:var(--accent)] ring-4 ring-[color:var(--page-bg)]" />
                  <div className="surface print-card print-avoid-break rounded-xl p-6">
                    <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold t-title">{job.role}</h3>
                        <p className="font-medium t-accent">{job.company}</p>
                      </div>
                      <span className="mt-1 whitespace-nowrap text-sm t-muted md:mt-0">{job.period}</span>
                    </div>
                    <p className="mb-3 text-sm t-muted">{job.location}</p>
                    <ul className="list-inside list-disc space-y-1 text-sm t-body">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* The sidebar is now a companion column, not the page's spine: the
            identity block it used to carry lives in the hero above. */}
        <aside className="animate-fade-in-up lg:sticky lg:top-8" style={{ animationDelay: "0.12s" }}>
          <div className="surface-solid sidebar-dark print-card overflow-hidden rounded-2xl shadow-premium-lg">
            <div className="space-y-3 px-6 py-6 text-left">
              <a
                href="mailto:olgaivanovna2304@gmail.com"
                className="link-underline flex w-fit items-center gap-3 break-all text-sm t-body t-accent-hover"
              >
                <Mail size={16} className="shrink-0 t-accent" />
                olgaivanovna2304@gmail.com
              </a>
              <a
                href="https://t.me/HelgaAthame"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex w-fit items-center gap-3 text-sm t-body t-accent-hover"
              >
                <Send size={16} className="shrink-0 t-accent" />
                @HelgaAthame
              </a>
              <div className="flex items-center gap-3 text-sm t-body">
                <MapPin size={16} className="shrink-0 t-accent" />
                Minsk, Belarus
              </div>
              <a
                href="https://www.linkedin.com/in/olga-k-aa9054220"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex w-fit items-center gap-3 text-sm t-body t-accent-hover"
              >
                <Image src={linkedinLogo.src} alt="" width={16} height={16} className="shrink-0 rounded-sm" />
                LinkedIn
              </a>
              <a
                href="https://github.com/HelgaAthame"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex w-fit items-center gap-3 text-sm t-body t-accent-hover"
              >
                <Image src={githubLogo.src} alt="" width={16} height={16} className="shrink-0 rounded-sm" />
                GitHub
              </a>
            </div>

            <div className="border-t hairline px-6 py-6">
              <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide t-muted">
                <Sparkles size={14} className="t-accent" />
                Key Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge chip-accent rounded-full px-3 py-1.5 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t hairline px-6 py-6">
              <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide t-muted">
                <CheckCircle2 size={14} className="t-accent" />
                Soft Skills
              </h2>
              <ul className="space-y-2 text-sm t-body">
                {[
                  "Team development experience",
                  "Quick learner of new technologies",
                  "Dedicated and responsible",
                  "Process optimization mindset",
                  "Always delivers on time",
                  "Effective communication",
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 t-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Full width, outside the sidebar grid: these are wide, chip-heavy
          blocks, and squeezing them into the narrow column left the whole
          right-hand side of the page empty below the sidebar. */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.26s" }}>
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="surface print-card print-avoid-break rounded-xl p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold t-title">
                <group.icon size={16} className="t-accent" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-badge chip rounded-md px-2.5 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up" style={{ animationDelay: "0.33s" }}>
        <SectionHeading>Education</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {education.map((edu) => (
            <div key={`${edu.school}-${edu.degree}`} className="surface print-card print-avoid-break flex gap-3 rounded-xl p-5">
              <GraduationCap size={20} className="mt-0.5 shrink-0 t-accent" />
              <div>
                <h3 className="text-sm font-bold t-title">{edu.degree}</h3>
                <p className="text-sm t-muted">{edu.school}</p>
                <p className="mt-1 text-xs font-medium t-accent">{edu.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t hairline py-6 text-center text-sm t-faint">
        <p>© 2026 Olga. Built with Next.js, React, and Tailwind CSS.</p>
      </footer>
    </div>
  </div>
);
