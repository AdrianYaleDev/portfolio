import type { WorkContent } from "@/lib/content";

interface WorkProps {
  content: WorkContent;
}


export default function Work({ content }: WorkProps) {
  const { eyebrow, heading, ctaLabel, ctaHref, projects } = content;

  return (
    <section id="portfolio" className="py-28 px-8 lg:px-16 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-semibold mb-3">
              {eyebrow}
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-wide text-navy">
              {heading}
            </h2>
          </div>
          <a
            href={ctaHref}
            className="text-[0.6rem] tracking-[0.25em] uppercase text-navy/50 hover:text-navy transition-colors underline underline-offset-4 self-start sm:self-auto"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group cursor-pointer overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden`}
              >
                {/* Decorative UI mock lines */}
                <div className="absolute inset-0 p-6 flex flex-col gap-2 opacity-25">
                  <div
                    className="w-1/3 h-1 rounded-full"
                    style={{ backgroundColor: p.accent }}
                  />
                  <div className="w-2/3 h-px bg-white/40" />
                  <div className="w-1/2 h-px bg-white/30" />
                  <div className="mt-3 w-full h-16 rounded bg-white/10 border border-white/10" />
                  <div className="flex gap-2 mt-2">
                    <div className="flex-1 h-8 rounded bg-white/10 border border-white/10" />
                    <div className="flex-1 h-8 rounded bg-white/10 border border-white/10" />
                  </div>
                </div>

                {/* Project initial badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-display font-bold tracking-wider"
                    style={{ color: p.accent }}
                  >
                    {p.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white border border-white/60 px-5 py-2">
                    View Project
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-4 pb-2 border-b border-[#e5e5df]">
                <p className="text-sm font-semibold text-navy tracking-wide">
                  {p.title}
                </p>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-navy/45 mt-0.5">
                  {p.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
