import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  CheckCircle,
  Users,
  Share2,
  Trophy,
  Zap,
  Globe,
  Sparkles
} from "lucide-react";

// Nodes configuration
const NODES = [
  {
    label: "Workshops",
    icon: BookOpen,
    color: "#F59E0B",
    posClass: "left-[8%] top-[15%]",
    floatDuration: 6.5
  },
  {
    label: "Hackathons",
    icon: Code2,
    color: "#A855F7",
    posClass: "left-[22%] top-[60%]",
    floatDuration: 7.2
  },
  {
    label: "OD Approvals",
    icon: CheckCircle,
    color: "#10B981",
    posClass: "left-[36%] top-[20%]",
    floatDuration: 5.8
  },
  {
    label: "Clubs",
    icon: Users,
    color: "#EC4899",
    posClass: "left-[48%] top-[75%]",
    floatDuration: 8.0
  },
  {
    label: "Networking",
    icon: Share2,
    color: "#3B82F6",
    posClass: "left-[58%] top-[18%]",
    floatDuration: 6.2
  },
  {
    label: "Competitions",
    icon: Trophy,
    color: "#EF4444",
    posClass: "left-[70%] top-[60%]",
    floatDuration: 7.5
  },
  {
    label: "Events",
    icon: Zap,
    color: "#6C63FF",
    posClass: "left-[82%] top-[25%]",
    floatDuration: 6.9
  },
  {
    label: "Communities",
    icon: Globe,
    color: "#06B6D4",
    posClass: "left-[90%] top-[65%]",
    floatDuration: 8.5
  }
];

const STATS = [
  { value: "10K+", label: "Students", color: "#6C63FF" },
  { value: "250+", label: "Events", color: "#06B6D4" },
  { value: "100+", label: "Colleges", color: "#A855F7" },
  { value: "95%", label: "Faster Collaboration", color: "#10B981" }
];

export default function EventsShowcase() {
  const navigate = useNavigate();

  // Page Entry Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B1020] text-white overflow-hidden font-sans pb-24">
      {/* ── Background Design ───────────────────────────────────────── */}
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* Radial lighting vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(11,16,32,0.85)_100%)] pointer-events-none z-0" />

      {/* Floating mesh gradient blur blobs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-[#6C63FF]/5 blur-[120px] -top-20 -left-10 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 70, 0],
          y: [0, 60, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#06B6D4]/5 blur-[130px] top-[30%] -right-20 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[120px] bottom-10 left-[20%] pointer-events-none"
      />

      {/* ── Main Layout Container ───────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10 pt-8"
      >
        {/* Top Header Row with Back Button */}
        <div className="flex items-center justify-between mb-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>

          {/* Pill Badge */}
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-xs font-semibold uppercase tracking-wider text-gray-300 shadow-[0_0_15px_rgba(255,255,255,0.03)] flex items-center gap-1.5">
            <Sparkles size={12} className="text-violet-400 animate-pulse" />
            Campus Ecosystem
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-violet-400 drop-shadow-md"
          >
            Connect, Collaborate, and Scale Campus Events
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Connexaara unifies workshops, hackathons, OD approvals, student clubs, and campus networking into one seamless intelligent ecosystem.
          </motion.p>
        </div>

        {/* ── Animated Curved Connection System (Desktop) ──────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block relative w-full h-[480px] my-16 select-none"
        >
          {/* SVG Connection Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* The main curved path */}
            <path
              id="ecosystem-path"
              d="M 50,250 C 250,50 450,380 600,200 C 750,20 950,320 1150,150"
              stroke="url(#pathGradient)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="opacity-25"
            />
            {/* Soft glowing line background */}
            <path
              d="M 50,250 C 250,50 450,380 600,200 C 750,20 950,320 1150,150"
              stroke="url(#pathGlowGradient)"
              strokeWidth="6"
              className="opacity-10 blur-sm"
            />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C63FF" />
                <stop offset="35%" stopColor="#06B6D4" />
                <stop offset="70%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="pathGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C63FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>

            {/* Traveling neon pulse particles along curve */}
            <circle r="4.5" fill="#6C63FF" className="shadow-lg">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M 50,250 C 250,50 450,380 600,200 C 750,20 950,320 1150,150"
              />
            </circle>
            <circle r="5" fill="#06B6D4">
              <animateMotion
                dur="9s"
                begin="2s"
                repeatCount="indefinite"
                path="M 50,250 C 250,50 450,380 600,200 C 750,20 950,320 1150,150"
              />
            </circle>
            <circle r="3.5" fill="#A855F7">
              <animateMotion
                dur="5.5s"
                begin="3.5s"
                repeatCount="indefinite"
                path="M 50,250 C 250,50 450,380 600,200 C 750,20 950,320 1150,150"
              />
            </circle>
          </svg>

          {/* Floating Event Nodes Container */}
          <div className="absolute inset-0 w-full h-full">
            {NODES.map((node, idx) => {
              const IconComponent = node.icon;
              return (
                <motion.div
                  key={node.label}
                  className={`absolute ${node.posClass} z-20`}
                  animate={{
                    y: [-12, 12],
                    rotate: [-3, 3]
                  }}
                  transition={{
                    duration: node.floatDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: idx * 0.4
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center p-4 rounded-[24px] w-36 h-36 backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 ease-out group cursor-pointer"
                    style={{
                      boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), 0 0 40px ${node.color}15`
                    }}
                    whileHover={{
                      scale: 1.12,
                      boxShadow: `0 8px 40px rgba(0, 0, 0, 0.5), 0 0 50px ${node.color}35`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
                      style={{
                        backgroundColor: `${node.color}18`,
                        color: node.color
                      }}
                    >
                      <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xs font-bold text-gray-300 tracking-wide text-center">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Animated Curved Connection System (Mobile Stack) ────────────────── */}
        <motion.div
          variants={itemVariants}
          className="block md:hidden my-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-2">
            {NODES.map((node, idx) => {
              const IconComponent = node.icon;
              return (
                <motion.div
                  key={node.label}
                  className="z-20"
                  animate={{
                    y: [-6, 6],
                    rotate: [-2, 2]
                  }}
                  transition={{
                    duration: node.floatDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: idx * 0.3
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center p-5 rounded-2xl w-full h-32 backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 ease-out group cursor-pointer"
                    style={{
                      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 30px ${node.color}10`
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 40px ${node.color}25`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5 transition-colors duration-300"
                      style={{
                        backgroundColor: `${node.color}18`,
                        color: node.color
                      }}
                    >
                      <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xs font-bold text-gray-300 tracking-wide text-center">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Center Highlight Card ───────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-24 px-4 relative"
        >
          {/* Background glow beneath quote card */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[#8B5CF6]/5 blur-[70px] -top-10 left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="rounded-3xl border border-white/10 bg-[#0d0c15]/50 backdrop-blur-xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-white/15 hover:shadow-[0_20px_50px_rgba(108,99,255,0.08)] transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              <Sparkles size={24} className="text-violet-400 mb-6 animate-pulse" />
              <p className="text-lg md:text-xl font-medium text-gray-200 italic mb-8 leading-relaxed max-w-2xl">
                “Connexaara transformed how students collaborate across campuses by bringing workshops, hackathons, clubs, and approvals together in one platform.”
              </p>
              <div>
                <h4 className="font-extrabold text-white text-sm uppercase tracking-widest">Connexaara Ecosystem</h4>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Future of Academic Collaboration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom Statistics Section ─────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-center text-center relative overflow-hidden group hover:border-white/10"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              {/* Radial glow background in card */}
              <div
                className="absolute w-28 h-28 rounded-full blur-[40px] opacity-[0.03] group-hover:opacity-[0.08] pointer-events-none -top-10 -right-10 transition-all duration-500"
                style={{ backgroundColor: stat.color }}
              />
              <p
                className="text-3xl md:text-4xl font-black mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
