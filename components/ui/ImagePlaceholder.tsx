import Image from "next/image";

export function ImagePlaceholder({
  src,
  label,
  aspect = "aspect-square",
  className = "",
}: {
  src?: string;
  label: string;
  aspect?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`${aspect} ${className} relative overflow-hidden rounded-md border border-border bg-bg-inset`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 220px, 220px"
          className="object-cover object-top"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center overflow-hidden rounded-md border border-border bg-bg-inset`}
    >
      <span className="font-mono text-xs text-fg-subtle">{label}</span>
    </div>
  );
}

