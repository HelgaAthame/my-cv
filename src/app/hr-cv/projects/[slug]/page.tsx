import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { PageBackground } from "../../../../components/hr-cv/HrCV";
import { ThemeToggle } from "../../../../components/hr-cv/ThemeToggle";
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
      <ThemeToggle />

      <article className="relative mx-auto max-w-3xl">
        <Link
          href="/hr-cv#projects"
          className="no-print inline-flex items-center gap-2 text-sm font-medium t-muted transition-colors t-accent-hover"
        >
          <ArrowLeft size={15} />
          Back to the CV
        </Link>

        <header className="mt-8 animate-fade-in-up">
          <h1 className="font-display text-4xl font-bold tracking-tight t-title sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 font-display text-xl t-accent">{project.tagline}</p>
          <p className="mt-4 text-lg leading-relaxed t-body">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-4 py-2 font-semibold text-[color:var(--on-accent)] hover:opacity-90"
            >
              Open the live demo <ExternalLink size={14} />
            </a>
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 t-body t-accent-hover"
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>

          {project.credentials && (
            <p className="mt-4 inline-block rounded-lg chip px-3 py-2 text-xs t-muted">
              Demo login: <span className="font-mono t-body">{project.credentials}</span>
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
          <dl className="print-card print-avoid-break mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-[color:var(--hairline)] sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-[color:var(--page-bg)] p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold t-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm t-body">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="chip rounded-md px-2.5 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {project.caseStudy.map((section) => (
            <section key={section.heading} className="print-avoid-break">
              <h2 className="mb-3 flex items-center gap-3 font-display text-2xl font-bold tracking-tight t-title">
                <span className="h-6 w-1.5 shrink-0 rounded-full accent-bar" />
                {section.heading}
              </h2>
              <div className="space-y-4 pl-[18px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed t-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="no-print mt-16 border-t hairline pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide t-faint">Other case studies</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {caseStudyProjects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/hr-cv/projects/${p.slug}`}
                    className="link-underline text-sm font-medium t-accent t-accent-hover"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <footer className="mt-12 border-t hairline py-6 text-center text-sm t-faint">
          <Link href="/hr-cv" className="link-underline t-accent-hover">
            Back to the CV
          </Link>
        </footer>
      </article>
    </div>
  );
}
