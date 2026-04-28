import type { AboutContent } from "@/lib/content";

interface AboutProps {
  content: AboutContent;
}


export default function About({ content }: AboutProps) {
  const { eyebrow, heading, paragraphs, badgeYears, badgeLabel, skills } = content;

  return (
    <section id="about" className="py-28 px-8 lg:px-16 bg-surface scroll-mt-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-wide text-navy mb-6">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-navy/60 leading-8 text-sm ${
                i < paragraphs.length - 1 ? "mb-4" : "mb-10"
              }`}
            >
              {p}
            </p>
          ))}

          {/* Skills */}
          <div className="flex gap-10">
            {skills.map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className="text-navy/70">{icon}</span>
                <span className="text-[0.6rem] tracking-[0.22em] uppercase text-navy/60 font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative portrait placeholder */}
        <div className="relative hidden lg:block">
          {/*
            Replace with:
            <Image src="/images/about.jpg" alt="Alex Chen" width={520} height={600} className="object-cover w-full" />
          */}
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-400 relative overflow-hidden">
            <div className="absolute inset-0 flex items-end p-8">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4">
                <p className="font-display font-bold text-navy text-lg tracking-wide">
                  {badgeYears}
                </p>
                <p className="text-xs text-navy/50 tracking-wider">
                  {badgeLabel}
                </p>
              </div>
            </div>
          </div>
          {/* Accent square */}
          <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-gold -z-10" />
        </div>
      </div>
    </section>
  );
}
