import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import connexaaraLogo from "../assets/connexaara-logo.jpeg";

/* ─────────────────────────────────────
   Inline SVG Social Icons
───────────────────────────────────── */
function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ─────────────────────────────────────
   Floating Glass Card (Right Panel)
───────────────────────────────────── */
function FloatingCard() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "36px",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        padding: "28px 30px",
        boxShadow: "0 30px 80px rgba(108,99,255,0.22), 0 0 0 1px rgba(108,99,255,0.08)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* corner glow */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "160px", height: "160px",
        background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)",
        borderRadius: "0 36px 0 0",
        pointerEvents: "none",
      }} />

      <div style={{
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.25em", color: "#06B6D4",
        textTransform: "uppercase", marginBottom: "10px",
      }}>
        Campus Platform
      </div>

      <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.35 }}>
        Transform your campus collaboration
      </h3>

      <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "20px", lineHeight: 1.65 }}>
        Manage workshops, hackathons, OD approvals, student activities, and campus engagement from one futuristic platform.
      </p>

      {/* Avatar stack */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display: "flex" }}>
          {[11, 22, 33].map((n) => (
            <img
              key={n}
              src={`https://i.pravatar.cc/40?img=${n}`}
              alt="user"
              loading="lazy"
              style={{
                width: "30px", height: "30px", borderRadius: "50%",
                border: "2px solid #05050f", marginLeft: n === 11 ? 0 : "-8px",
              }}
            />
          ))}
          <div style={{
            width: "30px", height: "30px", borderRadius: "50%",
            border: "2px solid #05050f", marginLeft: "-8px",
            background: "#6C63FF", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "9px", fontWeight: 800, color: "#fff",
          }}>
            +5k
          </div>
        </div>
        <span style={{ fontSize: "12px", color: "#64748b" }}>students already joined</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Main Login Page
───────────────────────────────────── */
export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    /* Full-page wrapper — uses the EXACT same bg as landing page */
    <div
      className="min-h-screen w-full overflow-hidden px-4 sm:px-6 md:px-10 py-6 lg:py-12 flex items-center justify-center relative"
      style={{
        background: "#05050f",
      }}
    >
      {/* ── Global ambient glows (same as landing page) ── */}
      <div
        className="w-[280px] h-[280px] md:w-[520px] md:h-[520px] blur-[40px] md:blur-[80px]"
        style={{
          position: "absolute", top: "-12%", left: "-10%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="w-[280px] h-[280px] md:w-[520px] md:h-[520px] blur-[40px] md:blur-[80px]"
        style={{
          position: "absolute", bottom: "-14%", right: "-8%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* ── Main Split Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col lg:flex-row w-full max-w-[1100px] min-h-fit lg:min-h-[680px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/5 shadow-2xl relative z-10"
      >

        {/* ════════════════════════════════
            LEFT SIDE — Dark Glass Form Panel
           ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[45%] lg:flex-[0_0_45%] order-2 lg:order-1 px-6 py-10 sm:px-10 sm:py-12 lg:p-12 border-t lg:border-t-0 lg:border-r border-white/5 flex flex-col justify-center"
          style={{
            background: "rgba(11,16,32,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>

            {/* Back link */}
            <Link
              to="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "12px", color: "#64748b",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="mb-6 lg:mb-8"
              onMouseEnter={e => e.currentTarget.style.color = "#94a3b8"}
              onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
            >
              ← Back to Home
            </Link>

            {/* Logo + brand name */}
            <div className="hidden lg:flex items-center gap-[12px] mb-[28px]">
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(108,99,255,0.4)",
                boxShadow: "0 0 20px rgba(108,99,255,0.3)",
              }}>
                <img src={connexaaraLogo} alt="Connexaara" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                Connexaara
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-[30px] font-black text-white mb-1 tracking-tight">
              Sign in
            </h2>
            <p className="text-xs sm:text-[13px] text-gray-500 mb-6 lg:mb-8">
              Welcome back! Please enter your details.
            </p>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()}>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#94a3b8", marginBottom: "8px", letterSpacing: "0.02em" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@university.edu"
                  style={{
                    width: "100%", height: "52px",
                    padding: "0 20px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "14px",
                    color: "#fff", fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = "#6C63FF";
                    e.target.style.background = "rgba(108,99,255,0.08)";
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = "rgba(255,255,255,0.10)";
                    e.target.style.background = "rgba(255,255,255,0.04)";
                  }}
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#94a3b8", marginBottom: "8px", letterSpacing: "0.02em" }}>
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    style={{
                      width: "100%", height: "52px",
                      padding: "0 50px 0 20px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: "14px",
                      color: "#fff", fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = "#6C63FF";
                      e.target.style.background = "rgba(108,99,255,0.08)";
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = "rgba(255,255,255,0.10)";
                      e.target.style.background = "rgba(255,255,255,0.04)";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: "absolute", right: "14px", top: "50%",
                      transform: "translateY(-50%)",
                      background: "none", border: "none",
                      color: "#64748b", fontSize: "11px",
                      cursor: "pointer",
                    }}
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748b", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    style={{
                      width: "15px", height: "15px",
                      accentColor: "#6C63FF",
                    }}
                  />
                  Remember me
                </label>
              </div>

              {/* Sign in button — gradient like landing page CTA */}
              <button
                type="submit"
                style={{
                  width: "100%", height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #6C63FF 0%, #06B6D4 100%)",
                  border: "none",
                  color: "#fff", fontSize: "14px", fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  boxShadow: "0 10px 35px rgba(108,99,255,0.35)",
                  transition: "opacity 0.2s, transform 0.2s",
                  marginBottom: "20px",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Sign in
              </button>

              {/* Links */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "24px" }}>
                <p style={{ color: "#64748b" }}>
                  Don't have an account?{" "}
                  <a href="#" style={{ color: "#6C63FF", fontWeight: 700, textDecoration: "none" }}>Sign up</a>
                </p>
                <a href="#" style={{ color: "#475569", textDecoration: "none", fontSize: "12px" }}>
                  Forgot Password
                </a>
              </div>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
                <span style={{ fontSize: "11px", color: "#475569", whiteSpace: "nowrap" }}>or continue with</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
              </div>

              {/* Social buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                {[
                  { label: "Google", Icon: GoogleIcon, bg: "#fff" },
                  { label: "GitHub", Icon: GithubIcon, bg: "#24292F" },
                  { label: "Facebook", Icon: FacebookIcon, bg: "#fff" },
                ].map(({ label, Icon, bg }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    style={{
                      width: "48px", height: "48px",
                      borderRadius: "50%",
                      background: bg,
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}
                  >
                    <Icon />
                  </button>
                ))}
              </div>

            </form>
          </div>
        </motion.div>

        {/* ════════════════════════════════
            RIGHT SIDE — Dark Brand Panel
           ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          className="w-full lg:w-[55%] lg:flex-[0_0_55%] order-1 lg:order-2 px-6 py-10 sm:px-10 sm:py-12 lg:p-12 lg:py-14 flex flex-col items-center justify-between relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #080b18 0%, #05050f 60%, #090614 100%)",
          }}
        >
          {/* Panel ambient glows */}
          <div
            className="w-[240px] h-[240px] md:w-[400px] md:h-[400px] blur-[40px] md:blur-[70px]"
            style={{
              position: "absolute", top: "-20%", right: "-10%", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(108,99,255,0.28) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="w-[240px] h-[240px] md:w-[400px] md:h-[400px] blur-[40px] md:blur-[70px]"
            style={{
              position: "absolute", bottom: "-20%", left: "-10%", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* Grid overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          {/* ── Top Section: Logo + Heading + Description ── */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

            {/* Glowing logo circle */}
            <div
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-[120px] lg:h-[120px] mb-6 sm:mb-8"
              style={{
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(108,99,255,0.4) 0%, rgba(6,182,212,0.3) 100%)",
                padding: "3px",
                boxShadow: "0 0 50px rgba(108,99,255,0.45), 0 0 100px rgba(108,99,255,0.15)",
              }}
            >
              <div style={{
                width: "100%", height: "100%",
                borderRadius: "50%", overflow: "hidden",
                background: "#05050f",
              }}>
                <img
                  src={connexaaraLogo}
                  alt="Connexaara"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Eyebrow label */}
            <div style={{
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.3em", color: "#06B6D4",
              textTransform: "uppercase", marginBottom: "12px",
            }}>
              Academic Collaboration Platform
            </div>

            {/* Main heading with gradient text */}
            <h1
              className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight mb-4 leading-tight"
              style={{
                color: "#fff",
              }}
            >
              Welcome to{" "}
              <span style={{
                background: "linear-gradient(90deg, #a78bfa 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Connexaara
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-[14px] text-gray-400 leading-relaxed max-w-[380px] mb-2 sm:mb-3">
              Connexaara helps students, staff, and HODs collaborate through hackathons, OD approvals, workshops, campus activities, and realtime academic networking.
            </p>
            <p className="text-[10px] sm:text-xs lg:text-[12px] text-gray-500">
              Join thousands of students building smarter campus communities.
            </p>
          </div>

          {/* ── Bottom: Floating Glass Card ── */}
          <div className="hidden lg:block relative z-10 w-full max-w-[420px] mt-8">
            <FloatingCard />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
