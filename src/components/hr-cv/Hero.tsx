"use client";

import Image from "next/image";
import { ArrowDown, Mail, Printer, Send } from "lucide-react";

import githubLogo from "../../../public/github.avif";
import linkedinLogo from "../../../public/linkedIn.avif";
import myPhoto from "../../../public/myPhoto3.jpg";

/**
 * The numbers a recruiter can check. Deliberately not "skills" — a list of
 * technologies is what every CV opens with, and it is the part nobody reads.
 * Each of these is provable from something linked further down the page.
 */
const stats = [
  { value: "4+", label: "years commercial", sub: "React · Next.js · TypeScript" },
  { value: "20+", label: "projects shipped", sub: "different domains and team sizes" },
  { value: "60", label: "FPS at 5000+ entities", sub: "measured, in Bullet Heaven" },
  { value: "1st", label: "of the RS School React course", sub: "and 14th of 9000+ in JS/FE" },
];

export const Hero = () => (
  <header className="relative animate-fade-in-up">
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 print-accent">
          Frontend Developer (Full-Stack) · Minsk, Belarus
        </p>

        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Olga
        </h1>

        <p className="mt-4 max-w-2xl font-display text-xl leading-snug text-slate-200 sm:text-2xl">
          I build production frontends in{" "}
          <span className="text-amber-400 print-accent">React and Next.js</span> — and I go all the
          way down when the problem calls for it, from a NestJS API to a game loop holding 60 FPS.
        </p>

        <div className="no-print mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.print()}
            className="btn-premium inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300"
          >
            <Printer size={16} />
            Save as PDF
          </button>
          <a
            href="mailto:olgaivanovna2304@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-400/50 hover:text-amber-300"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href="https://t.me/HelgaAthame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-400/50 hover:text-amber-300"
          >
            <Send size={16} />
            Telegram
          </a>
          <a
            href="https://github.com/HelgaAthame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-400/50 hover:text-amber-300"
          >
            <Image src={githubLogo.src} alt="" width={16} height={16} className="rounded-sm" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/olga-k-aa9054220"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-400/50 hover:text-amber-300"
          >
            <Image src={linkedinLogo.src} alt="" width={16} height={16} className="rounded-sm" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="justify-self-start lg:justify-self-end">
        <div className="h-40 w-40 overflow-hidden rounded-2xl shadow-premium-lg ring-1 ring-amber-400/30 sm:h-48 sm:w-48">
          {/* The source photo is a wide portrait; this crop pushes the face
              into the frame. Same transform as the old sidebar avatar. */}
          <div className="h-full w-full" style={{ transform: "scale(2.9)", transformOrigin: "48% 33%" }}>
            <Image
              src={myPhoto.src}
              alt="Olga"
              width={432}
              height={436}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4 print-card print-avoid-break">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-slate-950 p-5">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block font-display text-4xl font-bold tracking-tight text-amber-400 print-accent">
              {stat.value}
            </span>
            <span className="mt-1 block text-sm font-medium text-slate-200">{stat.label}</span>
            <span className="mt-0.5 block text-xs text-slate-500">{stat.sub}</span>
          </dd>
        </div>
      ))}
    </dl>

    <a
      href="#projects"
      className="no-print mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-amber-300"
    >
      <ArrowDown size={15} />
      See the work
    </a>
  </header>
);
