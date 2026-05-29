import { motion } from "framer-motion";
import { Code2, Calendar, FileCheck, Users, LineChart, Network, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const floatingCards = [
    {
      id: 1,
      title: "Hackathon Management",
      icon: <Code2 size={24} className="text-violet-400" />,
      position: "top-[8%] left-[8%]",
      path: "M 600 400 L 220 150",
      animation: { y: [0, -15, 0], x: [0, 8, 0] },
      duration: 6.5,
      delay: 0.1
    },
    {
      id: 2,
      title: "Workshop Tracking",
      icon: <Calendar size={24} className="text-cyan-400" />,
      position: "top-[42%] left-[2%]",
      path: "M 600 400 L 150 400",
      animation: { y: [0, 18, 0], x: [0, -12, 0] },
      duration: 7.2,
      delay: 0.4
    },
    {
      id: 3,
      title: "OD Approval System",
      icon: <FileCheck size={24} className="text-emerald-400" />,
      position: "bottom-[12%] left-[12%]",
      path: "M 600 400 L 260 620",
      animation: { y: [0, -12, 0], x: [0, -8, 0] },
      duration: 5.8,
      delay: 0.7
    },
    {
      id: 4,
      title: "Student Networking",
      icon: <Users size={24} className="text-pink-400" />,
      position: "top-[12%] right-[8%]",
      path: "M 600 400 L 980 160",
      animation: { y: [0, 15, 0], x: [0, -10, 0] },
      duration: 6.8,
      delay: 0.3
    },
    {
      id: 5,
      title: "Campus Analytics",
      icon: <LineChart size={24} className="text-orange-400" />,
      position: "top-[45%] right-[2%]",
      path: "M 600 400 L 1050 420",
      animation: { y: [0, -20, 0], x: [0, 15, 0] },
      duration: 7.5,
      delay: 0.6
    },
    {
      id: 6,
      title: "Event Collaboration",
      icon: <Network size={24} className="text-blue-400" />,
      position: "bottom-[8%] right-[10%]",
      path: "M 600 400 L 960 650",
      animation: { y: [0, 16, 0], x: [0, 10, 0] },
      duration: 6.2,
      delay: 0.9
    }
  ];

  return (
    <section id="features" className="relative min-h-screen lg:min-h-[140vh] py-16 md:py-32 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#050816] flex flex-col items-center justify-center font-sans">
      
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Mesh */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6C63FF]/20 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#06B6D4]/15 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-[#8B5CF6]/10 blur-[70px] rounded-full" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* SECTION HEADER */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6"
        >
          Connexaara Features
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 mb-6 leading-tight tracking-tight"
        >
          Experience the Future of Academic Collaboration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl"
        >
          Connexaara empowers students, staff, and institutions with intelligent collaboration tools for workshops, hackathons, OD approvals, campus networking, and realtime engagement.
        </motion.p>
      </div>

      {/* IMMERSIVE ECOSYSTEM LAYOUT (DESKTOP) */}
      <div className="hidden lg:flex relative w-full max-w-[1200px] h-[800px] items-center justify-center mt-10 perspective-[2000px]">
        
        {/* Animated Connecting Lines (SVG Layer) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {floatingCards.map((card) => (
            <motion.path
              key={`path-${card.id}`}
              d={card.path}
              stroke="url(#glow-line)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
              filter="url(#neon-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: "easeOut", delay: card.delay }}
            />
          ))}
        </svg>

        {/* MAIN CENTER PANEL */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
          whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center justify-center w-[400px] h-[400px] rounded-[40px] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_30px_120px_rgba(108,99,255,0.25)] p-10 text-center group cursor-pointer transition-all duration-700 ease-out hover:shadow-[0_40px_150px_rgba(108,99,255,0.4)] hover:scale-105 hover:bg-white/10"
        >
          {/* Internal Animated Rings */}
          <div className="absolute inset-0 rounded-[40px] border border-white/5 animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-6 rounded-[34px] border border-violet-500/20 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="absolute inset-12 rounded-[28px] border border-cyan-500/15 animate-[spin_25s_linear_infinite]" />
          
          {/* Inner Glowing Orb */}
          <div className="absolute w-32 h-32 bg-gradient-to-tr from-[#6C63FF]/30 to-[#06B6D4]/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-violet-600 to-cyan-500 mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(108,99,255,0.6)] group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="text-white w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight">Realtime Campus Collaboration</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Unify students, faculty, events, workshops, and academic communities into one intelligent ecosystem.
            </p>
          </div>
        </motion.div>

        {/* FLOATING FEATURE CARDS (ORBITAL) */}
        {floatingCards.map((card) => (
          <motion.div
            key={`card-${card.id}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={card.animation}
            transition={{
              opacity: { duration: 0.8, delay: card.delay },
              scale: { duration: 0.8, delay: card.delay },
              y: { repeat: Infinity, duration: card.duration, ease: "easeInOut" },
              x: { repeat: Infinity, duration: card.duration + 1, ease: "easeInOut" }
            }}
            className={`absolute ${card.position} w-[260px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_80px_rgba(108,99,255,0.18)] z-30 cursor-pointer transition-all duration-500 ease-out hover:bg-white/10 hover:border-violet-400/50 hover:shadow-[0_30px_100px_rgba(108,99,255,0.4)] hover:scale-110 hover:-translate-y-2 group`}
          >
            {/* Card Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B1020] to-[#1a1b3b] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {card.icon}
              </div>
            </div>
            <h4 className="relative z-10 text-white font-bold text-lg mb-2 leading-tight group-hover:text-violet-200 transition-colors">{card.title}</h4>
            <p className="relative z-10 text-xs text-slate-400 font-medium">Intelligent node active.</p>
          </motion.div>
        ))}
      </div>

      {/* MOBILE STACKED LAYOUT (TABLET/MOBILE) */}
      <div className="flex flex-col lg:hidden w-full max-w-md sm:max-w-2xl md:max-w-4xl mx-auto mt-8 gap-6 relative z-30">
        {/* Mobile Center Panel */}
        <div className="relative flex flex-col items-center justify-center w-full rounded-[40px] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_30px_120px_rgba(108,99,255,0.25)] p-8 text-center mb-8">
          <div className="absolute w-32 h-32 bg-gradient-to-tr from-[#6C63FF]/30 to-[#06B6D4]/30 rounded-full blur-2xl" />
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(108,99,255,0.6)]">
            <Sparkles className="text-white w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-2xl font-black text-white mb-4">Realtime Campus Collaboration</h3>
          <p className="relative z-10 text-slate-300 text-sm leading-relaxed">
            Unify students, faculty, events, workshops, and academic communities into one intelligent ecosystem.
          </p>
        </div>

        {/* Mobile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {floatingCards.map((card) => (
            <motion.div
              key={`mobile-card-${card.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay * 0.5 }}
              className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1020] to-[#1a1b3b] border border-white/10 flex items-center justify-center shadow-inner">
                  {card.icon}
                </div>
                <h4 className="text-white font-bold text-sm leading-tight">{card.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

