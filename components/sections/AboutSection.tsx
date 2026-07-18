import { about } from "@/content/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MapPin, GraduationCap, Briefcase, Signal } from "lucide-react";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-12">

      {/* Personal details strip */}
      <RevealOnScroll delay={0.04}>
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 rounded-xl border border-border/60 bg-bg-elevated/40 px-5 py-4">
          <Detail icon={<MapPin size={13} />} label="Location" value="Vadodara, India" />
          <Detail icon={<GraduationCap size={13} />} label="Degree" value="B.Tech CSE · Parul University" />
          <Detail icon={<Briefcase size={13} />} label="Year" value="4th Year" />
          <Detail icon={<Signal size={13} />} label="Status" value="Open to opportunities" />
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Left col — Mission */}
        <RevealOnScroll delay={0.08}>
          <div className="flex h-full flex-col rounded-xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Mission</p>
            <p className="mt-4 flex-1 text-base font-medium leading-relaxed text-fg">{about.mission}</p>
          </div>
        </RevealOnScroll>

        {/* Right 2 cols — Story + Philosophy stacked */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <RevealOnScroll delay={0.12}>
            <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent2">Story</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{about.story}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18}>
            <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent2">Philosophy</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{about.philosophy}</p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-fg-subtle">{icon}</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">{label}</span>
      <span className="text-xs text-fg-muted">{value}</span>
    </div>
  );
}
