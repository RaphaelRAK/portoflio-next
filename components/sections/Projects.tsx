"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
            04
          </span>
          <div>
            <span className="rule-line mb-2" />
            <p className="section-label text-[var(--color-accent)]">Projets</p>
          </div>
        </div>

        <div className="space-y-px bg-[var(--color-border)]">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} globalInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  globalInView,
}: {
  project: (typeof projects)[number];
  index: number;
  globalInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={globalInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/projects/${project.slug}/`} className="block group">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start p-6 md:p-8 transition-colors duration-200 cursor-pointer"
          style={{ backgroundColor: "var(--color-surface)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.backgroundColor =
              "var(--color-surface-2)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.backgroundColor =
              "var(--color-surface)")
          }
        >
          {/* Index + title */}
          <div className="md:col-span-1 flex items-start pt-1">
            <span className="section-label text-[var(--color-border)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="md:col-span-5">
            <h3
              className="font-display font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200 mb-2"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
            >
              {project.title}
            </h3>
            <p className="section-label text-[var(--color-text-muted)]">{project.context}</p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col items-start md:items-end gap-3">
            {project.images?.[0] ? (
              <div className="relative w-16 h-12 overflow-hidden border border-[var(--color-border)] opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                <Image
                  src={project.images[0]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            ) : (
              <p className="section-label text-[var(--color-text-muted)]">{project.period}</p>
            )}
            <div className="flex items-center gap-1 section-label text-[var(--color-accent)] group-hover:gap-2 transition-all duration-200">
              Voir
              <span>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
