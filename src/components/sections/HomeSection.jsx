import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeSection() {
  const navigate = useNavigate();

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Top Badge entrance variants
  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Description entrance variants
  const descVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Buttons entrance variants
  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 md:px-10 pt-32 pb-20"
    >
      {/* ── BACKGROUND CONTENT ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Animated Mesh Glow & Floating Blur Lights */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-primary/15 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-accent/18 blur-[140px]"
        />

        {/* Center Mesh Glow (Cinematic Depth) */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] max-w-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_60%)] blur-[110px]"
        />

        {/* Futuristic Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />

        {/* Animated SVG Curves & Waving Liquid Motion */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="liquid-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(108,99,255,0.25)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.18)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.05)" />
            </linearGradient>
            <linearGradient id="liquid-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.2)" />
              <stop offset="50%" stopColor="rgba(108,99,255,0.15)" />
              <stop offset="100%" stopColor="rgba(236,72,153,0.02)" />
            </linearGradient>
          </defs>

          {/* Waving Liquid Wave 1 */}
          <motion.path
            d="M 0,200 C 320,130 580,320 880,180 C 1180,80 1320,260 1440,190 L 1440,800 L 0,800 Z"
            fill="url(#liquid-grad-1)"
            animate={{
              d: [
                "M 0,200 C 320,130 580,320 880,180 C 1180,80 1320,260 1440,190 L 1440,800 L 0,800 Z",
                "M 0,230 C 360,260 540,140 840,230 C 1140,310 1360,120 1440,210 L 1440,800 L 0,800 Z",
                "M 0,200 C 320,130 580,320 880,180 C 1180,80 1320,260 1440,190 L 1440,800 L 0,800 Z",
              ],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Waving Liquid Wave 2 */}
          <motion.path
            d="M 0,360 C 420,440 680,260 980,340 C 1280,420 1360,280 1440,330 L 1440,800 L 0,800 Z"
            fill="url(#liquid-grad-2)"
            animate={{
              d: [
                "M 0,360 C 420,440 680,260 980,340 C 1280,420 1360,280 1440,330 L 1440,800 L 0,800 Z",
                "M 0,320 C 340,280 720,380 1020,300 C 1320,220 1380,360 1440,310 L 1440,800 L 0,800 Z",
                "M 0,360 C 420,440 680,260 980,340 C 1280,420 1360,280 1440,330 L 1440,800 L 0,800 Z",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated SVG Curve Trails */}
          <motion.path
            d="M 0,120 Q 360,280 720,120 T 1440,120"
            fill="none"
            stroke="rgba(56,189,248,0.25)"
            strokeWidth="2"
            animate={{
              d: [
                "M 0,120 Q 360,280 720,120 T 1440,120",
                "M 0,160 Q 400,60 800,200 T 1440,160",
                "M 0,120 Q 360,280 720,120 T 1440,120",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.path
            d="M 0,480 Q 450,280 900,520 T 1440,480"
            fill="none"
            stroke="rgba(167,139,250,0.2)"
            strokeWidth="1.5"
            animate={{
              d: [
                "M 0,480 Q 450,280 900,520 T 1440,480",
                "M 0,440 Q 500,580 850,400 T 1440,440",
                "M 0,480 Q 450,280 900,520 T 1440,480",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Light Streak Animations */}
        <motion.div
          initial={{ left: "-50%", top: "25%", opacity: 0 }}
          animate={{
            left: "150%",
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 4,
          }}
          className="absolute w-[350px] h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-[-15deg] blur-[1px]"
        />

        <motion.div
          initial={{ left: "-50%", top: "65%", opacity: 0 }}
          animate={{
            left: "150%",
            opacity: [0, 0.5, 0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 6,
          }}
          className="absolute w-[450px] h-[1.5px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-[-15deg] blur-[2px]"
        />

        {/* Soft Particle Movement */}
        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 4 + 2;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const duration = Math.random() * 16 + 10;
          const delay = Math.random() * -20;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                boxShadow: "0 0 8px rgba(255,255,255,0.7)",
              }}
              animate={{
                y: [0, -100 - Math.random() * 120],
                x: [0, Math.random() * 30 - 15],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          );
        })}
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8"
      >
        
        {/* ── TOP BADGE CONTENT ── */}
        <motion.div variants={badgeVariants}>
          <motion.div
            animate={{
              y: [0, -6, 0],
              boxShadow: [
                "0 0 20px rgba(108,99,255,0.15)",
                "0 0 40px rgba(108,99,255,0.35)",
                "0 0 20px rgba(108,99,255,0.15)",
              ],
            }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              boxShadow: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
            }}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-sm uppercase tracking-[0.3em] text-slate-300 shadow-[0_0_40px_rgba(108,99,255,0.2)]"
          >
            Future of Academic Collaboration
          </motion.div>
        </motion.div>

        {/* ── MAIN HEADING CONTENT ── */}
        <div className="flex flex-col items-center justify-center select-none">
          {["CONNECT", "LEARN", "COLLABORATE", "GROW"].map((word, index) => (
            <motion.h1
              key={word}
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="text-4xl sm:text-6xl md:text-8xl xl:text-[120px] font-black leading-[0.9] tracking-tight text-center"
            >
              <motion.span
                animate={{
                  y: [0, -6, 0],
                  backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 5 + index * 0.4,
                    ease: "easeInOut",
                  },
                  backgroundPosition: {
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  },
                }}
                className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent bg-[size:200%_auto] drop-shadow-[0_0_20px_rgba(167,139,250,0.2)] inline-block"
              >
                {word}
              </motion.span>
            </motion.h1>
          ))}
        </div>

        {/* ── DESCRIPTION CONTENT ── */}
        <motion.p
          variants={descVariants}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          Connexaara connects students, staff, HODs, workshops, hackathons, OD approvals, campus activities, and realtime academic networking into one futuristic ecosystem.
        </motion.p>

        {/* ── BUTTON SECTION ── */}
        <motion.div
          variants={buttonsVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md sm:max-w-none px-4 sm:px-0"
        >
          {/* Button 1: Get Started */}
          <motion.button
            onClick={() => navigate("/login")}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white font-semibold transition-all duration-300 shadow-[0_20px_50px_rgba(108,99,255,0.3)] hover:shadow-[0_0_40px_rgba(108,99,255,0.6)] cursor-pointer group w-full sm:w-auto"
          >
            {/* Premium Shine effect */}
            <motion.span
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 z-0 pointer-events-none"
              initial={{ left: "-100%" }}
              variants={{
                hover: {
                  left: "150%",
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          {/* Button 2: Explore the Dashboard */}
          <motion.button
            onClick={() => {
              const element = document.getElementById("dashboard");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition-all duration-300 border border-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] cursor-pointer group w-full sm:w-auto"
          >
            {/* Premium Shine effect */}
            <motion.span
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 z-0 pointer-events-none"
              initial={{ left: "-100%" }}
              variants={{
                hover: {
                  left: "150%",
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Play size={18} className="text-brand-accent group-hover:scale-110 transition-transform duration-300" />
              Explore the Dashboard
            </span>
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}
