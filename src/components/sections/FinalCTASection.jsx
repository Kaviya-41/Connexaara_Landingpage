import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FinalCTASection() {
  const navigate = useNavigate();
  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] sm:rounded-[40px] glass-panel p-6 sm:p-10 md:p-16 text-center border border-[#6C63FF]/30 overflow-hidden group"
        >
          {/* Animated Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-[#6C63FF]/30 to-transparent blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#06B6D4]/20 blur-[100px] group-hover:bg-[#06B6D4]/30 transition-colors duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight">
              Transform Your <br />
              <span className="text-gradient">Campus Collaboration</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
              Join leading educational institutions and empower your students, faculty, and administrators with one smart ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={() => navigate("/login")} className="w-full sm:w-auto flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] hover:from-[#5A52D5] hover:to-[#7A4CE5] text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(108,99,255,0.5)] group/btn">
                Start Free 
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/");
                }}
                className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel hover:bg-white/10 text-white font-bold text-lg transition-colors border border-white/20 cursor-pointer"
              >
                Book Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
