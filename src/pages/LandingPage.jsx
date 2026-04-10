import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Benefits from "../components/landing/Benefits";
import Modules from "../components/landing/Modules";
import WhatYouLearn from "../components/landing/WhatYouLearn";
import Pricing from "../components/landing/Pricing";
import Partners from "../components/landing/Partners";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Modules />
        <Benefits />
        <WhatYouLearn />
        <Pricing />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
