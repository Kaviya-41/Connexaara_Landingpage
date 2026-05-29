import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/animations";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Computer Science",
      text: "Connexaara has revolutionized how we handle OD requests and department communication. The approval workflow is seamless.",
      initials: "SJ",
      color: "bg-[#6C63FF]",
    },
    {
      name: "Alex Rivera",
      role: "Student Tech Club Lead",
      text: "Organizing hackathons used to be a nightmare of spreadsheets. Now, everything from team formation to announcements is in one place.",
      initials: "AR",
      color: "bg-[#06B6D4]",
    },
    {
      name: "Prof. Michael Chen",
      role: "Event Coordinator",
      text: "The analytics dashboard gives us clear insights into student participation. It's truly a game changer for campus engagement.",
      initials: "MC",
      color: "bg-[#8B5CF6]",
    },
    {
      name: "Emily Watson",
      role: "Final Year Student",
      text: "I love having all my event updates, approvals, and campus news in a single app. The UI is incredibly smooth and intuitive.",
      initials: "EW",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-10 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#8B5CF6]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            Loved by <span className="text-gradient">Campuses Everywhere</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] glass-panel rounded-[32px] p-6 sm:p-8 snap-center relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote size={40} className="text-white/10 absolute top-8 right-8 group-hover:text-[#6C63FF]/20 transition-colors" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full ${test.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className="text-sm text-gray-400">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
