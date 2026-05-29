import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const containerRef = useRef(null);

  // Mouse motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag/inertia
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformations for 3D tilt
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  
  // Translation offsets for eye tracking
  const eyeX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const eyeY = useTransform(smoothY, [-1, 1], [-8, 8]);
  
  // Translation offsets for energy rings
  const ring1X = useTransform(smoothX, [-1, 1], [-10, 10]);
  const ring1Y = useTransform(smoothY, [-1, 1], [-10, 10]);
  const ring2X = useTransform(smoothX, [-1, 1], [10, -10]);
  const ring2Y = useTransform(smoothY, [-1, 1], [10, -10]);

  // Translation offsets for background glows
  const bgX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const bgY = useTransform(smoothY, [-1, 1], [-30, 30]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(Math.max(-1, Math.min(1, x)));
    mouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Particles config: random-looking values but deterministic for render consistency
  const particles = [
    { id: 1, size: 4, top: "15%", left: "20%", color: "bg-cyan-400", duration: 8, delay: 0 },
    { id: 2, size: 6, top: "25%", left: "75%", color: "bg-violet-400", duration: 10, delay: 1 },
    { id: 3, size: 3, top: "65%", left: "15%", color: "bg-fuchsia-400", duration: 9, delay: 2 },
    { id: 4, size: 5, top: "75%", left: "80%", color: "bg-cyan-300", duration: 12, delay: 0.5 },
    { id: 5, size: 4, top: "10%", left: "60%", color: "bg-white", duration: 7, delay: 1.5 },
    { id: 6, size: 5, top: "85%", left: "40%", color: "bg-violet-300", duration: 11, delay: 3 },
    { id: 7, size: 3, top: "45%", left: "85%", color: "bg-fuchsia-300", duration: 8, delay: 2.5 },
    // Only visible on larger screens (md and up) for performance
    { id: 8, size: 4, top: "50%", left: "5%", color: "bg-cyan-200", duration: 13, delay: 4, desktopOnly: true },
    { id: 9, size: 6, top: "35%", left: "12%", color: "bg-violet-500", duration: 14, delay: 1.2, desktopOnly: true },
    { id: 10, size: 3, top: "20%", left: "88%", color: "bg-fuchsia-500", duration: 10, delay: 0.8, desktopOnly: true },
    { id: 11, size: 5, top: "80%", left: "22%", color: "bg-cyan-500", duration: 9, delay: 2.1, desktopOnly: true },
    { id: 12, size: 4, top: "90%", left: "70%", color: "bg-white", duration: 11, delay: 3.3, desktopOnly: true },
    { id: 13, size: 3, top: "5%", left: "35%", color: "bg-violet-200", duration: 7.5, delay: 1.8, desktopOnly: true },
    { id: 14, size: 5, top: "55%", left: "92%", color: "bg-fuchsia-200", duration: 12.5, delay: 0.2, desktopOnly: true },
    { id: 15, size: 4, top: "30%", left: "3%", color: "bg-cyan-100", duration: 8.5, delay: 2.7, desktopOnly: true },
  ];

  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left - Animated Orb Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full min-h-[340px] sm:min-h-[500px] flex items-center justify-center py-6 sm:py-10 z-10"
        >
          {/* Background Effects */}
          <motion.div
            style={{ x: bgX, y: bgY, willChange: 'transform' }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-0"
          >
            {/* Large Radial Glow */}
            <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.12)_0%,transparent_70%)] blur-[70px]" />
            
            {/* Ambient Lighting Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-cyan-500/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-purple-500/10 blur-[80px] rounded-full" />
            
            {/* Soft Light Beams */}
            <div className="absolute w-[2px] h-[600px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent rotate-[35deg] blur-[2px]" />
            <div className="absolute w-[2px] h-[600px] bg-gradient-to-b from-transparent via-purple-400/20 to-transparent rotate-[-45deg] blur-[2px] translate-x-20" />
            
            {/* Floating Mesh Wave (SVG) */}
            <svg 
              className="absolute w-[500px] h-[300px] opacity-20 text-indigo-500/20"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                d="M0,50 Q25,30 50,50 T100,50"
                animate={{
                  d: [
                    "M0,50 Q25,30 50,50 T100,50",
                    "M0,50 Q25,70 50,50 T100,50",
                    "M0,50 Q25,30 50,50 T100,50"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="0.1"
                d="M0,60 Q25,45 50,60 T100,60"
                animate={{
                  d: [
                    "M0,60 Q25,75 50,60 T100,60",
                    "M0,60 Q25,45 50,60 T100,60",
                    "M0,60 Q25,75 50,60 T100,60"
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </svg>
          </motion.div>

          {/* Particle System */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className={`absolute rounded-full ${p.color} ${p.desktopOnly ? "hidden md:block" : ""}`}
                style={{
                  width: p.size,
                  height: p.size,
                  top: p.top,
                  left: p.left,
                  boxShadow: "0 0 10px rgba(255,255,255,0.4)"
                }}
                animate={{
                  y: [0, -35, 0],
                  x: [0, 20, -20, 0],
                  opacity: [0.1, 0.7, 0.4, 0.7, 0.1],
                  scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Ring 1 - Cyan Outer Orbit */}
          <motion.div
            style={{ x: ring1X, y: ring1Y, willChange: 'transform' }}
            className="absolute w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] flex items-center justify-center pointer-events-none z-0"
          >
            <div style={{ transform: "rotateX(75deg) rotateY(15deg)", width: "100%", height: "100%" }}>
              <motion.div
                className="w-full h-full rounded-full border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2),inset_0_0_15px_rgba(6,182,212,0.2)]"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    "0 0 15px rgba(6,182,212,0.2), inset 0 0 15px rgba(6,182,212,0.2)",
                    "0 0 25px rgba(6,182,212,0.4), inset 0 0 25px rgba(6,182,212,0.4)",
                    "0 0 15px rgba(6,182,212,0.2), inset 0 0 15px rgba(6,182,212,0.2)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>

          {/* Ring 2 - Purple Inner Orbit */}
          <motion.div
            style={{ x: ring2X, y: ring2Y, willChange: 'transform' }}
            className="absolute w-[260px] h-[260px] sm:w-[430px] sm:h-[430px] lg:w-[520px] lg:h-[520px] flex items-center justify-center pointer-events-none z-0"
          >
            <div style={{ transform: "rotateX(-60deg) rotateY(-20deg)", width: "100%", height: "100%" }}>
              <motion.div
                className="w-full h-full rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15),inset_0_0_15px_rgba(168,85,247,0.15)]"
                animate={{ 
                  rotate: -360,
                  boxShadow: [
                    "0 0 15px rgba(168,85,247,0.15), inset 0 0 15px rgba(168,85,247,0.15)",
                    "0 0 25px rgba(168,85,247,0.3), inset 0 0 25px rgba(168,85,247,0.3)",
                    "0 0 15px rgba(168,85,247,0.15), inset 0 0 15px rgba(168,85,247,0.15)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 24, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>

          {/* Main Animated Orb Entrance & Float / Tilt Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center z-10 select-none cursor-pointer group"
          >
            {/* Floater & 3D Tilt Wrapper */}
            <motion.div
              animate={{
                y: [-15, 15],
                rotate: [-2, 2],
                scale: [1, 1.03, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-fuchsia-500/30 backdrop-blur-3xl border border-white/10 shadow-[0_0_120px_rgba(108,99,255,0.45)] group-hover:shadow-[0_0_150px_rgba(108,99,255,0.7)] group-hover:scale-105 transition-all duration-500 ease-out overflow-hidden flex items-center justify-center"
            >
              {/* Morphing Mesh Gradients (Drifting blobs inside) */}
              <div className="absolute inset-0 overflow-hidden rounded-full z-0 pointer-events-none">
                {/* Blob 1: #6C63FF */}
                <motion.div
                  className="absolute w-[60%] h-[60%] rounded-full bg-[#6C63FF]/40 blur-2xl"
                  style={{ top: "10%", left: "10%" }}
                  animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 40, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Blob 2: #8B5CF6 */}
                <motion.div
                  className="absolute w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/30 blur-2xl"
                  style={{ bottom: "10%", right: "15%" }}
                  animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 40, -30, 0],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Blob 3: #06B6D4 */}
                <motion.div
                  className="absolute w-[55%] h-[55%] rounded-full bg-[#06B6D4]/30 blur-2xl"
                  style={{ bottom: "20%", left: "20%" }}
                  animate={{
                    x: [0, 30, -30, 0],
                    y: [0, -40, 30, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Blob 4: #A855F7 */}
                <motion.div
                  className="absolute w-[45%] h-[45%] rounded-full bg-[#A855F7]/45 blur-2xl"
                  style={{ top: "20%", right: "20%" }}
                  animate={{
                    x: [0, -25, 25, 0],
                    y: [0, 30, -30, 0],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Internal Lighting Movement (Pulsing central glow) */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)]"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Moving light streaks */}
                <motion.div
                  className="absolute w-[200%] h-[30%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[30deg]"
                  style={{ top: "-50%", left: "-50%" }}
                  animate={{
                    y: ["0%", "400%"]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                />

                {/* Liquid / Specular 3D Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-full" />
                
                {/* Ambient Reflection Rim Light */}
                <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
              </div>

              {/* Animated Eyes (Positioned slightly above middle and tracked) */}
              <motion.div
                style={{ x: eyeX, y: eyeY, top: "42%", transformStyle: "preserve-3d" }}
                className="absolute z-10 flex gap-6 sm:gap-12 justify-center items-center pointer-events-none"
              >
                {/* Left Eye */}
                <motion.div
                  className="w-6 h-2 sm:w-8 sm:h-3 rounded-full bg-cyan-200 shadow-[0_0_12px_#22d3ee] blur-[1px]"
                  animate={{ scaleY: [1, 1, 1, 0.1, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [0, 0.94, 0.96, 0.98, 1.0],
                    ease: "easeInOut",
                  }}
                />
                
                {/* Right Eye */}
                <motion.div
                  className="w-6 h-2 sm:w-8 sm:h-3 rounded-full bg-cyan-200 shadow-[0_0_12px_#22d3ee] blur-[1px]"
                  animate={{ scaleY: [1, 1, 1, 0.1, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [0, 0.94, 0.96, 0.98, 1.0],
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInRight} className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              Why Connexaara?
            </motion.h2>

            <motion.p variants={fadeInRight} className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
              Manage your campus activities, communications, and events in one place with powerful, easy-to-use tools.
            </motion.p>

            <motion.div variants={fadeInRight} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {/* Item 1 */}
              <div className="flex gap-4 items-start">
                <div className="pt-1 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Break down team silos</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start">
                <div className="pt-1 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Make collaboration intuitive</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 items-start">
                <div className="pt-1 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Organize all things in one place</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4 items-start">
                <div className="pt-1 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Build a culture of open teamwork</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
