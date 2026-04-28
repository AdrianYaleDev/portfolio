import type { ServicesContent } from "@/lib/content";

interface ServicesProps {
  content: ServicesContent;
}


export default function Services({ content }: ServicesProps) {
  const { eyebrow, heading, services } = content;

  return (
    <section id="services" className="py-28 px-8 lg:px-16 bg-surface scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-wide text-navy">
            {heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ title, points, icon }) => (
            <div
              key={title}
              className="bg-white border border-[#e5e5df] p-8 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <span className="text-navy/70">{icon}</span>

              {/* Title */}
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-navy">
                {title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold" />

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5">
                {points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs text-navy/55 leading-5"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
