import { ReactNode } from "react";

/* ─── Navigation ─────────────────────────────────────── */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
//   { label: "PORTFOLIO", href: "#portfolio" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

/* ─── Hero ───────────────────────────────────────────── */

export interface HeroContent {
  name: string;
  nameLines: [string, string];
  subtitle: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  imagePath?: string;
}

export const heroContent: HeroContent = {
  name: "Adrian Yale",
  nameLines: ["ADRIAN", "yale"],
  subtitle: "Web / Software Developer",
  tagline:
    "Building scalable web applications, custom CMS solutions, and robust SAAS architectures on AWS.",
  ctaLabel: "Let's Talk Projects",
  ctaHref: "#contact",
  imagePath: "/hero.png",
};

/* ─── About ──────────────────────────────────────────── */

export interface Skill {
  label: string;
  icon: ReactNode;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  badgeYears: string;
  badgeLabel: string;
  skills: Skill[];
}

export const aboutContent: AboutContent = {
  eyebrow: "Who I Am",
  heading: "About Me",
  paragraphs: [
    "Adrian Yale is an experienced Web and Software Developer specializing in building complex, high-performance web applications. He has a deep understanding of SAAS architecture, custom CMS development, and deploying scalable infrastructure on AWS.",
    "With a focus on clean code and efficient solutions, he works with modern technologies to deliver robust software that meets unique business needs, bringing technical expertise to projects from conception to deployment.",
  ],
  badgeYears: "Technical",
  badgeLabel: "Core Expertise",
  skills: [
	{
		label: "Custom CMS",
		icon: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			className="w-7 h-7"
		>
			{/* A clean "window" with content blocks representing a management interface */}
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M3 9h18M9 21V9" />
			<path d="M14 13h2M14 17h2" />
		</svg>
		),
	},
	{
		label: "SAAS Architecture",
		icon: (
		<svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-7 h-7"
        >
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8" />
          <polyline points="2 8 12 14 22 8" />
          <line x1="12" y1="14" x2="12" y2="22" />
          <polyline points="7.5 11 12 8.5 16.5 11" />
        </svg>
		),
	},
	{
		label: "AWS Infrastructure",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				className="w-7 h-7"
			>
				<path 
					d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	],
};

/* ─── Work ───────────────────────────────────────────── */

export interface Project {
  id: number;
  title: string;
  category: string;
  gradient: string;
  accent: string;
  label: string;
  dark: boolean;
}

export interface WorkContent {
  eyebrow: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  projects: Project[];
}

export const workContent: WorkContent = {
  eyebrow: "Professional Work",
  heading: "Development Projects",
  ctaLabel: "Start a project →",
  ctaHref: "#contact",
  projects: [
    {
      id: 1,
      title: "NDA Restricted Projects",
      category: "Enterprise solutions.",
      gradient: "from-[#16213e] via-[#1a2a50] to-[#0d1b38]",
      accent: "#4a6fa5",
      label: "🔒",
      dark: true,
    },
    {
      id: 2,
      title: "Proprietary Systems",
      category: "Internal platform development.",
      gradient: "from-[#f5ede0] via-[#ecdcbf] to-[#e0c9a0]",
      accent: "#c9a86c",
      label: "P",
      dark: false,
    },
    {
      id: 3,
      title: "Confidential Applications",
      category: "SAAS platform engineering.",
      gradient: "from-[#d0cfc9] via-[#c4c3bc] to-[#b5b4ae]",
      accent: "#888",
      label: "C",
      dark: false,
    },
    {
      id: 4,
      title: "Corporate Projects",
      category: "Infrastructure & CMS work.",
      gradient: "from-[#1a3a5c] via-[#1d3f64] to-[#0d274a]",
      accent: "#5a9fd4",
      label: "🔒",
      dark: true,
    },
    {
      id: 5,
      title: "Company-Owned Work",
      category: "Internal development.",
      gradient: "from-[#2d4a3e] via-[#2a4437] to-[#1c3028]",
      accent: "#7ab89a",
      label: "🔒",
      dark: true,
    },
    {
      id: 6,
      title: "Portfolio Note",
      category: "Specifics proprietary. Let's discuss.",
      gradient: "from-[#2a2535] via-[#221d2e] to-[#1a1525]",
      accent: "#9b8bd4",
      label: "!",
      dark: true,
    },
  ],
};

/* ─── Services ───────────────────────────────────────── */

export interface Service {
  title: string;
  points: string[];
  icon: ReactNode;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  services: Service[];
}

export const servicesContent: ServicesContent = {
  eyebrow: "What I Offer",
  heading: "Services",
  services: [
    {
      title: "Web & Software Development",
      points: [
        "Responsive web applications",
        "Front-end & back-end development",
        "RESTful API design & integration",
        "Performance optimization",
      ],
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="w-10 h-10"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Custom CMS Solutions",
      points: [
        "Database design & schema",
        "Custom module development",
        "User permission systems",
        "Content workflow management",
      ],
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="w-10 h-10"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="12" y1="3" x2="12" y2="21"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <path d="M7.5 7.5L10 10l2.5-2.5m4 0L19 10l2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Cloud & SAAS Architecture",
      points: [
        "Scalable SAAS platforms",
        "AWS cloud infrastructure",
        "Serverless & microservices",
        "Continuous integration/deployment",
      ],
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="w-10 h-10"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <path d="M12 18v2m0 0l-3-2m3 2l3-2" strokeWidth={1.5} />
        </svg>
      ),
    },
  ],
};

/* ─── Contact ────────────────────────────────────────── */

export interface Social {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  socials: Social[];
}

export const contactContent: ContactContent = {
  eyebrow: "Let's Work Together",
  heading: "Get In Touch",
  subheading:
    "Have a project or want to collaborate? Feel free to reach out — I’d love to hear from you.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrian-yale-58204b105/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ],
};

/* ─── Footer ─────────────────────────────────────────── */

export interface FooterContent {
  email: string;
  location: string;
  ownerName: string;
}

export const footerContent: FooterContent = {
  email: "hello@adrianyale.com",
  location: "Cornwall, UK",
  ownerName: "Adrian Yale",
};