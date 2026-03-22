"use client";

import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { siteConfig } from "@/lib/metadata";

// Delays (s): line1 starts at 0.5, each char 0.055s apart, lines chained
const CHAR_SPEED = 0.055;
const LINE1 = { text: "Aina", start: 0.5 };
const LINE2 = { text: "Raphaël", start: LINE1.start + LINE1.text.length * CHAR_SPEED + 0.05 };
const LINE3 = { text: "Rakotonaivo", start: LINE2.start + LINE2.text.length * CHAR_SPEED + 0.05 };
const CURSOR_DELAY = LINE3.start + LINE3.text.length * CHAR_SPEED + 0.1;

const charVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

function TypewriterLine({
  text,
  delayStart,
  className,
  style,
}: {
  text: string;
  delayStart: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      style={{ display: "block", ...style }}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: CHAR_SPEED, delayChildren: delayStart } },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Cursor({ delay }: { delay: number }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { opacity: [0, 0, 1] },
      { duration: 0.1, delay, ease: "linear" }
    ).then(() => {
      animate(
        scope.current,
        { opacity: [1, 0] },
        { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 0.4 }
      );
    });
  }, [animate, delay, scope]);

  return (
    <span
      ref={scope}
      style={{
        display: "inline-block",
        width: "3px",
        height: "0.85em",
        backgroundColor: "var(--color-accent)",
        marginLeft: "6px",
        verticalAlign: "middle",
        opacity: 0,
      }}
    />
  );
}

const techMarqueeItems = [
  { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Scaleway", icon: "https://cdn.simpleicons.org/scaleway" },
  { name: "Redux Toolkit", icon: "https://cdn.simpleicons.org/redux" },
  { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
];

const techMarquee = [...techMarqueeItems, ...techMarqueeItems];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-0 pt-24 overflow-hidden">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end"
        >
          {/* Left — main content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Section label */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="section-label">Portfolio 2025</span>
              <span className="block h-px w-12 bg-[var(--color-accent)]" />
              <span className="section-label text-[var(--color-text-muted)]">
                La Réunion · Remote · Paris · Lyon · Toulouse
              </span>
            </motion.div>

            {/* Name — typewriter */}
            <div className="overflow-visible">
              <h1
                className="font-display font-light leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
              >
                <TypewriterLine
                  text={LINE1.text}
                  delayStart={LINE1.start}
                  className="text-[var(--color-text)]"
                />
                <TypewriterLine
                  text={LINE2.text}
                  delayStart={LINE2.start}
                  className="text-[var(--color-text)]"
                />
                <span className="block" style={{ position: "relative" }}>
                  <TypewriterLine
                    text={LINE3.text}
                    delayStart={LINE3.start}
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px var(--color-accent)",
                    }}
                  />
                  <Cursor delay={CURSOR_DELAY} />
                </span>
              </h1>
            </div>

            {/* Title + accroche */}
            <motion.div variants={item} className="max-w-xl">
              <p className="font-display text-2xl md:text-3xl font-light text-[var(--color-text-muted)] mb-4">
                Développeur Fullstack
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base">
                5 ans à jongler entre les études et la vraie vie. Aujourd&apos;hui en CDI,
                je construis des produits qui tiennent en prod — mobile, web, infrastructure.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToExperience}
                className="group flex items-center gap-2 section-label border border-[var(--color-text)] text-[var(--color-text)] px-6 py-3 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-200"
              >
                Mon parcours
                <span className="transition-transform group-hover:translate-y-1">↓</span>
              </button>
              <button
                onClick={scrollToContact}
                className="section-label text-[var(--color-accent)] hover:underline underline-offset-4 transition-all duration-200"
              >
                Me contacter →
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-6 pb-12">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="section-label text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                GitHub
              </a>
              <span className="block w-4 h-px bg-[var(--color-border)]" />
              <a
                href={siteConfig.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="section-label text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                GitLab
              </a>
              <span className="block w-4 h-px bg-[var(--color-border)]" />
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="section-label text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            variants={item}
            className="lg:col-span-4 flex justify-center lg:justify-end items-end"
          >
            <div className="relative">
              {/* Decorative frame offset */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-[var(--color-accent-dim)] opacity-40"
                style={{ zIndex: 0 }}
              />
              <div className="relative overflow-hidden" style={{ width: 260, height: 320 }}>
                <Image
                  src="/images/raph.jpeg"
                  alt="Aina Raphaël Rakotonaivo"
                  fill
                  className="object-cover photo-treatment"
                  priority
                  sizes="260px"
                />
                {/* Gold overlay strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee band */}
      <div
        className="mt-16 border-t border-b border-[var(--color-border)] py-3 overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-hidden
      >
        <div className="flex">
          <div className="marquee-track">
            {techMarquee.map((tech, i) => (
              <span
                key={i}
                className="section-label text-[var(--color-text-muted)] flex items-center gap-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 opacity-60"
                />
                {tech.name}
                <span className="text-[var(--color-accent)]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
