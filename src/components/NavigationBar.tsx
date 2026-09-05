import { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  activeSection: string;
}

export default function NavigationBar({ activeSection }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", targetId: "home" },
    { label: "ABOUT", targetId: "about" },
    { label: "SKILLS", targetId: "skills" },
    { label: "PROJECTS", targetId: "projects" },
    { label: "SERVICES", targetId: "services" },
    { label: "CONTACT", targetId: "contact" },
  ];

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 inset-x-4 md:inset-x-8 h-16 rounded-2xl z-50 transition-all duration-300 flex items-center justify-between px-6 border ${
          isScrolled 
            ? "bg-[#020617]/75 backdrop-blur-md border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-14" 
            : "bg-transparent border-transparent"
        }`}
        id="navbar"
      >
        {/* Logo area */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-bold font-mono text-[13px] text-white shadow-[0_0_10px_rgba(0,240,255,0.2)] group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="font-display font-extrabold text-[16px] tracking-wider text-white group-hover:text-neon-blue transition-colors">
            AKH
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.targetId)}
                className={`text-[11px] font-bold font-mono tracking-widest relative py-1 hover:text-white transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-neon-blue" : "text-slate-400"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Action Connect Button */}
        <button
          onClick={() => handleNavClick("contact")}
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-xl border border-neon-blue/30 hover:border-neon-blue bg-neon-blue/5 text-[10px] font-bold font-mono text-neon-blue tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] cursor-pointer"
        >
          <span>LET&apos;S CONNECT</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1 rounded-lg border border-slate-800/60 bg-slate-950/40"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#020617]/95 z-40 md:hidden flex flex-col justify-center px-10 gap-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Background design elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-neon-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 text-left">
              <span className="text-[9px] font-mono tracking-widest text-slate-500">// DEVELOPMENT PORTAL DIRECTORY</span>
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.targetId;
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.targetId)}
                    className={`text-[24px] font-bold text-left tracking-wide block hover:text-white transition-colors cursor-pointer ${
                      isActive ? "text-neon-blue" : "text-slate-400"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="font-mono text-[14px] text-slate-600 mr-2">0{idx + 1}.</span>
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="border-t border-slate-900 pt-6 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-mono font-bold text-[12px] tracking-wider uppercase text-center shadow-lg cursor-pointer"
              >
                LET&apos;S CONNECT
              </button>
              
              <div className="flex items-center gap-1.5 justify-center text-[10px] text-slate-500 font-mono mt-2">
                <Terminal className="w-3.5 h-3.5 text-neon-blue" />
                <span>AKH DEV v1.0.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
