"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiLaravel,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiStripe,
  SiFirebase,
  SiFigma,
  SiStorybook,
  SiJavascript,
  SiGit,
  SiGnubash,
  SiLinux,
} from "react-icons/si";

const techIcons: Record<string, IconType> = {
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "NestJS": SiNestjs,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Python": SiPython,
  "Laravel": SiLaravel,
  "Docker": SiDocker,
  "Docker Compose": SiDocker,
  "Nginx": SiNginx,
  "GitHub Actions": SiGithubactions,
  "Serveur dédié": SiLinux,
  "Stripe": SiStripe,
  "Firebase/FCM": SiFirebase,
  "Figma": SiFigma,
  "Storybook": SiStorybook,
  "JavaScript": SiJavascript,
  "Git": SiGit,
  "Bash": SiGnubash,
};

const techColors: Record<string, string> = {
  "React Native": "#61DAFB",
  "Next.js": "#ffffff",
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Redux Toolkit": "#764ABC",
  "NestJS": "#E0234E",
  "PostgreSQL": "#4169E1",
  "Supabase": "#3ECF8E",
  "Python": "#3776AB",
  "Laravel": "#FF2D20",
  "Docker": "#2496ED",
  "Docker Compose": "#2496ED",
  "Nginx": "#009639",
  "GitHub Actions": "#2088FF",
  "Serveur dédié": "#FCC624",
  "Stripe": "#635BFF",
  "Firebase/FCM": "#FFCA28",
  "Figma": "#F24E1E",
  "Storybook": "#FF4785",
  "JavaScript": "#F7DF1E",
  "Git": "#F05032",
  "Bash": "#4EAA25",
  "Linux": "#FCC624",
};

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React Native", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux Toolkit", level: "Avancé" },
      { name: "React Query", level: "Avancé" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "NestJS", level: "Expert" },
      { name: "REST API", level: "Expert" },
      { name: "PostgreSQL", level: "Avancé" },
      { name: "Supabase", level: "Avancé" },
      { name: "Python", level: "Intermédiaire" },
      { name: "Laravel", level: "Intermédiaire" },
    ],
  },
  {
    label: "DevOps",
    techs: [
      { name: "Docker", level: "Avancé" },
      { name: "Docker Compose", level: "Avancé" },
      { name: "Nginx", level: "Avancé" },
      { name: "Scaleway", level: "Avancé" },
      { name: "GitHub Actions", level: "Intermédiaire" },
      { name: "Serveur dédié", level: "Avancé" },
    ],
  },
  {
    label: "Outils",
    techs: [
      { name: "Stripe", level: "Avancé" },
      { name: "Firebase/FCM", level: "Avancé" },
      { name: "Mailjet", level: "Avancé" },
      { name: "n8n", level: "Avancé" },
      { name: "ElevenLabs", level: "Intermédiaire" },
      { name: "Figma", level: "Intermédiaire" },
      { name: "Storybook", level: "Intermédiaire" },
    ],
  },
  {
    label: "Divers",
    techs: [
      { name: "JavaScript", level: "Expert" },
      { name: "Java", level: "Intermédiaire" },
      { name: "C", level: "Intermédiaire" },
      { name: "Bash", level: "Intermédiaire" },
      { name: "Git", level: "Avancé" },
    ],
  },
];

const levelColor: Record<string, string> = {
  Expert: "var(--color-accent)",
  Avancé: "var(--color-text)",
  Intermédiaire: "var(--color-text-muted)",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, y: -10, scale: 0.92, transition: { duration: 0.15 } },
};

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed =
    activeCategory
      ? categories.filter((c) => c.label === activeCategory)
      : categories;

  return (
    <section id="stack" ref={ref} className="py-32 px-6 md:px-12">
      <div
        className="py-20 px-6 md:px-12"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display text-7xl font-light text-[var(--color-surface-2)] select-none">
              05
            </span>
            <div>
              <span className="rule-line mb-2" />
              <p className="section-label text-[var(--color-accent)]">Stack technique</p>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className="section-label px-4 py-2 border transition-all duration-200"
              style={{
                borderColor: !activeCategory ? "var(--color-accent)" : "var(--color-border)",
                color: !activeCategory ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
            >
              Tout
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label === activeCategory ? null : cat.label)}
                className="section-label px-4 py-2 border transition-all duration-200"
                style={{
                  borderColor:
                    activeCategory === cat.label
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                  color:
                    activeCategory === cat.label
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tech grid */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {displayed.map((category, ci) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0, transition: { delay: ci * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } : { opacity: 0, x: -20 }}
                  exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                  layout
                >
                  <div className="flex items-center gap-4 mb-6">
                    <p className="section-label text-[var(--color-accent)]">{category.label}</p>
                    <span className="flex-1 h-px bg-[var(--color-border)]" />
                  </div>
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <AnimatePresence>
                      {category.techs.map((tech) => (
                        <TechPill key={tech.name} tech={tech} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-[var(--color-border)]">
            {Object.entries(levelColor).map(([level, color]) => (
              <div key={level} className="flex items-center gap-2">
                <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="section-label" style={{ color }}>
                  {level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechPill({ tech }: { tech: { name: string; level: string } }) {
  const [hovered, setHovered] = useState(false);
  const levelCol = levelColor[tech.level];
  const brandColor = techColors[tech.name];
  const Icon = techIcons[tech.name];

  return (
    <motion.div
      variants={pillVariants}
      whileHover={{ y: -3, scale: 1.04, transition: { type: "spring" as const, stiffness: 400, damping: 15 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-2 px-4 py-2 border cursor-default transition-colors duration-200"
      style={{
        borderColor: hovered ? (brandColor ?? levelCol) : "var(--color-border)",
        backgroundColor: hovered ? "var(--color-bg)" : "transparent",
      }}
    >
      {Icon && (
        <Icon
          size={14}
          style={{
            color: brandColor ?? "var(--color-text-muted)",
            flexShrink: 0,
            opacity: hovered ? 1 : 0.75,
            transition: "opacity 0.2s",
          }}
        />
      )}
      <span
        className="section-label transition-colors duration-200"
        style={{ color: hovered ? (brandColor ?? levelCol) : "var(--color-text)" }}
      >
        {tech.name}
      </span>
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 section-label whitespace-nowrap text-[10px]"
          style={{ color: levelCol }}
        >
          {tech.level}
        </motion.span>
      )}
    </motion.div>
  );
}
