"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const SCROLL_HINTS = [
  "vous y êtes presque",
  "encore un petit effort",
  "ça vaut le coup, promis",
  "patience, c'est bientôt",
];

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  previewNotice?: string;
  technologies: string[];
  hasCTA?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  index?: number;
}

function ScreenMockup({
  src,
  alt,
  previewNotice,
}: {
  src?: string;
  alt: string;
  previewNotice?: string;
}) {
  return (
    <div className="relative mx-auto select-none" style={{ maxWidth: "400px" }}>
      {/* Monitor frame */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#141414",
          border: "1.5px solid #2a2a2a",
          boxShadow:
            "0 24px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* Traffic lights */}
        <div
          className="flex items-center gap-1.5 px-3"
          style={{
            height: "20px",
            background: "#0e0e0e",
            borderBottom: "1px solid #1c1c1c",
          }}
        >
          <div
            className="rounded-full"
            style={{ width: "9px", height: "9px", background: "#ff5f57" }}
          />
          <div
            className="rounded-full"
            style={{ width: "9px", height: "9px", background: "#ffbd2e" }}
          />
          <div
            className="rounded-full"
            style={{ width: "9px", height: "9px", background: "#28ca41" }}
          />
        </div>

        {/* Screen */}
        <div
          className="relative"
          style={{ aspectRatio: "16/10", background: "#050505" }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                opacity: 0.3,
              }}
            />
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 45%)",
            }}
          />
          {previewNotice && (
            <div className="absolute left-3 top-3 rounded-md border border-[var(--color-accent)]/40 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-accent)]">
              Aperçu généré
            </div>
          )}
        </div>

        {/* Bottom chin */}
        <div
          className="flex items-center justify-center"
          style={{ height: "14px", background: "#101010" }}
        >
          <div
            className="rounded-full"
            style={{ width: "18px", height: "3px", background: "#1c1c1c" }}
          />
        </div>
      </div>

      {/* Stand neck */}
      <div
        className="mx-auto"
        style={{
          width: "40px",
          height: "18px",
          background: "linear-gradient(to bottom, #242424, #1a1a1a)",
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Stand base */}
      <div
        className="mx-auto rounded-full"
        style={{
          width: "120px",
          height: "6px",
          background: "linear-gradient(to bottom, #212121, #171717)",
        }}
      />
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  image,
  previewNotice,
  technologies,
  hasCTA = false,
  ctaLabel = "Voir le projet",
  ctaHref = "#",
  index = 0,
}: ProjectCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // --- Scroll-based entry animation ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center 60%"],
  });

  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scrollTranslateY = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  // --- Mouse tilt ---
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: dy * -7, y: dx * 7 });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const hint = SCROLL_HINTS[index % SCROLL_HINTS.length];

  return (
    <div ref={sectionRef}>
      {/* ── Hover indicator — fixed height to prevent layout shift ── */}
      <div
        className="flex flex-col items-center justify-end"
        style={{ height: "120px", paddingBottom: "0px" }}
      >
        {/* Hint text */}
        <motion.div
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="px-4 py-1 rounded-full border text-xs tracking-[0.15em] uppercase font-medium whitespace-nowrap mb-3"
          style={{
            color: "var(--color-accent)",
            borderColor: "var(--color-accent)",
            pointerEvents: "none",
          }}
        >
          {hint}
        </motion.div>

        {/* Growing line */}
        <div
          className="relative w-px flex-shrink-0"
          style={{ height: "56px", background: "var(--color-border)" }}
        >
          <motion.div
            className="absolute inset-x-0 top-0"
            animate={isHovered ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              height: "100%",
              transformOrigin: "top",
              background: "var(--color-accent)",
            }}
          />
        </div>

        {/* Animated dot at base */}
        <div
          className="relative flex items-center justify-center flex-shrink-0"
          style={{ width: "24px", height: "24px" }}
        >
          <motion.div
            animate={{ scale: [1, 2.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              width: "10px",
              height: "10px",
              background: "var(--color-accent)",
            }}
          />
          <div
            className="relative z-10 rounded-full"
            style={{
              width: "7px",
              height: "7px",
              background: "var(--color-accent)",
            }}
          />
        </div>
      </div>

      {/* ── Card with scroll tilt + mouse tilt ── */}
      <div style={{ perspective: "1200px" }}>
        {/* Scroll-based entry: tilts from behind then straightens */}
        <motion.div style={{ rotateX: scrollRotateX, y: scrollTranslateY, opacity: cardOpacity }}>
          {/* Mouse tilt layer */}
          <div
            ref={cardRef}
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                y: isHovered ? -10 : 0,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="h-full flex flex-col"
              style={{
                borderRadius: "16px",
                background: "var(--color-surface)",
                border: "1px solid",
                borderColor: isHovered
                  ? "rgba(201,168,76,0.2)"
                  : "var(--color-border)",
                boxShadow: isHovered
                  ? "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.1)"
                  : "0 6px 20px rgba(0,0,0,0.28)",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                willChange: "transform",
                overflow: "hidden",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  padding: "28px 28px 0",
                  background:
                    "linear-gradient(160deg, var(--color-surface-2) 0%, var(--color-surface) 100%)",
                }}
              >
                <ScreenMockup src={image} alt={title} previewNotice={previewNotice} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 pt-5">
                <h3
                  className="font-display font-light mb-2"
                  style={{
                    fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                    color: "var(--color-text)",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {description}
                </p>
                {previewNotice && (
                  <p className="text-xs leading-relaxed mb-4 text-[var(--color-accent)]/90">
                    {previewNotice}
                  </p>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 border"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-muted)",
                        borderRadius: "4px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {hasCTA && (
                  <div className="mt-auto">
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg"
                      style={{
                        background: "var(--color-accent)",
                        color: "var(--color-bg)",
                        transition: "transform 0.18s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.045)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      {ctaLabel}
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
