import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is Connexaara?",
      a: "Connexaara is a unified digital platform designed specifically for educational institutions to manage collaboration, OD workflows, events, and hackathons seamlessly.",
    },
    {
      q: "Who can use it?",
      a: "It is built for students, faculty members, Head of Departments (HODs), club leads, and event organizers. Each role has specific access levels and features.",
    },
    {
      q: "How does OD management work?",
      a: "Students can request On-Duty (OD) leaves digitally. The request routes automatically to the respective tutor and HOD for approval, generating a verifiable digital record.",
    },
    {
      q: "Can colleges customize it?",
      a: "Yes! Connexaara is highly modular. Institutions can customize workflows, department structures, and branding to match their specific campus needs.",
    },
    {
      q: "Is it mobile responsive?",
      a: "Absolutely. The platform is designed with a mobile-first approach, ensuring students and faculty can access all features smoothly on any device.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-[#06B6D4] transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-[#06B6D4]" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#B8C0CC] leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
