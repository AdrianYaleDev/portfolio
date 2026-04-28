"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/content";

interface NavbarProps {
  siteTitle: string;
  links: NavLink[];
}

export default function Navbar({ siteTitle, links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 lg:px-16 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="font-display font-bold tracking-[0.2em] text-navy text-sm"
        >
          {siteTitle}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }, i) => (
            <span key={label} className="flex items-center">
              <a
                href={href}
                className="text-[0.65rem] tracking-[0.18em] text-navy/70 hover:text-navy transition-colors px-2 py-1 font-medium"
              >
                {label}
              </a>
              {i < links.length - 1 && (
                <span className="text-navy/25 text-xs select-none">|</span>
              )}
            </span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-px bg-navy transition-transform duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-navy transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-navy transition-transform duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-border-light px-8 py-5 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.2em] text-navy/80 hover:text-navy transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
