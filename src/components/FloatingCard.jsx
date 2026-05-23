// src/components/FloatingCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FloatingCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-[40px] p-6 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Gradient glow overlay */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#6C63FF] to-[#06B6D4] opacity-20 pointer-events-none" />
      <h3 className="text-xl font-bold text-white mb-2">Transform your campus collaboration</h3>
      <p className="text-sm text-gray-300 mb-4">
        Manage workshops, hackathons, OD approvals, student activities, and campus engagement from one futuristic platform.
      </p>
      {/* Avatar stack */}
      <div className="flex items-center -space-x-2">
        <img src="https://i.pravatar.cc/40?img=1" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white" />
        <img src="https://i.pravatar.cc/40?img=2" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white" />
        <img src="https://i.pravatar.cc/40?img=3" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold text-white border-2 border-white">
          +5k
        </div>
      </div>
    </motion.div>
  );
}
