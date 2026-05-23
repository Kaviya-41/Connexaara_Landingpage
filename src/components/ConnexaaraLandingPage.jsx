import { useEffect } from "react";
import Lenis from "lenis";

// ===============================
// IMPORT SECTIONS
// ===============================
import Navbar from "./sections/Navbar";
import HomeSection from "./sections/HomeSection";
import StatsSection from "./sections/StatsSection";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import EventsSection from "./sections/EventsSection";
import DashboardPreviewSection from "./sections/DashboardPreviewSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import Footer from "./sections/Footer";
import SectionTransitionWrapper from "./SectionTransitionWrapper";

// ===============================
// COMPONENT
// ===============================
export default function ConnexaaraLandingPage() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-bg text-white overflow-x-hidden font-sans min-h-screen selection:bg-brand-primary/30 selection:text-white">
      {/* Background noise texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20 pointer-events-none z-0" />
      
      {/* =============================== */}
      {/* SECTIONS */}
      {/* =============================== */}
      <div className="relative z-10">
        <Navbar />
        
        {/* HOME SECTION */}
        <SectionTransitionWrapper
          id="home-wrapper"
          glowColors={["rgba(108,99,255,0.25)", "rgba(56,189,248,0.2)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#8B5CF6"
        >
          <HomeSection />
        </SectionTransitionWrapper>

        {/* STATS SECTION */}
        <SectionTransitionWrapper
          id="stats-wrapper"
          glowColors={["rgba(139,92,246,0.15)", "rgba(6,182,212,0.15)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#06B6D4"
        >
          <StatsSection />
        </SectionTransitionWrapper>

        {/* ABOUT SECTION */}
        <SectionTransitionWrapper
          id="about-wrapper"
          glowColors={["rgba(139,92,246,0.2)", "rgba(6,182,212,0.2)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#06B6D4"
        >
          <AboutSection />
        </SectionTransitionWrapper>

        {/* FEATURES SECTION */}
        <SectionTransitionWrapper
          id="features-wrapper"
          glowColors={["rgba(6,182,212,0.2)", "rgba(139,92,246,0.2)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#8B5CF6"
        >
          <FeaturesSection />
        </SectionTransitionWrapper>


        {/* EVENTS SECTION */}
        <SectionTransitionWrapper
          id="events-wrapper"
          glowColors={["rgba(108,99,255,0.15)", "rgba(139,92,246,0.15)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#8B5CF6"
        >
          <EventsSection />
        </SectionTransitionWrapper>

        {/* DASHBOARD PREVIEW SECTION */}
        <SectionTransitionWrapper
          id="dashboard-wrapper"
          glowColors={["rgba(6,182,212,0.25)", "rgba(108,99,255,0.2)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#A855F7"
        >
          <DashboardPreviewSection />
        </SectionTransitionWrapper>

        {/* HOW IT WORKS SECTION */}
        <SectionTransitionWrapper
          id="how-it-works-wrapper"
          glowColors={["rgba(108,99,255,0.15)", "rgba(6,182,212,0.15)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#06B6D4"
        >
          <HowItWorksSection />
        </SectionTransitionWrapper>

        {/* TESTIMONIALS SECTION */}
        <SectionTransitionWrapper
          id="testimonials-wrapper"
          glowColors={["rgba(139,92,246,0.15)", "rgba(108,99,255,0.15)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#8B5CF6"
        >
          <TestimonialsSection />
        </SectionTransitionWrapper>

        {/* FAQ SECTION */}
        <SectionTransitionWrapper
          id="faq-wrapper"
          glowColors={["rgba(6,182,212,0.15)", "rgba(139,92,246,0.15)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#06B6D4"
        >
          <FAQSection />
        </SectionTransitionWrapper>

        {/* CONTACT / FINAL CTA SECTION */}
        <SectionTransitionWrapper
          id="contact-wrapper"
          glowColors={["rgba(108,99,255,0.2)", "rgba(6,182,212,0.2)"]}
          waveType="mesh"
          waveDirection="bottom"
          waveColor="#8B5CF6"
        >
          <FinalCTASection />
        </SectionTransitionWrapper>

        {/* FOOTER */}
        <SectionTransitionWrapper
          id="footer-wrapper"
          glowColors={["rgba(139,92,246,0.1)", "rgba(15,23,42,0.3)"]}
          waveType="none"
          waveDirection="none"
        >
          <Footer />
        </SectionTransitionWrapper>
      </div>
    </div>
  );
}