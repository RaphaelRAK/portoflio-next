"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type React from "react";

const stats = [
  { value: "4×", label: "Mention Bien" },
  { value: "5", label: "ans double vie" },
  { value: "10+", label: "technos en prod" },
  { value: "CDI", label: "depuis 2025" },
];

// Anime les 4 angles du coin (brackets L) qui se révèlent simultanément à l'entrée
function CornerBrackets({ inView, delay }: { inView: boolean; delay: number }) {
  const SIZE = 12; // longueur de chaque bras du bracket en px

  const corners = [
    // top-left
    {
      style: { top: 6, left: 6 },
      h: { top: 0, left: 0, width: SIZE, height: 1 },
      v: { top: 0, left: 0, width: 1, height: SIZE },
    },
    // top-right
    {
      style: { top: 6, right: 6 },
      h: { top: 0, right: 0, width: SIZE, height: 1 },
      v: { top: 0, right: 0, width: 1, height: SIZE },
    },
    // bottom-left
    {
      style: { bottom: 6, left: 6 },
      h: { bottom: 0, left: 0, width: SIZE, height: 1 },
      v: { bottom: 0, left: 0, width: 1, height: SIZE },
    },
    // bottom-right
    {
      style: { bottom: 6, right: 6 },
      h: { bottom: 0, right: 0, width: SIZE, height: 1 },
      v: { bottom: 0, right: 0, width: 1, height: SIZE },
    },
  ];

  return (
    <span className="absolute inset-0 pointer-events-none z-10" aria-hidden>
      {corners.map((corner, ci) => (
        <span key={ci} className="absolute" style={corner.style as React.CSSProperties}>
          {/* horizontal arm */}
          <motion.span
            className="absolute bg-[var(--color-accent)]"
            style={corner.h as React.CSSProperties}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.35, delay, ease: "easeOut" }}
          />
          {/* vertical arm */}
          <motion.span
            className="absolute bg-[var(--color-accent)]"
            style={corner.v as React.CSSProperties}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 0.35, delay, ease: "easeOut" }}
          />
        </span>
      ))}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
            02
          </span>
          <div>
            <span className="rule-line mb-2" />
            <p className="section-label text-[var(--color-accent)]">À propos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <h2
              className="font-display font-light mb-8 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Né à Madagascar,
              <br />
              construit à La Réunion.
            </h2>

            <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                Développeur fullstack formé à l&apos;Université de La Réunion — Master 2
                Informatique 2025, Mention Bien. Pendant 5 ans, j&apos;ai mené de front études
                et emplois alimentaires : restaurant universitaire, Burger King, SHISO Burger,
                inventoriste. Cette double vie m&apos;a appris la discipline, la résistance et
                l&apos;efficacité.
              </p>
              <p>
                Aujourd&apos;hui en CDI chez{" "}
                <span className="text-[var(--color-text)]">plüm</span>, je conçois et
                déploie des applications mobiles React Native et des plateformes web Next.js.
                Du prototype au serveur de production : je couvre l&apos;ensemble de la chaîne.
              </p>
              <p>
                Je cherche à construire des produits qui ont de l&apos;impact — en équipe,
                en remote, depuis La Réunion ou en métropole.
              </p>
            </div>

            {/* Citation */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 pl-6 border-l-2 border-[var(--color-accent)]"
            >
              <p className="font-display text-xl md:text-2xl font-light italic text-[var(--color-text)]">
                &ldquo;Jongler avec plusieurs responsabilités n&apos;est pas une contrainte —
                c&apos;est une compétence.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)]">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative flex flex-col justify-center p-8"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <CornerBrackets inView={inView} delay={0.5 + i * 0.12} />
                  <p
                    className="font-display font-light text-[var(--color-accent)] mb-1"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="section-label text-[var(--color-text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
