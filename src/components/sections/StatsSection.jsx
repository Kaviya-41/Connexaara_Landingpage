import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/animations";
import { Users, Calendar, Building2, Zap } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: <Users size={32} className="text-[#6C63FF]" />, value: "10K+", label: "Students" },
    { icon: <Calendar size={32} className="text-[#06B6D4]" />, value: "250+", label: "Events" },
    { icon: <Building2 size={32} className="text-[#8B5CF6]" />, value: "100+", label: "Colleges" },
    { icon: <Zap size={32} className="text-emerald-400" />, value: "95%", label: "Faster Collaboration" },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 relative z-10 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center p-6 glass-panel rounded-3xl text-center group hover:bg-white/5 transition-all"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black mb-2 text-white">{stat.value}</h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
