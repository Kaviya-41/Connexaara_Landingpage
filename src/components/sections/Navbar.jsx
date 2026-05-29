import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Sparkles,
  Calendar,
  HelpCircle,
  Mail,
  LogIn,
  Rocket
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/connexaara-logo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Always active "home" at the very top of the page
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      // Bottom of page check
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      // Scroll Spy using getBoundingClientRect to ignore relative wrapper offsets
      const sections = ["home", "about", "features", "events", "faq", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section intersects a line 200px from the top of the viewport
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = ["Home", "About", "Features", "Events", "FAQ", "Contact"];

  const navGroups = [
    {
      title: "DISCOVER",
      links: [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: Info },
        { name: "Features", href: "#features", icon: Sparkles },
        { name: "Events", href: "#events", icon: Calendar },
      ],
    },
    {
      title: "ACTIVITY",
      links: [
        { name: "FAQ", href: "#faq", icon: HelpCircle },
        { name: "Contact", href: "#contact", icon: Mail },
      ],
    },
    {
      title: "ACCOUNT",
      links: [
        {
          name: "Login",
          action: () => {
            navigate("/login");
            setMobileMenuOpen(false);
          },
          icon: LogIn
        },
        {
          name: "Get Started",
          action: () => {
            navigate("/login");
            setMobileMenuOpen(false);
          },
          icon: Rocket,
          highlight: true
        },
      ],
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Connexaara" className="w-10 h-10 rounded-xl" />
          <span className="text-xl font-bold tracking-wide">Connexaara</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm transition-colors relative group ${
                  isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#06B6D4] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-[#6C63FF] hover:bg-[#5A52D5] text-white text-sm font-medium transition shadow-[0_0_15px_rgba(108,99,255,0.4)]" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Side-Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 bottom-0 w-[290px] max-w-[85vw] bg-[#05050f]/95 border-r border-white/10 flex flex-col p-6 shadow-2xl z-50 overflow-y-auto md:hidden font-sans"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Connexaara" className="w-8 h-8 rounded-xl object-cover" />
                  <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-[#FF3366] via-[#FF5E62] to-[#FF9933] text-transparent bg-clip-text">
                    Connexaara
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Link Groups */}
              <div className="flex flex-col gap-6 flex-1">
                {navGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.2em] font-bold text-gray-500 mb-1.5 px-2">
                      {group.title}
                    </span>
                    <div className="flex flex-col gap-1">
                      {group.links.map((link) => {
                        const Icon = link.icon;
                        const linkHref = link.href || "";
                        const isActive = linkHref ? activeSection === linkHref.slice(1) : false;

                        const content = (
                          <>
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-r bg-[#6C63FF]" />
                            )}
                            <Icon
                              size={18}
                              className={`transition-colors ${
                                isActive ? "text-[#6C63FF]" : "text-gray-400 group-hover:text-white"
                              }`}
                            />
                            <span>{link.name}</span>
                          </>
                        );

                        if (link.action) {
                          return (
                            <button
                              key={link.name}
                              onClick={link.action}
                              className={`relative flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                                link.highlight
                                  ? "bg-[#6C63FF] text-white hover:bg-[#5A52D5] shadow-[0_4px_15px_rgba(108,99,255,0.3)] mt-2"
                                  : "text-gray-300 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {link.highlight ? (
                                <>
                                  <Icon size={18} />
                                  <span>{link.name}</span>
                                </>
                              ) : (
                                content
                              )}
                            </button>
                          );
                        }

                        return (
                          <a
                            key={link.name}
                            href={linkHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`relative flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                              isActive
                                ? "bg-[#6C63FF]/10 text-white font-semibold"
                                : "text-gray-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {content}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
