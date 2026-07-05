"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/content/skills";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

function SkillCard({ g, i }: { g: { group: string; items: string[] }; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { stiffness: 150, damping: 20 });
  const glowX = useTransform(x, [0, 1], [0, 100]);
  const glowY = useTransform(y, [0, 1], [0, 100]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }
  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <RevealOnScroll delay={i * 0.1}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setExpanded((v) => !v)}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        whileHover={{ scale: 1.02, zIndex: 10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative cursor-pointer overflow-hidden rounded-xl border border-border bg-bg-elevated/60 p-5 backdrop-blur-sm"
      >
        {/* cursor glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(180px circle at ${glowX}% ${glowY}%, hsl(var(--accent)/0.12), transparent 70%)`,
            opacity: expanded ? 0.8 : undefined,
          }}
        />

        {/* accent border glow on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl border border-accent/0 transition-all duration-300"
          animate={{ borderColor: expanded ? "hsl(var(--accent)/0.4)" : "hsl(var(--accent)/0)" }}
        />

        {/* header */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent2"
              animate={{ scale: expanded ? 1.6 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-fg">
              {g.group}
            </h3>
          </div>
          <motion.span
            className="font-mono text-xs text-fg-subtle"
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            +
          </motion.span>
        </div>

        {/* badges — always visible, expand shows count label */}
        <motion.div
          className="mt-4 flex flex-wrap gap-2 overflow-hidden"
          animate={{ height: expanded ? "auto" : "auto" }}
        >
          <AnimatePresence initial={false}>
            {g.items.map((item, j) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 6 }}
                transition={{ delay: j * 0.04, type: "spring", stiffness: 400, damping: 25 }}
              >
                <Badge tone="neutral">{item}</Badge>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* bottom count */}
        <motion.p
          className="mt-3 font-mono text-xs text-fg-subtle"
          animate={{ opacity: expanded ? 1 : 0.4 }}
        >
          {g.items.length} tools
        </motion.p>
      </motion.div>
    </RevealOnScroll>
  );
}

export function Stack() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <SkillCard key={g.group} g={g} i={i} />
        ))}
      </div>
    </section>
  );
}
