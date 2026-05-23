// src/components/LoginSocialButton.jsx
import React from "react";
import { Google, Github } from "lucide-react";

const icons = {
  google: Google,
  github: Github,
  // facebook icon removed
};

export default function LoginSocialButton({ type }) {
  const Icon = icons[type];
  if (!Icon) return null;
  return (
    <button
      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform"
      aria-label={type}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
}
