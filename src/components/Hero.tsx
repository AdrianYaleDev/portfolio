import Image from "next/image";
import type { HeroContent } from "@/lib/content";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { name, nameLines, subtitle, tagline, ctaLabel, ctaHref, imagePath } = content;

  return (
    <section id="home" className="flex h-screen">
      {/* ── Left: photo panel ── */}
      <div className="hidden md:block relative w-[42%] overflow-hidden flex-shrink-0">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-cover object-top"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-400 to-stone-500" />
        )}
      </div>

      {/* ── Right: hero content ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 flex-col justify-center px-10 md:px-14 lg:px-20 xl:px-28">
          {/* Mobile logo */}
          <p className="md:hidden font-display font-bold text-xs tracking-[0.25em] text-navy/50 mb-6 uppercase">
            {name}
          </p>

          <h1
            className="font-display font-bold uppercase leading-[0.9] tracking-tight text-navy mb-6"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
          >
            {nameLines[0]}
            <br />
            {nameLines[1]}
          </h1>

          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-navy/55 mb-5 font-semibold">
            {subtitle}
          </p>

          <p className="text-sm text-navy/50 max-w-[22rem] leading-7 mb-10">
            {tagline}
          </p>

          <a
            href={ctaHref}
            className="inline-block self-start border border-navy text-navy text-[0.6rem] tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-navy hover:text-white transition-all duration-300"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
