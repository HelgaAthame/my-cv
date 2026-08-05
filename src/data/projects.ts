import type { StaticImageData } from "next/image";

import bulletHeavenShot from "../../public/shots/bullet-heaven.webp";
import cryptoExchangerShot from "../../public/shots/crypto-exchanger.webp";
import pulseOpsShot from "../../public/shots/pulseops.webp";
import sensyShot from "../../public/shots/sensy.webp";

export type ProjectLink = {
  label: string;
  href: string;
};

/** One block of a case-study page: a heading and its paragraphs. */
export type CaseSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  /** URL segment under /hr-cv/projects/. */
  slug: string;
  name: string;
  /** One line, shown under the name everywhere. */
  tagline: string;
  /** Longer summary for the card and the top of the case-study page. */
  description: string;
  /** Featured projects get a screenshot and a bento tile; the rest are compact. */
  featured: boolean;
  screenshot?: StaticImageData;
  /** Alt text for the screenshot — required whenever `screenshot` is set. */
  screenshotAlt?: string;
  /**
   * The tile's primary link. Usually the live deployment — but a dead demo
   * link on a CV is worse than no demo at all, so a project whose hosting
   * has lapsed points at its source instead and says so via `linkLabel`.
   */
  link: string;
  linkLabel?: string;
  links?: ProjectLink[];
  credentials?: string;
  tech: string[];
  /** Short bullets for the card. */
  points?: string[];
  /**
   * The 1–3 numbers this project can actually prove. Rendered as the tile's
   * stat row; empty for projects that have nothing measurable to claim.
   */
  stats?: { value: string; label: string }[];
  /** Prose for /hr-cv/projects/[slug]. Absent => no case-study page. */
  caseStudy?: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "pulseops",
    name: "PulseOps",
    tagline: "SaaS revenue metrics with an AI analyst",
    description:
      "A lightweight alternative to ChartMogul for indie founders — turns billing events into live MRR, ARR and churn, with a one-click AI analyst that explains what is moving and what to do next.",
    featured: true,
    screenshot: pulseOpsShot,
    screenshotAlt: "PulseOps sign-in screen with the product summary panel",
    link: "https://pulse-ops-ai-five.vercel.app/",
    links: [{ label: "Source", href: "https://github.com/HelgaAthame/PulseOps-AI" }],
    credentials: "demo@pulseops.app / Passkey123!",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Drizzle ORM", "Groq AI"],
    stats: [
      { value: "100%", label: "domain test coverage" },
      { value: "Solo", label: "product, design, code" },
    ],
    points: [
      "Solo full-stack development: product, design, and engineering",
      "Event-sourced metrics architecture with pure domain logic",
      "AI analyst feature using Groq with strict JSON contracts",
      "Passwordless auth with passkeys, Google OAuth, and hCaptcha",
      "100% test coverage of the domain layer with Vitest",
    ],
    caseStudy: [
      {
        heading: "The problem",
        paragraphs: [
          "Revenue analytics tools like ChartMogul are priced and scoped for companies with a finance team. An indie founder with a few hundred subscribers needs the same three answers — what is my MRR, who is churning, is it getting better — without the onboarding call and the per-seat bill.",
          "PulseOps takes Stripe-style billing events and turns them into live MRR, ARR, churn and conversion, then adds the part that usually needs a human: an analyst that reads the current numbers and says what changed and what to do about it.",
        ],
      },
      {
        heading: "Event sourcing, not a metrics table",
        paragraphs: [
          "Metrics are derived from an append-only event log rather than stored as counters. A signup, a payment, a plan change and a cancellation are all just events; every number on the dashboard is a pure function of that log.",
          "That choice is what makes the domain layer testable without a database: the calculations take an array of events and return numbers, so the whole of the business logic is covered by fast unit tests. It also means a mistake in the metric definition is fixable by recomputing, not by migrating corrupted aggregates.",
        ],
      },
      {
        heading: "The AI analyst, kept on a leash",
        paragraphs: [
          "The analyst runs on Groq and is deliberately not free-form. It receives a computed metrics snapshot — never raw customer rows — and must answer inside a strict JSON contract that the app validates before rendering.",
          "This is the difference between a demo and something you would ship: an LLM that can only return a known shape can fail loudly and be retried, whereas a prose answer pasted into the UI fails silently and invents numbers.",
        ],
      },
      {
        heading: "Auth without passwords",
        paragraphs: [
          "Sign-in is passkeys first, with Google OAuth and an email fallback, all through Supabase, plus hCaptcha in front of the credential path.",
          "For a product that holds revenue data, a password field is the weakest part of the surface. Passkeys remove the reusable secret entirely; the email path stays only so a reviewer with a demo account can get in.",
        ],
      },
    ],
  },
  {
    slug: "sensy",
    name: "Sensy",
    tagline: "Call-center quality control platform",
    description:
      "Speech analytics and QA checklists for reviewing call recordings — built and maintained end to end, frontend and backend.",
    featured: true,
    screenshot: sensyShot,
    screenshotAlt: "Sensy analytics dashboard with call metrics and trend charts",
    link: "https://sensy-front-github.vercel.app/",
    links: [
      { label: "API Docs (Swagger)", href: "https://sensy-back.onrender.com/api/docs" },
      { label: "Frontend", href: "https://github.com/HelgaAthame/sensy-front" },
      { label: "Backend", href: "https://github.com/HelgaAthame/sensy-back" },
    ],
    credentials: "admin@sensy.by / admin12345",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
    stats: [
      { value: "2", label: "codebases, one author" },
      { value: "REST", label: "documented with Swagger" },
    ],
    points: [
      "Full-stack: built both the frontend and the backend independently",
      "Audio waveform playback and review UI for call recordings (wavesurfer.js)",
      "REST API with Swagger docs, PostgreSQL via Prisma, idempotent Docker seed/migrations",
      "Phased architecture: async processing (Redis/BullMQ) and self-hosted Whisper/LLM transcription planned for later phases",
    ],
    caseStudy: [
      {
        heading: "What it does",
        paragraphs: [
          "A call-center supervisor cannot listen to every call. Sensy scores recordings against QA checklists and surfaces the ones worth a human's attention — negative tone, stop-words, long silences, interruptions — with analytics across operators and projects.",
          "The reviewer's screen is built around the waveform: the recording, its transcript and the checklist sit side by side, so marking a call takes one pass instead of three.",
        ],
      },
      {
        heading: "Owning both sides",
        paragraphs: [
          "The frontend is Next.js with Redux Toolkit and wavesurfer.js; the backend is NestJS over PostgreSQL through Prisma, with Redis for queued work. Both are mine, which is what made the API pleasant to consume — the contract was designed from the screen backwards rather than inherited.",
          "The REST surface is documented with Swagger and the Docker setup runs seeds and migrations idempotently, so a fresh clone is one command away from a working environment. That matters more than it sounds: a demo nobody can start is a demo nobody reviews.",
        ],
      },
      {
        heading: "Phased on purpose",
        paragraphs: [
          "Transcription is the expensive part. Rather than blocking the first release on self-hosted Whisper and an LLM scoring pass, the architecture puts that work behind a queue boundary (Redis/BullMQ) from day one and ships the review workflow first.",
          "The seam is the point: async processing and local transcription land in later phases without the UI or the API contract changing shape.",
        ],
      },
      {
        heading: "A note on the demo",
        paragraphs: [
          "The backend is hosted on Render's free tier, so the first request after an idle period takes 30–60 seconds to wake the instance, then behaves normally. The demo data set is intentionally small.",
        ],
      },
    ],
  },
  {
    slug: "crypto-exchanger",
    name: "Crypto Exchanger",
    tagline: "Fiat/crypto exchange calculator with live rates",
    description:
      "Pick a pair, enter an amount on either side, and see the live rate with a fee you can actually read — plus history charts, rate alerts and a full simulated checkout.",
    featured: true,
    screenshot: cryptoExchangerShot,
    screenshotAlt: "Crypto Exchanger calculator with a live rates ticker and fee breakdown",
    link: "https://crypto-exchanger-fiat.vercel.app/",
    links: [{ label: "Source", href: "https://github.com/HelgaAthame/crypto-exchanger" }],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Zod", "Vitest"],
    stats: [
      { value: "2", label: "live rate providers" },
      { value: "9", label: "currencies, 4 modes" },
      { value: "0", label: "env vars to run it" },
    ],
    points: [
      "Live rates from CoinGecko and Frankfurter, cross-computed through a USD bridge behind a single cache layer",
      "Multi-step checkout with method-specific branches (card → 3-D Secure OTP, bank transfer, crypto deposit), each step gated by the request's own state",
      "Rate history charts, per-currency pages, and browser-side rate alerts",
      "Accessible custom listbox (arrows, Home/End, type-ahead, aria-activedescendant) instead of an unstylable native select",
      "SEO: schema.org BreadcrumbList in JSON-LD, branded 404 and route-level error boundaries",
      "Domain logic unit-tested with Vitest (rates, fees, alerts, checkout state machine)",
    ],
    caseStudy: [
      {
        heading: "The problem",
        paragraphs: [
          "Rates are scattered across exchanges and aggregators, and the number you are quoted is rarely the number you get — the fee is folded into the rate. The app answers one question on one screen: if I hand over this, what exactly do I receive, and what did the exchanger keep?",
          "It is a demo, and says so at the top of every page: no KYC, no payment provider, no custody of funds. Building the real thing is a licensing problem, not a frontend one. What is real here is the rate data and the domain logic.",
        ],
      },
      {
        heading: "Two providers, one USD bridge",
        paragraphs: [
          "Crypto prices come from CoinGecko, fiat from Frankfurter. Neither one can price an arbitrary pair, so every rate is cross-computed through USD: EUR→BTC is EUR→USD from one provider composed with USD→BTC from the other.",
          "Every read goes through a single cache module. CoinGecko's keyless tier is rate-limited and each serverless instance keeps its own memory, so that one module is deliberately the only place that would need to change to move the cache into Redis or Vercel KV — the rest of the app never talks to a provider directly.",
        ],
      },
      {
        heading: "Checkout as a state machine",
        paragraphs: [
          "The simulated checkout is not a single confirm button. The path depends on the payment method: a card goes method → details → confirm → 3-D Secure OTP → status, a crypto deposit swaps the OTP step for a deposit screen, and a demo balance skips straight to confirmation.",
          "Each route is gated by the request's own `step` field rather than by navigation history, so a deep link or a refresh cannot drop a user into a step they have not reached. Requests saved before the checkout existed are migrated on read — without that, their missing step produced links to `/exchange/<id>/undefined`.",
        ],
      },
      {
        heading: "The select that had to be rebuilt",
        paragraphs: [
          "A native `<select>` is drawn by the operating system and cannot carry a currency icon or match the rest of the form. Replacing it means taking on everything the native element gave away for free.",
          "So the custom listbox implements the full keyboard contract — arrow keys, Home/End, Enter/Space, Escape and character type-ahead — with focus staying on the trigger and the active option announced through `aria-activedescendant`. Rebuilding a native control is only acceptable if you rebuild its accessibility too.",
        ],
      },
      {
        heading: "Tested where it counts",
        paragraphs: [
          "The domain layer — rate composition, fee maths, alert evaluation, the checkout state machine — is pure and unit-tested with Vitest. None of those tests need a browser or a network, which is why they are worth having.",
          "Around that: a branded 404, a route-level error boundary that names third-party rate limits as the likely cause (because that is the realistic failure), and a root-level boundary with inline styles for the case where the layout itself fails.",
        ],
      },
    ],
  },
  {
    slug: "bullet-heaven",
    name: "Bullet Heaven",
    tagline: "PixiJS arcade built as a performance experiment",
    description:
      "A browser bullet-heaven arcade on PixiJS 8, written against one engineering goal: 60 FPS with thousands of live entities — measured, not eyeballed.",
    featured: true,
    screenshot: bulletHeavenShot,
    screenshotAlt: "Bullet Heaven gameplay with the F3 metrics overlay showing 60 FPS",
    link: "https://bullet-heaven-six.vercel.app/",
    links: [{ label: "Source", href: "https://github.com/HelgaAthame/bullet-heaven" }],
    tech: ["PixiJS 8", "TypeScript (strict)", "Vite", "WebGL2", "Vitest"],
    stats: [
      { value: "60", label: "FPS target, measured" },
      { value: "5000+", label: "live entities" },
      { value: "0", label: "game engines used" },
    ],
    points: [
      "Fixed 60 Hz logic step with render interpolation and a delta cap, so balance never depends on the monitor's refresh rate",
      "Object pools and typed arrays for entities; ParticleContainer batching to keep draw calls flat",
      "Spatial hash for broad-phase collisions instead of pairwise checks",
      "Adaptive quality governor driven by a measured frame budget, with an in-game metrics overlay (FPS, frame p50/p99, draw calls)",
      "No game engine or physics library — written from scratch to control every millisecond of frame time",
    ],
    caseStudy: [
      {
        heading: "The goal was a number",
        paragraphs: [
          "The genre is the excuse; the target is the project. A bullet-heaven game puts thousands of entities on screen at once, which makes it an honest test of how much a browser can be made to do in 16.7 milliseconds.",
          "So the goal was stated as a number from the start — 60 FPS with 5000+ live entities — and the game ships with an F3 overlay reporting FPS, frame time p50 and p99, draw calls, live entity count and GPU backend. A performance claim you cannot read off the screen is not a claim.",
        ],
      },
      {
        heading: "Fixed timestep, interpolated render",
        paragraphs: [
          "Logic runs at exactly 60 Hz regardless of the display. This is not a preference: if damage, cooldowns and hit detection advance per frame, a player on a weak laptop gets one balance and a player on a 144 Hz monitor gets another.",
          "The leftover accumulator is handed to the renderer as an interpolation alpha, because at 144 Hz the logic only updates every 2.4 frames and uninterpolated movement visibly steps. The frame delta is capped at 250 ms — without a ceiling, returning to a backgrounded tab produces a multi-second delta, the loop runs hundreds of ticks in a row, the next delta grows further, and the classic spiral of death takes the page down.",
          "Pixi's own ticker is stopped and render is called by hand from the loop. Two independent clocks in one game is a bug waiting for a slow frame.",
        ],
      },
      {
        heading: "Nothing is allocated in the hot path",
        paragraphs: [
          "Enemies, projectiles and pickups live in pre-allocated pools; nothing is constructed or discarded mid-run. The garbage collector is the single most reliable source of frame spikes in a JavaScript game, and the way to beat it is to give it nothing to collect.",
          "Rendering goes through ParticleContainer batching so the draw call count stays flat as entity count grows — with the overlay confirming single-digit draw calls while dozens of sprites move.",
        ],
      },
      {
        heading: "Collisions: a spatial hash, not a loop",
        paragraphs: [
          "Checking every entity against every other is quadratic, and at 5000 entities that is 12.5 million pair tests per tick — impossible inside the budget. A uniform spatial hash buckets entities by cell, so each one only tests against its own neighbourhood.",
          "Collisions in this genre are circle-to-circle, so no physics library is used. A general solver would spend frame time on constraints, joints and rotation that the game never asks for.",
        ],
      },
      {
        heading: "Adaptive quality instead of a fixed one",
        paragraphs: [
          "Hardware varies more than any single quality setting can accommodate. A governor watches the measured frame budget and scales the expensive, non-load-bearing work — particle density, effect counts — up and down at runtime, so a weak machine loses polish rather than dropping frames.",
          "TypeScript runs strict with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`. With most state living in typed arrays and pools, a silent `undefined` from an out-of-range index is a real and very hard-to-find bug; the compiler is the cheapest place to catch it.",
        ],
      },
      {
        heading: "How to try it",
        paragraphs: [
          "WASD or the arrow keys to move — the weapons fire on their own. 1/2/3 pick an upgrade on level-up, and F3 toggles the metrics overlay. The in-game text is in Russian.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-ssr",
    name: "E-commerce with Server-Side Rendering",
    tagline: "Online store with SSR for SEO and fast first paint",
    description:
      "Full-featured e-commerce application with server-side rendering and server actions for optimal SEO and performance.",
    featured: false,
    link: "https://store-example7.vercel.app/",
    links: [{ label: "Source", href: "https://github.com/HelgaAthame/store-example" }],
    tech: ["Next.js", "React", "TypeScript", "Redux", "SSR"],
  },
  {
    slug: "music-library",
    name: "Music Library (Fullstack)",
    tagline: "Track and album management on a NestJS API",
    description:
      "Full-stack music library with a NestJS + MongoDB backend and a Next.js frontend — track and album management with a responsive player UI.",
    featured: false,
    link: "https://nest-next-kappa.vercel.app/",
    links: [{ label: "Source", href: "https://github.com/HelgaAthame/nest-next" }],
    tech: ["Next.js", "Nest.js", "React", "TypeScript", "MongoDB"],
  },
  {
    slug: "news-app",
    name: "News App (Fullstack)",
    tagline: "GraphQL news platform, web and mobile",
    description:
      "Create, edit and read news across web and mobile — NestJS with GraphQL/Apollo, TypeORM and PostgreSQL behind an Expo client that ships to both web and React Native.",
    featured: false,
    link: "https://news-app-olga.vercel.app/",
    links: [
      { label: "Frontend", href: "https://github.com/HelgaAthame/news-app" },
      { label: "Backend", href: "https://github.com/HelgaAthame/newsapp-back" },
    ],
    tech: ["Next.js", "NestJS", "GraphQL", "TypeORM", "PostgreSQL", "React Native", "Expo"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const caseStudyProjects = projects.filter(
  (p): p is Project & { caseStudy: CaseSection[] } => Boolean(p.caseStudy),
);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
