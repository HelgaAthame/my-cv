import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { featuredProjects, otherProjects, type Project } from "../../data/projects";

/**
 * Bento widths, by slug. Deliberately hand-assigned rather than derived from
 * the array order: the point of the layout is that the tiles are *not* all
 * the same size, and which project deserves the wide tile is an editorial
 * call, not a positional one. Every row still adds up to 6 columns.
 */
const span: Record<string, string> = {
  pulseops: "md:col-span-4",
  "crypto-exchanger": "md:col-span-2",
  "bullet-heaven": "md:col-span-4",
  sensy: "md:col-span-2",
};

const TechChips = ({ tech }: { tech: string[] }) => (
  <div className="mt-3 flex flex-wrap gap-1.5">
    {tech.map((item) => (
      <span
        key={item}
        className="chip rounded-md px-2 py-0.5 text-[11px]"
      >
        {item}
      </span>
    ))}
  </div>
);

const FeaturedTile = ({ project }: { project: Project }) => (
  <article
    className={`surface surface-hover print-card print-avoid-break group flex flex-col overflow-hidden rounded-2xl ${span[project.slug] ?? "md:col-span-3"}`}
  >
    {project.screenshot && (
      <div className="print-hide-shot relative aspect-[16/9] overflow-hidden border-b hairline bg-[color:var(--page-bg)]">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt ?? ""}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
    )}

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-xl font-bold t-title">
        <span className="text-shine-hover">{project.name}</span>
      </h3>
      <p className="mt-1 text-sm t-accent">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed t-body">{project.description}</p>

      {project.stats && (
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-bold t-title">{stat.value}</span>
                <span className="block text-xs t-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      <TechChips tech={project.tech} />

      {project.credentials && (
        <p className="mt-4 inline-block rounded-lg chip px-3 py-2 text-xs t-muted">
          Demo login: <span className="font-mono t-body">{project.credentials}</span>
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm font-medium">
        {project.caseStudy && (
          <Link
            href={`/hr-cv/projects/${project.slug}`}
            className="link-underline inline-flex items-center gap-1 t-accent t-accent-hover"
          >
            Read the case study <ArrowUpRight size={14} />
          </Link>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1 t-body t-accent-hover"
        >
          Live demo <ExternalLink size={13} />
        </a>
        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1 t-muted t-accent-hover"
          >
            {link.label} <ExternalLink size={13} />
          </a>
        ))}
      </div>
    </div>
  </article>
);

const CompactTile = ({ project }: { project: Project }) => (
  <article className="surface surface-hover print-card print-avoid-break rounded-xl p-5">
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-display text-base font-bold t-title">
        <span className="text-shine-hover">{project.name}</span>
      </h3>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex shrink-0 items-center gap-1 text-sm t-accent t-accent-hover"
      >
        {project.linkLabel ?? "Demo"} <ExternalLink size={13} />
      </a>
    </div>
    <p className="mt-2 text-sm t-body">{project.description}</p>
    <TechChips tech={project.tech} />
  </article>
);

export const ProjectsBento = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
      {featuredProjects.map((project) => (
        <FeaturedTile key={project.slug} project={project} />
      ))}
    </div>

    <div className="grid gap-4 sm:grid-cols-3">
      {otherProjects.map((project) => (
        <CompactTile key={project.slug} project={project} />
      ))}
    </div>
  </div>
);
