import type { FooterContent } from "@/lib/content";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  const { email, location, ownerName } = content;

  return (
    <footer className="border-t border-[#e5e5df] bg-surface py-7 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.6rem] tracking-[0.18em] uppercase text-navy/40">
        <p>
          {email} &nbsp;|&nbsp; {location}
        </p>
        <p>
          &copy; {new Date().getFullYear()} {ownerName} Portfolio
        </p>
      </div>
    </footer>
  );
}
