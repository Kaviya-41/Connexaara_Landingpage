import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionTransitionWrapper({
  children,
  id,
  className = "",
  glowColors = ["rgba(108,99,255,0.15)", "rgba(6,182,212,0.15)"],
  waveType = "mesh", // 'mesh', 'curve', 'none'
  waveDirection = "bottom", // 'top', 'bottom', 'both', 'none'
  waveColor = "#8B5CF6"
}) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll Progress relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-linked transforms (Parallax Shift & Fade Out)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2]);
  const glowScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30]);
  const bgY = useTransform(scrollYProgress, [0, 1], [isMobile ? -20 : -60, isMobile ? 20 : 60]);

  // Particles config
  const particleCount = isMobile ? 3 : 12;

  // Entry settings requested by user
  const entryVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 40 : 80,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative min-h-[50vh] overflow-hidden bg-brand-bg ${className}`}
    >
      {/* ── BACKGROUND PARALLAX LAYER ── */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity, willChange: 'transform', transform: 'translateZ(0)' }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

        {/* Ambient Glow Blob 1 */}
        <motion.div
          style={{ scale: glowScale }}
          animate={isMobile ? {} : {
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full filter pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${glowColors[0]} 0%, transparent 70%)`,
            filter: `blur(${isMobile ? "50px" : "80px"})`,
            scale: glowScale,
            willChange: 'transform',
          }}
        />

        {/* Ambient Glow Blob 2 */}
        <motion.div
          style={{ scale: glowScale }}
          animate={isMobile ? {} : {
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full filter pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${glowColors[1] || glowColors[0]} 0%, transparent 70%)`,
            filter: `blur(${isMobile ? "50px" : "80px"})`,
            scale: glowScale,
            willChange: 'transform',
          }}
        />

        {/* Floating Background Particles */}
        {Array.from({ length: particleCount }).map((_, i) => {
          const size = Math.random() * (isMobile ? 2.5 : 4) + 1.5;
          const startLeft = Math.random() * 100;
          const startTop = Math.random() * 100;
          const duration = Math.random() * 18 + 12;
          const delay = Math.random() * -20;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: size,
                height: size,
                left: `${startLeft}%`,
                top: `${startTop}%`,
                boxShadow: "0 0 6px rgba(255,255,255,0.4)"
              }}
              animate={{
                y: [0, isMobile ? -60 : -140],
                x: [0, Math.random() * 20 - 10],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay
              }}
            />
          );
        })}

        {/* Cinematic Light Sweep Line (slow, elegant diagonal sweep) */}
        {!isMobile && (
          <motion.div
            initial={{ left: "-50%", opacity: 0 }}
            animate={{
              left: "150%",
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 6
            }}
            className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent rotate-[-25deg] blur-[2px]"
          />
        )}
      </motion.div>

      {/* ── CINEMATIC LIGHT SWEEP ENTRY OVERLAY ── */}
      <motion.div
        initial={{ left: "-100%", top: "-100%", opacity: 0 }}
        whileInView={{
          left: "100%",
          top: "100%",
          opacity: [0, 0.15, 0.15, 0]
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.15
        }}
        viewport={{ once: true }}
        className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-[#8B5CF6]/30 rotate-[35deg] mix-blend-screen blur-[100px] pointer-events-none z-10"
      />

      {/* ── TOP WAVE TRANSITION ── */}
      {(waveDirection === "top" || waveDirection === "both") && waveType !== "none" && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[70px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`top-wave-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.15" />
                <stop offset="50%" stopColor={waveColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill={`url(#top-wave-grad-${id})`}
              animate={{
                d: [
                  "M0,0 C300,70 900,110 1200,0 L1200,120 L0,120 Z",
                  "M0,0 C300,110 900,70 1200,0 L1200,120 L0,120 Z",
                  "M0,0 C300,70 900,110 1200,0 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      )}

      {/* ── MAIN CONTENT CONTAINER (WITH SCROLL PARALLAX & ENTRY ANIMATION) ── */}
      <motion.div
        variants={entryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-40px" : "-100px" }}
        style={{ y: contentY, willChange: 'transform' }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>

      {/* ── BOTTOM WAVE TRANSITION ── */}
      {(waveDirection === "bottom" || waveDirection === "both") && waveType !== "none" && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[70px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`bottom-wave-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.05" />
                <stop offset="50%" stopColor={waveColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor="#6C63FF" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill={`url(#bottom-wave-grad-${id})`}
              animate={{
                d: [
                  "M0,0 C300,100 900,60 1200,0 L1200,120 L0,120 Z",
                  "M0,0 C300,60 900,100 1200,0 L1200,120 L0,120 Z",
                  "M0,0 C300,100 900,60 1200,0 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      )}
    </section>
  );
}
