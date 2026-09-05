import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Github, Linkedin, Mail, Play, CheckCircle, Terminal, RefreshCw, Cpu } from "lucide-react";

// ==========================================================
// PERSONAL LINKS - EDIT THESE VARIABLES TO CUSTOMIZE YOUR URLS
// ==========================================================
export const GITHUB_URL = "https://github.com/placeholder-aasip";     // Replace with actual GitHub link
export const LINKEDIN_URL = "https://linkedin.com/in/placeholder-aasip"; // Replace with actual LinkedIn link
export const EMAIL_ADDRESS = "blackff131h@gmail.com";                  // Your email address (prefilled from metadata)
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/developer?id=placeholder"; // Replace with actual Google Play dev link

export default function ContactInterface() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Stack Web",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const addConsoleLog = (msg: string) => {
    setConsoleLogs((prev) => [...prev.slice(-3), `[SYSTEM] ${msg}`]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addConsoleLog("ERROR: Required fields are incomplete.");
      return;
    }

    setFormStatus("sending");
    addConsoleLog("Initializing secure tunnel connection...");

    setTimeout(() => {
      addConsoleLog("Serializing form payload parameters...");
      setTimeout(() => {
        addConsoleLog(`Routing transmission to: ${EMAIL_ADDRESS}`);
        setTimeout(() => {
          setFormStatus("success");
          addConsoleLog("Transmission delivered successfully. Secure tunnel closed.");
        }, 800);
      }, 600);
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "Full Stack Web",
      message: "",
    });
    setFormStatus("idle");
    setConsoleLogs([]);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: GITHUB_URL,
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-neon-blue hover:border-neon-blue/40 shadow-neon-blue/5",
      badge: "REPOS",
    },
    {
      name: "LinkedIn",
      url: LINKEDIN_URL,
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-neon-purple hover:border-neon-purple/40 shadow-neon-purple/5",
      badge: "NETWORK",
    },
    {
      name: "Google Play",
      url: GOOGLE_PLAY_URL,
      icon: <Play className="w-5 h-5" />,
      color: "hover:text-neon-orange hover:border-neon-orange/40 shadow-neon-orange/5",
      badge: "APPS",
    },
    {
      name: "Email",
      url: `mailto:${EMAIL_ADDRESS}`,
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-emerald-400 hover:border-emerald-400/40 shadow-emerald-400/5",
      badge: "DIRECT",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch px-2">
      
      {/* LEFT: Info Panel & Interactive Developer Console */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        
        {/* Connection text card */}
        <div className="glass-panel rounded-2xl p-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-neon-purple/5 rounded-full filter blur-xl pointer-events-none" />
          
          <h3 className="text-[22px] font-bold text-white tracking-wide mb-3">
            COMMUNICATION PORTAL
          </h3>
          <p className="text-[13px] text-slate-400 leading-relaxed font-light mb-6">
            Connecting with Aasip establishes a direct pathway to scalable, production-ready full-stack software and high-quality Flutter architectures. 
          </p>

          <div className="flex flex-col gap-3 font-mono text-[11px] text-slate-400">
            <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-900 px-3 py-2 rounded-lg">
              <Mail className="w-3.5 h-3.5 text-neon-blue" />
              <span>{EMAIL_ADDRESS}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-900 px-3 py-2 rounded-lg">
              <Cpu className="w-3.5 h-3.5 text-neon-purple" />
              <span>Available for Client Contracts & Full-time Roles</span>
            </div>
          </div>
        </div>

        {/* Console Terminal Panel */}
        <div className="glass-panel border-slate-800 rounded-2xl p-4 flex-1 flex flex-col justify-between font-mono bg-slate-950/90 text-left min-h-[160px]">
          <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3 text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neon-blue animate-pulse" />
              <span>transmission_terminal.sh</span>
            </div>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500/30" />
              <span className="w-2 h-2 rounded-full bg-amber-500/30" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/30" />
            </div>
          </div>

          <div className="flex-1 text-[11px] text-slate-400 flex flex-col gap-1.5 h-24 overflow-y-auto pl-1 no-scrollbar">
            <div className="text-slate-600">// Terminal initialized. Awaiting user input.</div>
            {consoleLogs.map((log, index) => (
              <div key={index} className="text-emerald-400 leading-normal font-mono animate-fade-in">
                {log}
              </div>
            ))}
          </div>

          <div className="mt-2 border-t border-slate-900 pt-2 flex items-center justify-between text-[9px] text-slate-500 font-mono">
            <span>Tunnel: TLS_AES_256</span>
            <span className="text-neon-blue animate-pulse">SYSTEM SECURE</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Futuristic Contact Form */}
      <div className="lg:col-span-7">
        <div className="glass-panel rounded-2xl p-6 md:p-8 text-left relative overflow-hidden h-full flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {formStatus !== "success" ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleFormSubmit} 
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-[#050510]/80 border border-slate-800 focus:border-neon-blue rounded-xl px-4 py-3 text-[13px] text-white font-sans outline-none w-full transition-all duration-300 placeholder:text-slate-600"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="bg-[#050510]/80 border border-slate-800 focus:border-neon-blue rounded-xl px-4 py-3 text-[13px] text-white font-sans outline-none w-full transition-all duration-300 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Project Type Dropdown */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                    PROJECT CATEGORY
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="bg-[#050510]/80 border border-slate-800 focus:border-neon-blue rounded-xl px-4 py-3 text-[13px] text-white font-sans outline-none w-full transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="Full Stack Web">Full Stack Web (MERN / SERN)</option>
                    <option value="Mobile Development">Mobile Application (Flutter)</option>
                    <option value="Backend Systems">APIs & Database Engineering</option>
                    <option value="Business Application">Custom Workflow Business Tool</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your idea or project scope..."
                    className="bg-[#050510]/80 border border-slate-800 focus:border-neon-blue rounded-xl px-4 py-3 text-[13px] text-white font-sans outline-none w-full transition-all duration-300 resize-none placeholder:text-slate-600"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-3 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange text-white font-mono text-[12px] font-bold tracking-wider uppercase rounded-xl shadow-lg border border-transparent hover:brightness-110 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {formStatus === "sending" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND TRANSMISSION</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-form"
                className="flex flex-col items-center justify-center text-center py-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-[22px] font-bold text-white tracking-wide">
                  TRANSMISSION TRANSMITTED
                </h3>
                <p className="text-[13px] text-slate-400 mt-2 max-w-md font-sans leading-relaxed">
                  Excellent! Your package was compiled and dispatched. Aasip's inbox will index your message immediately.
                </p>
                
                <button
                  onClick={handleResetForm}
                  className="mt-6 px-6 py-2 border border-slate-800 hover:border-neon-blue hover:text-white rounded-xl text-[11px] font-mono tracking-wider uppercase bg-slate-950 text-slate-400 transition-all duration-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* BOTTOM: Professional networks floating layout */}
      <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel border-slate-900 rounded-xl p-3.5 flex items-center justify-between transition-all duration-300 ${link.color} group`}
          >
            <div className="flex items-center gap-3">
              <div className="text-slate-400 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <div className="text-left">
                <span className="text-[12px] font-bold text-white block leading-tight">
                  {link.name}
                </span>
                <span className="text-[7.5px] text-slate-500 font-mono tracking-wider block">
                  {link.badge}
                </span>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-neon-blue group-hover:shadow-[0_0_6px_#00f0ff] transition-all" />
          </a>
        ))}
      </div>

    </div>
  );
}
