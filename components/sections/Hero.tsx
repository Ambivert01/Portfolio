"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SignalIndicator } from "@/components/ui/SignalIndicator";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const words = siteConfig.tagline.split(" ");

export function Hero() {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const photoX = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 100, damping: 20 });
  const photoY = useSpring(useTransform(py, [0, 1], [-10, 10]), { stiffness: 100, damping: 20 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section onMouseMove={handleMove} className="relative overflow-hidden">
      <div className="mesh-gradient absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[1fr_280px] md:items-center md:py-28">
        <div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SignalIndicator tone="amber" label="SYSTEM: ONLINE" />
          </motion.div>

          <h1 className="mt-6 flex max-w-3xl flex-wrap font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                className="mr-3"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Magnetic>
              <Button href="/work">View work</Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href={siteConfig.resumeUrl} variant="secondary">Download resume</Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* photo column — centered in its grid cell */}
        <motion.div
          style={{ x: photoX, y: photoY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex md:items-center md:justify-center"
        >
          <div className="relative">
            {/* glow halo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-accent2/20 to-transparent blur-2xl" aria-hidden />
            {/* gradient border ring */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-accent via-accent2 to-accent/40">
              <div className="overflow-hidden rounded-3xl bg-bg-inset w-[260px] h-[340px]">
                <Image
                  src="/Profile.png"
                  alt="Professional photo"
                  width={896}
                  height={1196}
                  className="w-full h-full object-cover object-[center_8%]"
                  priority
                />
              </div>
            </div>
            <span className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-br from-accent to-accent2 shadow-lg shadow-accent/50" aria-hidden />
            <span className="absolute -top-2 -left-2 h-2.5 w-2.5 rounded-full bg-accent2/70" aria-hidden />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
