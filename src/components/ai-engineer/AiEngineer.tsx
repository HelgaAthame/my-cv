"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutTemplate,
  Mail,
  MapPin,
  Send,
  Wrench,
} from "lucide-react";

import { ThemeToggle } from "../hr-cv/ThemeToggle";
import githubLogo from "../../../public/github.avif";
import myPhoto from "../../../public/myPhoto3.jpg";
import pulseOpsShot from "../../../public/shots/pulseops.webp";
import {
  capabilities,
  decisions,
  ENGLISH_CV,
  experience,
  PULSEOPS_DEMO,
  PULSEOPS_REPO,
  roadmap,
  stack,
  stats,
} from "./content";

const capabilityIcons = {
  layout: LayoutTemplate,
  database: Database,
  bot: Bot,
} as const;

/** Section wrapper: one heading treatment for the whole page. */
const Section = ({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mt-20 scroll-mt-8">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] t-accent">{eyebrow}</p>
    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight t-title sm:text-4xl">
      {title}
    </h2>
    {lead ? <p className="mt-3 max-w-3xl text-base leading-relaxed t-body">{lead}</p> : null}
    <div className="mt-8">{children}</div>
  </section>
);

export const AiEngineer = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  // Feeds the cursor-following glow defined in the shared stylesheet. The
  // variables are written straight to the DOM rather than held in state:
  // this fires on every pointer move, and a re-render per frame would be
  // the one janky thing on an otherwise static page.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen">
      <div className="cursor-glow" aria-hidden />
      <ThemeToggle />

      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <header className="animate-fade-in-up">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] t-accent">
                Full-Stack TypeScript · AI-интеграции · Минск
              </p>

              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight t-title sm:text-6xl lg:text-7xl">
                Ольга
              </h1>

              <p className="mt-4 max-w-2xl font-display text-xl leading-snug t-body sm:text-2xl">
                Четыре года пишу продуктовые интерфейсы на{" "}
                <span className="t-accent">React и Next.js</span> — и довожу
                LLM-фичи до состояния, когда они{" "}
                <span className="t-accent">работают на реальных данных</span>, а
                не выглядят красиво на демо.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={PULSEOPS_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--on-accent)] hover:opacity-90"
                >
                  <ExternalLink size={16} />
                  Живое демо
                </a>
                <a
                  href={PULSEOPS_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-2.5 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
                >
                  <Image src={githubLogo.src} alt="" width={16} height={16} className="rounded-sm" />
                  Исходный код
                </a>
                <a
                  href="mailto:olgaivanovna2304@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-2.5 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
                >
                  <Mail size={16} />
                  Написать
                </a>
                <a
                  href="https://t.me/HelgaAthame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-2.5 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
                >
                  <Send size={16} />
                  Telegram
                </a>
              </div>

              <p className="mt-4 text-sm t-faint">
                Минск · рассматриваю офис, гибрид и удалённо ·{" "}
                {/* next/link, not <a>: production builds serve under the
                    /my-cv basePath and only Link rewrites the href for it. */}
                <Link href={ENGLISH_CV} className="link-underline t-muted t-accent-hover">
                  полное CV на английском
                </Link>
              </p>
            </div>

            <div className="justify-self-start lg:justify-self-end">
              <div className="h-40 w-40 overflow-hidden rounded-2xl shadow-premium-lg ring-1 ring-amber-400/30 sm:h-48 sm:w-48">
                {/* Same crop as the hr-cv hero: the source is a wide portrait. */}
                <div
                  className="h-full w-full"
                  style={{ transform: "scale(2.9)", transformOrigin: "48% 33%" }}
                >
                  <Image
                    src={myPhoto.src}
                    alt="Ольга"
                    width={432}
                    height={436}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-[color:var(--hairline)] lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[color:var(--page-bg)] p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-bold tracking-tight t-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm font-medium t-body">{stat.label}</span>
                  <span className="mt-0.5 block text-xs t-faint">{stat.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
        </header>

        {/* ---------------------------------------------------------------
            What I do
        --------------------------------------------------------------- */}
        <Section
          eyebrow="Профиль"
          title="Закрываю фичу целиком"
          lead="Не «фронтендер, который посмотрел курс по нейросетям». Разработчик с четырьмя годами продакшена, который умеет встроить LLM в продукт так, чтобы это пережило встречу с реальными пользователями."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = capabilityIcons[cap.icon];
              return (
                <article key={cap.title} className="surface surface-hover rounded-2xl p-6">
                  <Icon size={22} className="t-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold t-title">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed t-body">{cap.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {cap.chips.map((chip) => (
                      <li key={chip} className="chip rounded-md px-2 py-1 text-xs">
                        {chip}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        {/* ---------------------------------------------------------------
            The case study
        --------------------------------------------------------------- */}
        <Section
          id="pulseops"
          eyebrow="Основной проект"
          title="PulseOps — аналитика выручки с AI-аналитиком"
          lead="SaaS-сервис для небольших продуктовых команд: принимает биллинговые события через вебхук и в реальном времени считает MRR, ARR, отток и конверсию. Сделан и задеплоен целиком мной — от схемы базы до интерфейса."
        >
          <div className="surface overflow-hidden rounded-2xl">
            <Image
              src={pulseOpsShot}
              alt="Интерфейс PulseOps"
              className="w-full border-b hairline object-cover"
              placeholder="blur"
            />
            <div className="p-6 sm:p-8">
              <p className="text-base leading-relaxed t-body">
                Дашборды с метриками умеют показывать цифры. Дальше нужен
                человек, который посмотрит на них и скажет, что происходит.
                PulseOps делает этот шаг сам: находит статистически значимые
                отклонения и объясняет их словами — что изменилось, насколько
                это ненормально и что с этим делать.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PULSEOPS_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[color:var(--on-accent)]"
                >
                  Открыть демо
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={PULSEOPS_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border hairline px-4 py-2 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
                >
                  Код на GitHub
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <p className="mt-4 text-xs t-faint">
                Демо-доступ: <span className="t-muted">demo@pulseops.app</span> ·{" "}
                <span className="t-muted">Passkey123!</span> — рабочее
                пространство с сгенерированными данными, регистрация не нужна.
              </p>
            </div>
          </div>
        </Section>

        {/* ---------------------------------------------------------------
            Engineering decisions — the point of the page
        --------------------------------------------------------------- */}
        <Section
          eyebrow="Инженерные решения"
          title="Что отличает продакшен от демо"
          lead="Подключить LLM к приложению — работа на вечер. Дальше начинается то, за что платят: модель врёт, отваливается по лимитам, возвращает не тот формат и стоит денег. Ниже — как это решено в PulseOps."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisions.map((d) => (
              <article key={d.title} className="surface surface-hover rounded-2xl p-6">
                <span className="chip-accent inline-block rounded-md px-2 py-1 text-xs font-semibold">
                  {d.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold t-title">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed t-muted">
                  <span className="font-semibold t-faint">Проблема. </span>
                  {d.problem}
                </p>
                <p className="mt-2 text-sm leading-relaxed t-body">
                  <span className="font-semibold t-accent">Решение. </span>
                  {d.solution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------
            Roadmap — stated as unfinished on purpose
        --------------------------------------------------------------- */}
        <Section
          eyebrow="В работе"
          title="Что делаю сейчас"
          lead="Проект живой и продолжает развиваться. Здесь то, что ещё не готово — чтобы не выдавать планы за сделанное."
        >
          <ul className="surface rounded-2xl p-6 sm:p-8">
            {roadmap.map((item) => (
              <li key={item} className="flex gap-3 border-b hairline py-3 first:pt-0 last:border-0 last:pb-0">
                <Wrench size={16} className="mt-0.5 shrink-0 t-accent" />
                <span className="text-sm leading-relaxed t-body">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------
            Stack
        --------------------------------------------------------------- */}
        <Section eyebrow="Стек" title="Чем работаю">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="surface rounded-2xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] t-faint">
                  {group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="skill-badge chip rounded-md px-2.5 py-1 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------
            Experience + education
        --------------------------------------------------------------- */}
        <Section eyebrow="Опыт" title="Где работала">
          <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5">
              {experience.map((job) => (
                <article key={job.company} className="surface rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold t-title">
                      {job.role} · {job.company}
                    </h3>
                    <span className="text-xs t-faint">{job.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed t-body">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <aside className="surface h-fit rounded-2xl p-6">
              <GraduationCap size={20} className="t-accent" />
              <h3 className="mt-3 font-display text-lg font-semibold t-title">Образование</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed t-body">
                <li>
                  Магистратура, Белорусская академия наук
                  <span className="block text-xs t-faint">средний балл 9 из 10</span>
                </li>
                <li>
                  The Rolling Scopes School — React
                  <span className="block text-xs t-faint">1-е место на курсе</span>
                </li>
                <li>
                  The Rolling Scopes School — JS/Frontend
                  <span className="block text-xs t-faint">14-е место из 9000+ участников</span>
                </li>
              </ul>
              <p className="mt-5 flex items-center gap-2 border-t hairline pt-4 text-sm t-muted">
                <MapPin size={15} className="t-accent" />
                Минск, Беларусь
              </p>
            </aside>
          </div>
        </Section>

        {/* ---------------------------------------------------------------
            Contact
        --------------------------------------------------------------- */}
        <Section eyebrow="Контакты" title="Давайте поговорим">
          <div className="surface rounded-2xl p-6 sm:p-8">
            <p className="max-w-2xl text-base leading-relaxed t-body">
              Открыта к предложениям по full-stack и frontend разработке на
              TypeScript — особенно там, где в продукт нужно встроить AI и
              некому за это взяться.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:olgaivanovna2304@gmail.com"
                className="btn-premium inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--on-accent)]"
              >
                <Mail size={16} />
                olgaivanovna2304@gmail.com
              </a>
              <a
                href="https://t.me/HelgaAthame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-2.5 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="https://github.com/HelgaAthame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-2.5 text-sm font-semibold t-body transition-colors hover:border-[color:var(--accent)] t-accent-hover"
              >
                <Image src={githubLogo.src} alt="" width={16} height={16} className="rounded-sm" />
                GitHub
              </a>
            </div>
          </div>
        </Section>

        <footer className="mt-16 border-t hairline pt-6 text-xs t-faint">
          Страница собрана на Next.js и задеплоена на GitHub Pages.{" "}
          <Link href={ENGLISH_CV} className="link-underline t-muted t-accent-hover">
            Версия CV на английском
          </Link>
          .
        </footer>
      </main>
    </div>
  );
};
