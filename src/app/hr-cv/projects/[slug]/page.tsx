import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { PageBackground } from "../../../../components/hr-cv/HrCV";
import { caseStudyProjects, getProject } from "../../../../data/projects";

// `output: "export"` needs every dynamic route enumerated at build time.
export const generateStaticParams = () => caseStudyProjects.map((p) => ({ slug: p.slug }));

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Olga, Frontend Developer`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  return (
    <div className="relative min-h-screen overflow-hidden p-4 md:p-8 lg:p-12">
      <PageBackground />

      <article className="relative mx-auto max-w-3xl">
        <Link
          href="/hr-cv#projects"
          className="no-print inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-amber-300"
        >
          <ArrowLeft size={15} />
          Back to the CV
        </Link>

        <header className="mt-8 animate-fade-in-up">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 font-display text-xl text-amber-400 print-accent">{project.tagline}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-300"
            >
              Open the live demo <ExternalLink size={14} />
            </a>
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-slate-300 hover:text-amber-300"
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>

          {project.credentials && (
            <p className="mt-4 inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-400">
              Demo login: <span className="font-mono text-slate-200">{project.credentials}</span>
            </p>
          )}
        </header>

        {project.screenshot && (
          <div className="print-hide-shot surface mt-10 overflow-hidden rounded-2xl shadow-premium-lg">
            <Image
              src={project.screenshot}
              alt={project.screenshotAlt ?? ""}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {project.stats && (
          <dl className="print-card print-avoid-break mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-slate-950 p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold text-amber-400 print-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-slate-300">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {project.caseStudy.map((section) => (
            <section key={section.heading} className="print-avoid-break">
              <h2 className="mb-3 flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-white">
                <span className="h-6 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                {section.heading}
              </h2>
              <div className="space-y-4 pl-[18px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="no-print mt-16 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Other case studies</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {caseStudyProjects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/hr-cv/projects/${p.slug}`}
                    className="link-underline text-sm font-medium text-amber-400 hover:text-amber-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <footer className="mt-12 border-t border-white/10 py-6 text-center text-sm text-slate-500">
          <Link href="/hr-cv" className="link-underline hover:text-amber-300">
            Back to the CV
          </Link>
        </footer>
      </article>
    </div>
  );
}
