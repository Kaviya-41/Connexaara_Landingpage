import logo from "../../assets/connexaara-logo.jpeg";
import { Mail, MessageSquare, Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 pt-16 pb-8 px-4 sm:px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Connexaara" className="w-10 h-10 rounded-xl" />
            <span className="text-2xl font-black tracking-wide text-white">Connexaara</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            The next-generation academic ecosystem designed to connect students, faculty, and institutions.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#6C63FF] hover:text-white transition-colors text-gray-400">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#6C63FF] hover:text-white transition-colors text-gray-400">
              <MessageSquare size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#6C63FF] hover:text-white transition-colors text-gray-400">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#6C63FF] hover:text-white transition-colors text-gray-400">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4">
            <li><a href="#features" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Integration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Documentation</a></li>
            <li><a href="#events" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Webinars</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Blog</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Connexaara. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          Made with <span className="text-rose-500">❤</span> for Students
        </div>
      </div>
    </footer>
  );
}
