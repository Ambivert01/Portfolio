"use client";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Shot = { url: string; caption?: string };

export function Lightbox({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i! - 1 + shots.length) % shots.length);
  const next = () => setIndex((i) => (i! + 1) % shots.length);

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {shots.map((s, i) => (
          <figure key={i} className="cursor-zoom-in" onClick={() => open(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.url} alt={`Screenshot ${i + 1}`}
              className="rounded-lg border border-border object-cover w-full transition-opacity hover:opacity-80" />
          </figure>
        ))}
      </div>

      {index !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated/80 text-fg hover:bg-bg-elevated">
            <ChevronLeft size={20} />
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shots[index].url} alt={`Screenshot ${index + 1}`}
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain" />
          </div>

          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated/80 text-fg hover:bg-bg-elevated">
            <ChevronRight size={20} />
          </button>

          <button onClick={close}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-bg-elevated/80 text-fg hover:bg-bg-elevated">
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
