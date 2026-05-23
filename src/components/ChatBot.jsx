import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, User, HelpCircle } from "lucide-react";

const SUGGESTIONS = [
  {
    question: "What is Connexaara?",
    answer: "Connexaara is a next-generation academic ecosystem that connects students, faculty, and administrators. It streamlines OD approvals, hackathons, workshops, and student networking in a premium, unified interface."
  },
  {
    question: "How do OD approvals work?",
    answer: "Students submit On-Duty (OD) leave requests digitally. The request automatically routes to the designated tutor and HOD. Once approved, a verifiable digital record is generated, reducing processing time by 95%."
  },
  {
    question: "How do I organize events or hackathons?",
    answer: "Using our Events and Hackathon modules, club leads and coordinators can manage registrations, team formations, and schedules. Students can discover all details, view live updates, and register inside the app."
  },
  {
    question: "Who can use the platform?",
    answer: "Connexaara has dedicated, secure roles for Students, Faculty/Tutors, Head of Departments (HODs), and Campus Admins. Each role gets a customized dashboard tailored to their daily academic needs."
  },
  {
    question: "Is it customizable for our college?",
    answer: "Yes, absolutely! Connexaara is modular. Institutions can customize the department trees, specific approval chains, club configurations, rules, and colors to match their official brand guidelines."
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! 👋 I am your Connexaara Assistant. I can help clear any doubts you have about our platform, features, OD approvals, and event systems. Feel free to ask or click a suggestion below!"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat window
  useEffect(() => {
    if (messagesEndRef.current) {
      // Use smooth scroll on desktop, instant scroll on mobile to prevent layout lags
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      messagesEndRef.current.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const updatedMessages = [...messages, { sender: "user", text }];
    setMessages(updatedMessages);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      let botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  const getBotResponse = (text) => {
    const query = text.toLowerCase().trim();

    // Check predefined suggestions
    const matchedSuggestion = SUGGESTIONS.find(s => 
      query.includes(s.question.toLowerCase()) || s.question.toLowerCase().includes(query)
    );
    if (matchedSuggestion) return matchedSuggestion.answer;

    // Keyword matching rules
    if (query.includes("od") || query.includes("on duty") || query.includes("leave") || query.includes("approval")) {
      return "The OD module digitizes academic leaves. Students submit details, and tutors/HODs receive instant notifications to review and digitally sign. It replaces manual paperwork completely.";
    }
    if (query.includes("hackathon") || query.includes("workshop") || query.includes("event") || query.includes("ods")) {
      return "Connexaara supports dynamic page showcase for workshops, events, hackathons, and webinars. It covers registrations, team creation, submission tracking, and analytics dashboard previews.";
    }
    if (query.includes("dashboard") || query.includes("analytic") || query.includes("chart")) {
      return "The analytical dashboard provides student participation data, active OD counts, event timelines, and invoice summaries. You can preview it directly in our 'Dashboard Overview' section.";
    }
    if (query.includes("customize") || query.includes("change") || query.includes("college") || query.includes("custom")) {
      return "Connexaara is built for flexibility! Colleges can customize the approval workflows, role hierarchies, branding themes, and department catalogs in just a few clicks.";
    }
    if (query.includes("demo") || query.includes("book") || query.includes("login") || query.includes("start")) {
      return "You can log in by clicking the 'Login' button in the navbar. To book a live demo, click the 'Book Demo' or 'Request Demo' buttons on the page to route to our registration desk.";
    }
    if (query.includes("price") || query.includes("cost") || query.includes("free")) {
      return "Connexaara offers flexible pricing tailored to student clubs and institutional scales. Start for free by clicking the 'Start Free' CTA in our CTA section, or request a custom quotation.";
    }
    if (query.includes("contact") || query.includes("email") || query.includes("support")) {
      return "You can reach our campus support desk via support@connexaara.edu or by completing the request form in our 'Digitize Your Campus' section.";
    }

    return "Interesting question! Connexaara supports a range of integrations, customizable flows, and digital signatures. If you'd like specialized implementation answers, feel free to contact us at support@connexaara.edu or book a custom demo session.";
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[calc(100vw-32px)] sm:w-[380px] h-[480px] sm:h-[550px] max-h-[calc(100dvh-120px)] max-h-[calc(100vh-120px)] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden bg-[#090d16] sm:bg-slate-950/90 sm:backdrop-blur-xl"
            style={{
              boxShadow: "0 15px 40px rgba(108,99,255,0.2)",
              willChange: "transform, opacity",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6C63FF]/20 to-[#06B6D4]/20 border-b border-white/10 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#06B6D4] flex items-center justify-center text-white shadow-lg shadow-[#6C63FF]/30">
                  <Bot size={22} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                    Connexaara AI <Sparkles size={13} className="text-[#06B6D4] fill-[#06B6D4]" />
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                    Online Assistant
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 ${
                    msg.sender === "bot" 
                      ? "bg-slate-900 text-[#06B6D4]" 
                      : "bg-[#6C63FF] text-white"
                  }`}>
                    {msg.sender === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === "bot" 
                      ? "bg-white/5 text-gray-200 border border-white/5 rounded-tl-none" 
                      : "bg-[#6C63FF]/20 text-white border border-[#6C63FF]/30 rounded-tr-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-slate-900 text-[#06B6D4]">
                    <Bot size={14} />
                  </div>
                  <div className="rounded-2xl px-4 py-3 bg-white/5 text-gray-400 border border-white/5 rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            <div className="px-5 py-2 flex flex-col gap-1.5 border-t border-white/5 bg-black/10">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                <HelpCircle size={10} /> Suggested Questions
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
                {SUGGESTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.question)}
                    className="shrink-0 text-[10px] bg-white/5 hover:bg-[#6C63FF]/20 text-gray-300 hover:text-white border border-white/5 hover:border-[#6C63FF]/40 rounded-full px-3 py-1.5 cursor-pointer transition-all duration-200"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="border-t border-white/10 px-5 py-4 bg-slate-950 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#6C63FF] focus:bg-white/10 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#06B6D4] hover:opacity-90 text-white flex items-center justify-center cursor-pointer shadow-lg shadow-[#6C63FF]/20 transition-all shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#06B6D4] flex items-center justify-center text-white cursor-pointer relative shadow-[0_8px_30px_rgba(108,99,255,0.4)] border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {/* Glow pulsing ring around active chatbot button */}
        <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#06B6D4] opacity-20 blur-sm animate-pulse pointer-events-none" />
      </motion.button>
    </div>
  );
}
