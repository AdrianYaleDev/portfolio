"use client";

import { useState, FormEvent } from "react";
import type { ContactContent } from "@/lib/content";

interface ContactProps {
  content: ContactContent;
}


export default function Contact({ content }: ContactProps) {
  const { eyebrow, heading, subheading, socials } = content;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire up to your preferred email/API service here
    setSent(true);
  }

  const inputBase =
    "w-full border border-[#e5e5df] bg-white px-4 py-3 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-navy/60 transition-colors";

  return (
    <section id="contact" className="py-28 px-8 lg:px-16 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-wide text-navy mb-3">
            {heading}
          </h2>
          <p className="text-sm text-navy/50 leading-7 max-w-md">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="border border-[#e5e5df] p-10 text-center">
                <p className="font-display font-bold text-2xl text-navy tracking-wide mb-2">
                  Message Sent!
                </p>
                <p className="text-sm text-navy/50">
                  Thank you — I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={inputBase}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={inputBase}
                  />
                </div>
                <textarea
                  placeholder="Message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={`${inputBase} resize-none`}
                />
                <div>
                  <button
                    type="submit"
                    className="border border-navy text-navy text-[0.6rem] tracking-[0.3em] uppercase px-10 py-3.5 hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-start gap-6 lg:pt-1">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy/40 font-semibold">
              Find Me On
            </p>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-navy/60 hover:text-navy transition-colors group"
              >
                <span className="text-navy/50 group-hover:text-gold transition-colors">
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
