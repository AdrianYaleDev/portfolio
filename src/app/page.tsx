import {
  navLinks,
  heroContent,
  aboutContent,
  workContent,
  servicesContent,
  contactContent,
  footerContent,
} from "@/lib/content";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar siteTitle={heroContent.name.toUpperCase()} links={navLinks} />
      <main>
        <Hero content={heroContent} />
        <About content={aboutContent} />
        {/* <Work content={workContent} /> */}
        <Services content={servicesContent} />
        <Contact content={contactContent} />
      </main>
      <Footer content={footerContent} />
    </>
  );
}
