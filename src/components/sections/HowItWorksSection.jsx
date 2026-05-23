import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/animations";
import { Network, FolderKanban, TrendingUp } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <Network size={32} className="text-[#6C63FF]" />,
      title: "Connect Your Campus",
      desc: "Onboard students, faculty, and departments into a unified digital workspace.",
      color: "border-[#6C63FF]/30",
    },
    {
      num: "02",
      icon: <FolderKanban size={32} className="text-[#06B6D4]" />,
      title: "Manage Events & OD",
      desc: "Create events, track digital OD approvals, and manage hackathon teams.",
      color: "border-[#06B6D4]/30",
    },
    {
      num: "03",
      icon: <TrendingUp size={32} className="text-[#8B5CF6]" />,
      title: "Track Activities & Growth",
      desc: "Monitor engagement, analyze performance, and foster an innovation ecosystem.",
      color: "border-[#8B5CF6]/30",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            How <span className="text-gradient">Connexaara</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A simple 3-step process to digitalize your campus workflow and enhance academic collaboration.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#6C63FF]/20 via-[#06B6D4]/20 to-[#8B5CF6]/20 z-0" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-8 border-t border-l ${step.color} shadow-2xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
                <div className="absolute -top-3 -right-3 text-[50px] font-black text-white/5 opacity-50 pointer-events-none">
                  {step.num}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-[#B8C0CC] leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
