import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, BookOpen, Code2, FlaskConical, User, Users } from "lucide-react";

import eventsImg    from "../../assets/events.png";
import odsImg       from "../../assets/ods.png";
import staffsImg    from "../../assets/staffs.png";
import userImg      from "../../assets/user.png";
import logo         from "../../assets/connexaara-logo.jpeg";

// ─── Tab definitions ────────────────────────────────────────────────────────
const TABS = [
  {
    id: "events",
    label: "Events",
    icon: Zap,
    image: eventsImg,
    accentColor: "#6C63FF",
    headline: "Campus Events Hub",
    subheadline: "All your college activities in one place",
    description:
      "Stay connected with everything happening on campus. From inter-college competitions to cultural fests, every event is organized, trackable, and easy to join through Connexaara's unified platform.",
    stats: [
      { label: "Active Events",    value: "48+" },
      { label: "Avg. Attendance",  value: "300+" },
      { label: "Colleges Linked",  value: "12" },
    ],
    highlights: [
      "Real-time event feed with filters",
      "RSVP & seat-booking in one tap",
      "Push notifications before events",
      "Post-event recap & gallery",
    ],
    testimonial: {
      quote: "Connexaara has made campus life incredibly active. I can browse all club events and book my RSVP in a single tap! It keeps us connected.",
      name: "Sarah Jenkins",
      role: "Student President, Student Union",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
  },
  {
    id: "ods",
    label: "ODS",
    icon: FlaskConical,
    image: odsImg,
    accentColor: "#06B6D4",
    headline: "Open Day Sessions",
    subheadline: "Transparent, open learning for everyone",
    description:
      "ODS (Open Day Sessions) are structured open-house knowledge-sharing sessions hosted by faculty, clubs, or departments. Attend, learn, and engage with experts across disciplines — no prior registration required.",
    stats: [
      { label: "Sessions Hosted",  value: "120+" },
      { label: "Faculties Involved", value: "60+"  },
      { label: "Student Hours",    value: "5k+"  },
    ],
    highlights: [
      "Browse sessions by department or topic",
      "Live Q&A with faculty & mentors",
      "Downloadable session resources",
      "Attendance auto-logged to profile",
    ],
    testimonial: {
      quote: "Hosting Open Day Sessions through Connexaara has doubled our student reach. The auto-logged attendance and transparency make knowledge sharing seamless.",
      name: "Dr. Aris Thorne",
      role: "Dean of Academics, School of Sciences",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    },
  },
  {
    id: "staff",
    label: "Staff",
    icon: Users,
    image: staffsImg,
    accentColor: "#A855F7",
    headline: "Empower Your Academic Staff",
    subheadline: "Efficient Administration & Approvals",
    description:
      "Connexaara provides faculty and administrators with powerful tools to manage classes, approve OD requests, track student attendance, and coordinate department events with absolute ease.",
    stats: [
      { label: "Active Faculty",   value: "80+" },
      { label: "Approval Rate",    value: "99.2%" },
      { label: "Time Saved",       value: "15h/wk"  },
    ],
    highlights: [
      "One-click OD & leave approvals",
      "Smart attendance & batch tracking",
      "Direct student communication",
      "Departmental performance insights",
    ],
    testimonial: {
      quote: "Managing approvals and student events was a hectic manual process until we integrated Connexaara. It streamlined our administration workflow completely.",
      name: "Dr. G. Fathima",
      role: "Senior Professor & Academic Coordinator",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    },
  },
  {
    id: "user",
    label: "User",
    icon: User,
    image: userImg,
    accentColor: "#F59E0B",
    headline: "Personalized Student Dashboard",
    subheadline: "Approvals & Campus Life Made Simple",
    description:
      "Access your personalized dashboard to track your academic progress, apply for ODs, register for upcoming events, and view details about your batch mates all in one clean interface.",
    stats: [
      { label: "Registered Students", value: "2.5k+"    },
      { label: "Daily Active Users",  value: "1.2k+"  },
      { label: "User Satisfaction",   value: "4.8/5"  },
    ],
    highlights: [
      "Personal profile & academic logs",
      "Real-time OD request status tracker",
      "Interactive classmate directories",
      "Quick access to events & workshops",
    ],
    testimonial: {
      quote: "Everything I need for campus life is right on my home page. Applying for ODs and tracking my workshop certificates has never been this simple.",
      name: "Rahul Kumar",
      role: "Final Year Student",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    },
  },
];

// ─── Panel fade variant ──────────────────────────────────────────────────────
const panelVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("events");
  const navigate = useNavigate();
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <section id="events" className="py-16 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[80px] -top-96 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Upcoming <span className="text-gradient">Campus Events</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              Discover and participate in hackathons, workshops, and major campus
              activities seamlessly integrated into your workflow.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate("/events-showcase")}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition cursor-pointer w-full sm:w-auto justify-center"
          >
            View All Events <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* ── Tab Navigation Bar ─────────────────────────────────────── */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center items-center bg-[#0d0c15]/60 border border-white/5 p-2 rounded-2xl max-w-4xl mx-auto mb-8 md:mb-16 gap-2 backdrop-blur-md shadow-xl no-scrollbar">
          {TABS.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-white/[0.05] border border-white/10 text-white shadow-lg"
                    : "text-gray-400 hover:text-white border border-transparent"
                }`}
              >
                {isActive && (
                  <Icon size={16} style={{ color: t.accentColor }} />
                )}
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content Grid ───────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
                style={{
                  borderColor: `${tab.accentColor}33`,
                  backgroundColor: `${tab.accentColor}0a`,
                  color: tab.accentColor,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tab.accentColor }} />
                {tab.subheadline}
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                {tab.headline}
              </h3>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {tab.description}
              </p>

              {/* Statistics & Highlights */}
              <div className="border-t border-white/5 pt-8 mt-2 space-y-6">
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4">
                  {tab.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-black" style={{ color: tab.accentColor }}>
                        {s.value}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 pt-2">
                  {tab.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: tab.accentColor }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Browser Mockup Frame */}
            <div className="lg:col-span-7 relative flex justify-center w-full">
              {/* Radial background glow matching tab accent color */}
              <div
                className="absolute w-80 h-80 rounded-full blur-[70px] opacity-20 pointer-events-none -top-10 -right-10 transition-colors duration-500"
                style={{ backgroundColor: tab.accentColor }}
              />

              <div
                className="w-full relative rounded-3xl border border-white/10 bg-[#0d0c15]/60 p-4 backdrop-blur-sm shadow-2xl transition-all duration-500"
                style={{ boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 60px ${tab.accentColor}0d` }}
              >
                {/* Browser bar with window control dots */}
                <div className="flex items-center gap-1.5 pb-4 px-2 border-b border-white/5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="ml-4 text-[11px] text-gray-500 font-mono tracking-wider truncate">
                    connexaara.com/events/{tab.id}
                  </div>
                </div>

                {/* Image panel */}
                <div className="relative aspect-[16/7.7] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0f]">
                  <motion.img
                    key={tab.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                    src={tab.image}
                    alt={tab.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
