import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/connexaara-logo.jpeg";
import { contactAnimation, buttonGlowAnimation } from "../../animations/animations";

export default function ContactSection() {
  const navigate = useNavigate();
  return (
    <motion.section {...contactAnimation} id="contact" className="py-16 md:py-32 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-white/10 rounded-[24px] sm:rounded-[40px] p-6 sm:p-10 md:p-16 backdrop-blur-xl">
        <div className="text-center">
          <img src={logo} alt="logo" className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-2xl" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6">
            Digitize Your Campus<span className="text-blue-400"> With Connexaara</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Transform academic collaboration, innovation ecosystems, OD workflows, and campus engagement through one smart platform.
          </p>
          <motion.button
            {...buttonGlowAnimation}
            onClick={() => navigate("/login")}
            className="inline-flex w-full sm:w-auto justify-center bg-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-600/40"
          >
            Request Demo
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
