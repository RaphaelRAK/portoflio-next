"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/metadata";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
            08
          </span>
          <div>
            <span className="rule-line mb-2" />
            <p className="section-label text-[var(--color-accent)]">Contact</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-8"
          >
            <h2
              className="font-display font-light leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Construisons quelque
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                }}
              >
                chose ensemble.
              </span>
            </h2>

            <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-xl mb-10">
              Ouvert aux opportunités CDI, CDD, remote, et projets formateurs.
              La Réunion, Paris, Lyon, Toulouse — ou derrière un écran, peu importe.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-4"
            >
              <span
                className="font-display text-2xl md:text-3xl font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                {siteConfig.email}
              </span>
              <span
                className="text-2xl text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-4"
          >
            <div className="space-y-8">
              <div>
                <p className="section-label text-[var(--color-accent)] mb-3">Localisation</p>
                <p className="font-display text-xl font-light text-[var(--color-text)]">
                  La Réunion
                </p>
                <p className="section-label text-[var(--color-text-muted)] mt-1">
                  Ouvert remote · Paris · Lyon · Toulouse
                </p>
              </div>

              <div>
                <p className="section-label text-[var(--color-accent)] mb-3">Téléphone</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-display text-xl font-light text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="section-label text-[var(--color-accent)] mb-4">Réseaux</p>
                <div className="space-y-3">
                  {[
                    { label: "GitHub", href: siteConfig.github },
                    { label: "GitLab", href: siteConfig.gitlab },
                    { label: "LinkedIn", href: siteConfig.linkedin },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group py-2"
                      style={{ borderBottom: "1px solid var(--color-border)" }}
                    >
                      <span className="font-display text-base font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        {link.label}
                      </span>
                      <span className="section-label text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
