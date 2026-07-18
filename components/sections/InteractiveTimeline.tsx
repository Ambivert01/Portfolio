"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { achievements } from "@/content/achievements";
import { publications } from "@/content/research";
import { articles } from "@/content/writing";
import { talks } from "@/content/speaking";
import { openSource } from "@/content/openSource";

type Kind = "work" | "education" | "achievement" | "future" | "research" | "writing" | "speaking" | "opensource";

type TimelineEvent = {
  id: string;
  year: number;
  period: string;
  label: string;
  sublabel: string;
  kind: Kind;
  detail: string;
};

const MONTH_MAP: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

function extractYear(period: string): number {
  if (/present/i.test(period)) return new Date().getFullYear();
  const match = period.match(/([A-Za-z]{3})?\s*(\d{4})/);
  if (!match) return 0;
  const year = parseInt(match[2], 10);
  const month = match[1] ? (MONTH_MAP[match[1].toLowerCase()] ?? 0) : 0;
  return year + month / 100;
}

const dotColor: Record<Kind, string> = {
  work: "bg-accent",
  education: "bg-signal-green",
  achievement: "bg-accent2",
  future: "bg-transparent",
  research: "bg-signal-amber",
  writing: "bg-accent2",
  speaking: "bg-signal-green",
  opensource: "bg-accent",
};

const labelColor: Record<Kind, string> = {
  work: "text-accent",
  education: "text-signal-green",
  achievement: "text-accent2",
  future: "text-fg-subtle",
  research: "text-signal-amber",
  writing: "text-accent2",
  speaking: "text-signal-green",
  opensource: "text-accent",
};

const kindLabel: Record<Kind, string> = {
  work: "Work",
  education: "Education",
  achievement: "Achievement",
  future: "Planned",
  research: "Research",
  writing: "Writing",
  speaking: "Speaking",
  opensource: "Open Source",
};

const events: TimelineEvent[] = [
  ...experience.map((e, i) => ({
    id: `work-${i}`,
    year: extractYear(e.period),
    period: e.period,
    label: e.role,
    sublabel: e.org,
    kind: "work" as Kind,
    detail: e.summary,
  })),
  ...education.map((e, i) => ({
    id: `edu-${i}`,
    year: extractYear(e.period),
    period: e.period,
    label: e.degree,
    sublabel: e.institution,
    kind: "education" as Kind,
    detail: e.notes ?? (e.score ? `Score: ${e.score}` : ""),
  })),
  ...achievements.map((a, i) => ({
    id: `ach-${i}`,
    year: extractYear(a.year),
    period: a.year,
    label: a.title,
    sublabel: a.org,
    kind: "achievement" as Kind,
    detail: a.description,
  })),
  ...publications.filter((p) => p.year).map((p, i) => ({
    id: `research-${i}`,
    year: extractYear(p.year),
    period: p.year,
    label: p.title,
    sublabel: p.venue,
    kind: "research" as Kind,
    detail: p.summary,
  })),
  ...articles.filter((a) => a.year).map((a, i) => ({
    id: `writing-${i}`,
    year: extractYear(a.year),
    period: a.year,
    label: a.title,
    sublabel: a.platform,
    kind: "writing" as Kind,
    detail: a.summary,
  })),
  ...talks.filter((t) => t.year).map((t, i) => ({
    id: `speaking-${i}`,
    year: extractYear(t.year),
    period: t.year,
    label: t.title,
    sublabel: t.event,
    kind: "speaking" as Kind,
    detail: `Type: ${t.type}`,
  })),
  ...openSource.filter((o) => o.year).map((o, i) => ({
    id: `oss-${i}`,
    year: extractYear(o.year!),
    period: o.year!,
    label: o.repo,
    sublabel: o.role,
    kind: "opensource" as Kind,
    detail: o.description,
  })),
  {
    id: "future-ms",
    year: 2028,
    period: "2027 — onwards",
    label: "MS / Masters Abroad",
    sublabel: "Planned",
    kind: "future" as Kind,
    detail: "Planning to pursue a Master's degree abroad after completing B.Tech at Parul University in 2027. Exploring programs in AI, Systems, or Computer Science.",
  },
].sort((a, b) => a.year - b.year);

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.2;
const NODE_SPACING = 200; // px between nodes at zoom=1

export function InteractiveTimeline() {
  const [selected, setSelected] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const totalWidth = events.length * NODE_SPACING * zoom;

  const selectedEvent = events.find((e) => e.id === selected);

  function handleZoom(dir: "in" | "out") {
    setZoom((z) =>
      dir === "in"
        ? Math.min(MAX_ZOOM, parseFloat((z + ZOOM_STEP).toFixed(1)))
        : Math.max(MIN_ZOOM, parseFloat((z - ZOOM_STEP).toFixed(1)))
    );
  }

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-medium md:text-3xl">Journey</h2>

        {/* zoom controls */}
        <div className="flex items-center gap-1 rounded-sm border border-border bg-bg-elevated px-1">
          <button
            onClick={() => handleZoom("out")}
            disabled={zoom <= MIN_ZOOM}
            className="focus-ring px-2 py-1 font-mono text-sm text-fg-muted transition-colors hover:text-fg disabled:opacity-30"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="min-w-[3ch] text-center font-mono text-xs text-fg-subtle">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => handleZoom("in")}
            disabled={zoom >= MAX_ZOOM}
            className="focus-ring px-2 py-1 font-mono text-sm text-fg-muted transition-colors hover:text-fg disabled:opacity-30"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      </div>

      {/* legend — only show kinds that have at least one event */}
      <div className="mb-6 flex flex-wrap gap-4">
        {(Object.keys(kindLabel) as Kind[]).filter((k) => events.some((e) => e.kind === k)).map((k) => (
          <div key={k} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${k === "future" ? "border border-fg-subtle" : dotColor[k]}`} />
            <span className="font-mono text-xs text-fg-subtle">{kindLabel[k]}</span>
          </div>
        ))}
      </div>

      {/* scrollable track */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-2 select-none"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        onMouseDown={(e) => {
          isDragging.current = true;
          dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current!.scrollLeft };
          (e.currentTarget as HTMLElement).style.cursor = "grabbing";
        }}
        onMouseMove={(e) => {
          if (!isDragging.current) return;
          const dx = e.clientX - dragStart.current.x;
          scrollRef.current!.scrollLeft = dragStart.current.scrollLeft - dx;
        }}
        onMouseUp={(e) => {
          isDragging.current = false;
          (e.currentTarget as HTMLElement).style.cursor = "grab";
        }}
        onMouseLeave={(e) => {
          isDragging.current = false;
          (e.currentTarget as HTMLElement).style.cursor = "grab";
        }}
        onTouchStart={(e) => {
          isDragging.current = true;
          dragStart.current = { x: e.touches[0].clientX, scrollLeft: scrollRef.current!.scrollLeft };
        }}
        onTouchMove={(e) => {
          if (!isDragging.current) return;
          const dx = e.touches[0].clientX - dragStart.current.x;
          scrollRef.current!.scrollLeft = dragStart.current.scrollLeft - dx;
        }}
        onTouchEnd={() => { isDragging.current = false; }}
      >
        <div style={{ width: `${totalWidth}px`, minWidth: "100%" }}>
          {/* horizontal line */}
          <div className="relative" style={{ height: "120px" }}>
            <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-border" />

            {events.map((e, i) => {
              const x = (i + 0.5) * NODE_SPACING * zoom;
              const isSelected = selected === e.id;

              return (
                <button
                  key={e.id}
                  onMouseDown={(ev) => ev.stopPropagation()}
                  onClick={() => setSelected(isSelected ? null : e.id)}
                  className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 top-1/2 group p-3"
                  style={{ left: `${x}px` }}
                  aria-label={e.label}
                >
                  <motion.div
                    animate={{ scale: isSelected ? 1.4 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`h-4 w-4 rounded-full border-2 border-bg ${
                      e.kind === "future"
                        ? "border-dashed border-fg-subtle bg-transparent"
                        : dotColor[e.kind]
                    } transition-shadow group-hover:shadow-lg group-hover:shadow-accent/30`}
                  />
                </button>
              );
            })}
          </div>

          {/* year labels below line */}
          <div className="relative" style={{ height: "24px" }}>
            {events.map((e, i) => {
              const x = (i + 0.5) * NODE_SPACING * zoom;
              return (
                <span
                  key={e.id}
                  className="absolute -translate-x-1/2 font-mono text-[10px] text-fg-subtle"
                  style={{ left: `${x}px` }}
                >
                  {e.period.match(/\d{4}/)?.[0] ?? e.period}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* expanded card */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            key={selectedEvent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 rounded-xl border border-border bg-bg-elevated p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className={`font-mono text-xs ${labelColor[selectedEvent.kind]}`}>
                  {kindLabel[selectedEvent.kind]} · {selectedEvent.period}
                </span>
                <h3 className="mt-1 font-display text-lg font-medium text-fg">
                  {selectedEvent.label}
                </h3>
                <p className="mt-0.5 text-sm text-fg-muted">{selectedEvent.sublabel}</p>
                {selectedEvent.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {selectedEvent.detail}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="focus-ring shrink-0 text-fg-subtle hover:text-fg"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
