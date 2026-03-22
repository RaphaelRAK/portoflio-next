"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Développeur Fullstack",
    company: "plüm",
    period: "Sept. 2024 — présent",
    type: "CDI",
    desc: "Développement et maintenance d'une app mobile React Native et d'une plateforme web Next.js. Architecture NestJS, PostgreSQL/Supabase, Stripe, Firebase/FCM, Docker, Scaleway. Intégration de workflows n8n et agent vocal ElevenLabs.",
    stack: ["React Native", "Next.js", "NestJS", "TypeScript", "Docker"],
  },
  {
    role: "Développeur TER",
    company: "LIM — Université de La Réunion",
    period: "Jan. 2024 — Juin 2024",
    type: "Recherche",
    desc: "Développement d'un service de suivi des activités étudiants sur les serveurs de TP. Scripts Bash, base de données, tableaux de bord Dash/Python.",
    stack: ["Python", "Dash", "Bash", "PostgreSQL"],
  },
  {
    role: "Développeur TER",
    company: "LIM — Université de La Réunion",
    period: "Sept. 2023 — Déc. 2023",
    type: "Recherche",
    desc: "Mise à jour du prototype Maïdo VR — visite virtuelle du laboratoire atmosphérique du Piton Maïdo. Refactorisation du code existant et intégration de nouvelles fonctionnalités.",
    stack: ["JavaScript", "WebXR"],
  },
  {
    role: "Développeur Web Stagiaire",
    company: "ESIGE — Madagascar",
    period: "Déc. 2022 — Jan. 2023",
    type: "Stage",
    desc: "Pilotage du développement d'une application web de gestion numérique pour une université privée — cours en ligne, gestion des examens.",
    stack: ["Laravel", "PHP", "MySQL"],
  },
];

const education = [
  {
    degree: "Master 2 Informatique",
    school: "Université de La Réunion",
    period: "2025",
    mention: "Mention Bien",
  },
  {
    degree: "Licence Informatique",
    school: "Université de La Réunion",
    period: "2023",
    mention: "Mention Bien",
  },
  {
    degree: "Commerce électronique & e-business",
    school: "CNFDI — à distance",
    period: "2021",
    mention: "Mention Bien",
  },
  {
    degree: "Baccalauréat Scientifique Série C (Madagascar)",
    school: "Lycée Notre Dame Majunga ",
    period: "2017",
    mention: "Mention Bien",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
            06
          </span>
          <div>
            <span className="rule-line mb-2" />
            <p className="section-label text-[var(--color-accent)]">Expérience & Formation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experiences */}
          <div className="lg:col-span-7">
            <p className="section-label text-[var(--color-accent)] mb-8">Expériences</p>
            <div className="space-y-px bg-[var(--color-border)]">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-6"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-light text-[var(--color-text)] mb-0.5">
                        {exp.role}
                      </h3>
                      <p className="section-label text-[var(--color-text-muted)]">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="section-label text-[var(--color-text-muted)]">{exp.period}</p>
                      <span
                        className="section-label text-[10px] mt-1 inline-block px-2 py-0.5"
                        style={{
                          color: "var(--color-accent)",
                          border: "1px solid var(--color-accent-dim)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="section-label text-[10px] px-2 py-1"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <p className="section-label text-[var(--color-accent)] mb-8">Formation</p>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start gap-4 pb-6"
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-light text-[var(--color-text)] mb-1">
                      {edu.degree}
                    </h3>
                    {edu.school && (
                      <p className="section-label text-[var(--color-text-muted)] mb-2">
                        {edu.school}
                      </p>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="section-label text-[var(--color-text-muted)]">
                        {edu.period}
                      </span>
                      <span className="section-label text-[var(--color-accent)]">
                        {edu.mention}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10">
              <p className="section-label text-[var(--color-accent)] mb-6">Langues</p>
              <div className="space-y-3">
                {[
                  { lang: "Français", level: "Courant" },
                  { lang: "Anglais", level: "Professionnel" },
                  { lang: "Malagasy", level: "Courant" },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center justify-between">
                    <span className="font-display text-base font-light text-[var(--color-text)]">
                      {l.lang}
                    </span>
                    <span className="section-label text-[var(--color-text-muted)]">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
