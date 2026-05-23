import { motion } from "framer-motion";
import { 
  Sparkles, 
  Wifi, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  Terminal,
  Activity
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Reusable Premium Dashboard Card
────────────────────────────────────────────────────────────────────── */
function DashboardCard({ title, children, className = "", glowColor = "#6C63FF" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#070913]/65 backdrop-blur-xl p-5 sm:p-8 flex flex-col justify-between shadow-[0_24px_50px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Interactive hover glow boundary */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-30 transition-opacity group-hover:opacity-60"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Inner glass accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white tracking-wide uppercase font-sans">
            {title}
          </h3>
          <div 
            className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]"
            style={{ color: glowColor, backgroundColor: glowColor }}
          />
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default function DashboardPreviewSection() {
  return (
    <section 
      id="dashboard" 
      className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative bg-black overflow-hidden"
    >
      {/* GLOBAL CINEMATIC LIGHTING */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#6C63FF]/8 to-[#06B6D4]/8 blur-[180px] rounded-full pointer-events-none" />

      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto text-center relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#A855F7] to-[#06B6D4] drop-shadow-[0_10px_30px_rgba(108,99,255,0.3)]">Connexaara Insights</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Manage workshops, hackathons, OD approvals, realtime campus engagement, and academic collaboration from one intelligent ecosystem.
          </p>
        </motion.div>
      </div>

      {/* MAIN DASHBOARD CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[24px] sm:rounded-[40px] border border-white/10 bg-[#050816]/75 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden p-4 sm:p-6 md:p-12 relative"
        >
          {/* Ambient Lighting Overlay inside Dashboard */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-[130px] pointer-events-none" />

          {/* ASYMMETRIC DASHBOARD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* CARD 1: CAMPUS ENGAGEMENT (Top Left Large - col-span-7) */}
            <DashboardCard 
              title="Campus Engagement" 
              glowColor="#06B6D4"
              className="lg:col-span-7 min-h-[420px]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <div className="space-y-4 max-w-xs text-left">
                  <p className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    98.2%
                  </p>
                  <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                    Active Participation
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Realtime collaboration across departments and student communities.
                  </p>
                </div>

                {/* ANIMATED ORBIT VISUAL */}
                <div className="relative w-44 h-44 flex items-center justify-center flex-shrink-0">
                  {/* Outer Orbit */}
                  <motion.div
                    className="absolute w-40 h-40 border border-dashed border-cyan-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#06B6D4]" />
                  </motion.div>
                  {/* Mid Orbit */}
                  <motion.div
                    className="absolute w-28 h-28 border border-dashed border-[#6C63FF]/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#6C63FF] shadow-[0_0_15px_#6C63FF]" />
                  </motion.div>
                  {/* Inner Glow Center */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#6C63FF]/30 to-cyan-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-white/10">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* CARD 2: WORKSHOP ANALYTICS (Top Right Card - col-span-5) */}
            <DashboardCard 
              title="Workshop Analytics" 
              glowColor="#A855F7"
              className="lg:col-span-5 min-h-[420px]"
            >
              <div className="flex flex-col justify-between h-full gap-6">
                {/* Vertical Bars Graphic */}
                <div className="flex justify-between items-end h-40 px-2 mt-4">
                  {[
                    { name: "AI", val: "92%", color: "from-[#6C63FF] to-[#A855F7]" },
                    { name: "Full Stack", val: "84%", color: "from-cyan-400 to-[#06B6D4]" },
                    { name: "UI/UX", val: "76%", color: "from-[#8B5CF6] to-[#6C63FF]" },
                    { name: "Cloud", val: "88%", color: "from-[#06B6D4] to-violet-500" },
                    { name: "DevOps", val: "70%", color: "from-[#6C63FF] to-cyan-400" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-10">
                      <div className="relative w-3.5 h-32 bg-white/5 rounded-full overflow-hidden flex items-end">
                        <motion.div
                          className={`w-full bg-gradient-to-t ${item.color} rounded-full`}
                          initial={{ height: 0 }}
                          whileInView={{ height: item.val }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                          style={{
                            boxShadow: "0 0 15px rgba(108,99,255,0.3)",
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium tracking-tight mt-1 text-center truncate w-full">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-left mt-2">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Track workshop engagement and learning growth across campus.
                  </p>
                </div>
              </div>
            </DashboardCard>

            {/* CARD 3: OD APPROVALS (Bottom Left Small - col-span-4) */}
            <DashboardCard 
              title="OD Approvals" 
              glowColor="#A855F7"
              className="lg:col-span-4 min-h-[320px]"
            >
              <div className="flex flex-col justify-between h-full gap-4 text-left">
                <div className="flex items-center gap-4 mt-2">
                  <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">24K+</p>
                    <p className="text-xs text-[#A855F7] font-semibold tracking-wider uppercase">Requests Managed</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mt-4">
                  Faculty and HOD approvals processed efficiently in realtime.
                </p>
              </div>
            </DashboardCard>

            {/* CARD 4: ACADEMIC OPPORTUNITIES (Bottom Right Large - col-span-8) */}
            <DashboardCard 
              title="Academic Opportunities" 
              glowColor="#06B6D4"
              className="lg:col-span-8 min-h-[320px]"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center h-full text-left">
                <div className="space-y-3 max-w-xs">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every collaboration creates new opportunities for innovation and growth.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
                    <Activity size={12} className="animate-pulse" />
                    Participation Growth: +38%
                  </div>
                </div>

                {/* ANIMATED AREA/LINE GRAPH */}
                <div className="w-full h-36 relative bg-[#050816]/40 rounded-2xl border border-white/5 p-4 overflow-hidden flex-grow">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#6C63FF" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chart-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6C63FF" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                    {/* Area path */}
                    <motion.path
                      d="M 0,100 L 0,80 Q 75,30 150,60 T 300,20 T 450,55 L 500,35 L 500,100 Z"
                      fill="url(#chart-area-grad)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    {/* Line path */}
                    <motion.path
                      d="M 0,80 Q 75,30 150,60 T 300,20 T 450,55 L 500,35"
                      fill="none"
                      stroke="url(#chart-line-grad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                    />
                  </svg>
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-5 pointer-events-none opacity-5">
                    <div className="border-r border-dashed border-white" />
                    <div className="border-r border-dashed border-white" />
                    <div className="border-r border-dashed border-white" />
                    <div className="border-r border-dashed border-white" />
                  </div>
                </div>
              </div>
            </DashboardCard>

          </div>

          {/* FUTURISTIC DASHBOARD FOOTER AREA */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Footer Left */}
            <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Register</a>
            </div>

            {/* Footer Center */}
            <p className="text-xs text-slate-500 font-medium">
              &copy; Designed for Connexaara Academic Ecosystem
            </p>

            {/* Footer Right */}
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-[#6C63FF] transition-colors"><Globe size={16} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Terminal size={16} /></a>
              <a href="#" className="hover:text-[#A855F7] transition-colors"><ArrowUpRight size={16} /></a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
