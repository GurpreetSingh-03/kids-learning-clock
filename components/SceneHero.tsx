import Image from "next/image";

interface SceneHeroProps {
  src: string;
  alt: string;
  /** Set true only for an above-the-fold hero (LCP) image. */
  priority?: boolean;
  className?: string;
}

// A rounded, framed illustration banner used at the top of content pages.
// Uses next/image for automatic AVIF/WebP + responsive sizing.
export default function SceneHero({
  src,
  alt,
  priority = false,
  className = "",
}: SceneHeroProps) {
  return (
    <div
      className={`group relative w-full aspect-[16/9] rounded-3xl overflow-hidden border-4 border-white bg-purple-50 shadow-xl shadow-purple-200/60 ring-1 ring-purple-100 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 900px"
        className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
      {/* Soft bottom scrim for depth + glossy inner highlight (theme-tinted) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-900/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
    </div>
  );
}
