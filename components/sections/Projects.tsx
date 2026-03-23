"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import posthog from "posthog-js";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
            04
          </span>
          <div>
            <span className="rule-line mb-2" />
            <p className="section-label text-[var(--color-accent)]">Projets</p>
          </div>
        </div>

        {/* Featured — two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}/`}
              onClick={() =>
                posthog.capture("project_clicked", {
                  slug: project.slug,
                  title: project.title,
                })
              }
              className="block"
            >
              <ProjectCard
                title={project.title}
                description={project.shortDesc}
                image={project.images?.[0]}
                previewNotice={project.previewNotice}
                technologies={project.stack.slice(0, 6)}
                hasCTA={false}
                index={i}
              />
            </Link>
          ))}
        </div>

        {/* Rest — same grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                onClick={() =>
                  posthog.capture("project_clicked", {
                    slug: project.slug,
                    title: project.title,
                  })
                }
                className="block"
              >
                <ProjectCard
                  title={project.title}
                  description={project.shortDesc}
                  image={project.images?.[0]}
                  previewNotice={project.previewNotice}
                  technologies={project.stack.slice(0, 5)}
                  hasCTA={!!project.links.live}
                  ctaLabel="Voir le projet"
                  ctaHref={project.links.live}
                  index={featured.length + i}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
