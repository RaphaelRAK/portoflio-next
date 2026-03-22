"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/metadata";
import posthog from "posthog-js";

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
              onClick={() => posthog.capture("contact_email_clicked", { email: siteConfig.email })}
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
                      onClick={() => posthog.capture("contact_social_link_clicked", { platform: link.label.toLowerCase() })}
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

        {/* CV Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 pt-16 border-t border-[var(--color-border)]"
        >
          <p className="section-label text-[var(--color-accent)] mb-8">Mon CV</p>

          {/* Document frame */}
          <div
            className="border border-[var(--color-border)]"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            {/* Browser-chrome bar */}
            <div
              className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]"
              style={{ backgroundColor: "var(--color-surface-2)" }}
            >
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
              </span>
              <span
                className="flex-1 text-center section-label text-[var(--color-text-muted)] px-4 py-1 rounded-sm text-xs"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                CV_Raphael_Rakotonaivo.pdf
              </span>
            </div>

            {/* PDF embed — desktop */}
            <iframe
              src="/CV_Raphael_Rakotonaivo.pdf"
              title="CV Aina Raphaël Rakotonaivo"
              className="w-full hidden md:block"
              style={{ height: 720, border: "none" }}
            />

            {/* Mobile fallback */}
            <div className="md:hidden flex flex-col items-center justify-center gap-3 py-16 px-6">
              <span className="font-display text-4xl font-light text-[var(--color-border)]">PDF</span>
              <p className="section-label text-[var(--color-text-muted)] text-center">
                Prévisualisation disponible sur desktop
              </p>
            </div>
          </div>

          {/* Download CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm">
              Toutes mes expériences, formations et compétences en un seul document —
              mis à jour en 2025.
            </p>
            <a
              href="/CV_Raphael_Rakotonaivo.pdf"
              download
              className="group inline-flex items-center gap-3 border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-200 flex-shrink-0"
              onClick={() => posthog.capture("cv_downloaded", { source: "contact_section" })}
            >
              <span className="section-label">Télécharger mon CV</span>
              <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
