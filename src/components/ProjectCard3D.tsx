import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Database, Cpu, Smartphone, Shield, CheckCircle, ChefHat, Clock, Layers, Flame, FileText, ArrowRight } from "lucide-react";
import { Project } from "../types";

interface Props {
  project: Project;
  onViewClick: (project: Project) => void;
  key?: string;
}

export default function ProjectCard3D({ project, onViewClick }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  
  // Parallax shifts for child layers
  const translateYInner = useSpring(useTransform(y, [-0.5, 0.5], [-5, 5]), springConfig);
  const translateXInner = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Map to coordinate range [-0.5, 0.5]
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Special Visual Dashboards inside the project card
  const renderDashboardPreview = () => {
    if (project.interactiveDashboardType === "restaurant") {
      return (
        <div className="w-full h-36 bg-[#040409]/90 border border-slate-800/80 rounded-lg p-2.5 font-mono text-[9px] relative overflow-hidden flex flex-col gap-1.5">
          <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
            <span className="text-neon-purple font-bold tracking-wider flex items-center gap-1">
              <ChefHat className="w-3 h-3" /> HOTEL WORKFLOW
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded text-[7px] animate-pulse">
              LIVE CONSOLE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="bg-slate-950/60 p-1 rounded border border-slate-900 text-left">
              <span className="text-[7px] text-slate-500 block">ORDERS</span>
              <span className="text-white font-bold text-[10px]">14 Active</span>
            </div>
            <div className="bg-slate-950/60 p-1 rounded border border-slate-900 text-left">
              <span className="text-[7px] text-slate-500 block">AVAILABILITY</span>
              <span className="text-neon-blue font-bold text-[10px]">96% Stock</span>
            </div>
            <div className="bg-slate-950/60 p-1 rounded border border-slate-900 text-left">
              <span className="text-[7px] text-slate-500 block">CUSTOMERS</span>
              <span className="text-neon-orange font-bold text-[10px]">38 Queue</span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col gap-1 mt-0.5">
            <div className="flex justify-between items-center text-[7px] text-slate-400 py-0.5 px-1 bg-slate-950/40 rounded border border-slate-900/60">
              <span className="text-slate-300">#1092 - Spicy Paneer Tikka</span>
              <span className="text-amber-400 animate-pulse flex items-center gap-0.5"><Clock className="w-2 h-2" /> Preparing</span>
            </div>
            <div className="flex justify-between items-center text-[7px] text-slate-400 py-0.5 px-1 bg-slate-950/40 rounded border border-slate-900/60">
              <span className="text-slate-300">#1091 - Hyd Dum Biryani</span>
              <span className="text-emerald-400 flex items-center gap-0.5"><CheckCircle className="w-2 h-2" /> Ready</span>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-neon-purple/5 rounded-full filter blur-md pointer-events-none" />
        </div>
      );
    }

    if (project.interactiveDashboardType === "safe-serving") {
      return (
        <div className="w-full h-36 bg-[#040409]/90 border border-slate-800/80 rounded-lg p-2.5 font-mono text-[9px] relative overflow-hidden flex flex-col gap-1.5">
          <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
            <span className="text-neon-blue font-bold tracking-wider flex items-center gap-1">
              <Shield className="w-3 h-3" /> SAFE SERVING NODE
            </span>
            <span className="text-slate-500 text-[8px]">API: SECURE</span>
          </div>

          <div className="flex-1 grid grid-cols-5 gap-1.5 items-end h-12 py-1">
            {[30, 45, 60, 35, 75, 50, 80].map((val, idx) => (
              <div key={idx} className="bg-slate-950 rounded h-full relative flex items-end overflow-hidden border border-slate-900">
                <motion.div 
                  className={`w-full rounded-t ${idx === 4 || idx === 6 ? 'bg-neon-orange' : 'bg-neon-blue'}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ delay: idx * 0.1, duration: 1 }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[7.5px] text-slate-400 mt-1">
            <div className="flex items-center gap-1 text-emerald-400">
              <Flame className="w-3 h-3" />
              <span>Temp: 64°C (Safe)</span>
            </div>
            <div className="flex items-center gap-1 text-neon-blue">
              <Layers className="w-3 h-3" />
              <span>System active</span>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 w-20 h-20 bg-neon-blue/5 rounded-full filter blur-md pointer-events-none" />
        </div>
      );
    }

    // Default static card visual fallback (Seil Connect layout)
    return (
      <div className="w-full h-36 bg-gradient-to-br from-[#0c0c16] to-[#040409] border border-slate-800/80 rounded-lg p-3 relative overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue via-transparent to-transparent" />
        
        <div className="flex justify-between items-start">
          <span className="text-[7.5px] text-neon-blue font-mono tracking-wider bg-neon-blue/10 border border-neon-blue/20 px-1.5 py-0.5 rounded-full uppercase">
            Flutter Engine
          </span>
          <Smartphone className="w-4 h-4 text-slate-500" />
        </div>

        <div className="flex flex-col gap-1 text-left z-10">
          <h4 className="text-[14px] font-bold text-white tracking-wide leading-tight">Seil Connect Mobile</h4>
          <p className="text-[9px] text-slate-400 font-mono">Platform target: Android & Google Play</p>
        </div>

        {/* Small simulated screen edge lines */}
        <div className="absolute right-3 bottom-3 w-16 h-12 rounded border border-slate-800 flex flex-col p-1 gap-1">
          <div className="h-1 bg-neon-blue/30 rounded w-full" />
          <div className="h-1 bg-neon-purple/20 rounded w-2/3" />
          <div className="h-1 bg-slate-800 rounded w-1/2" />
        </div>

        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-neon-blue/5 rounded-full filter blur-xl pointer-events-none" />
      </div>
    );
  };

  const isMoreProjectsCard = project.id === "more";

  if (isMoreProjectsCard) {
    return (
      <motion.div
        className="relative w-full aspect-square max-w-[360px] mx-auto rounded-2xl border border-dashed border-slate-800 p-6 flex flex-col items-center justify-center text-center bg-[#050510]/30 hover:border-neon-purple/50 transition-all duration-300 group"
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-16 h-16 rounded-full border border-dashed border-slate-700 flex items-center justify-center mb-4 group-hover:border-neon-purple/50 group-hover:scale-110 transition-all duration-300">
          <Layers className="w-6 h-6 text-slate-500 group-hover:text-neon-purple transition-all" />
        </div>
        <h3 className="text-[18px] font-bold text-slate-300 group-hover:text-white transition-all duration-300">
          {project.name}
        </h3>
        <p className="text-[12px] text-slate-500 font-mono mt-1.5">
          More production-ready architectures and systems are currently in development.
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-[11px] text-neon-purple font-mono opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <span>STAY TUNED</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full rounded-2xl p-5 border border-slate-800/60 glass-panel-interactive perspective-1000 preserve-3d cursor-pointer text-left select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      animate={{
        z: isHovered ? 20 : 0,
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(157, 0, 255, 0.15), 0 0 25px rgba(0, 240, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.01)" 
          : "0 10px 30px -15px rgba(0,0,0,0.5)",
      }}
      style={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
    >
      {/* Absolute Dynamic Neon Edge Line Highlight */}
      <div className={`absolute top-0 inset-x-0 h-[2px] rounded-t-2xl transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange opacity-100" : "bg-transparent opacity-0"
      }`} />

      {/* Top Section with Status and Badges */}
      <div className="flex flex-col gap-2 mb-4">
        {project.status && (
          <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono tracking-wider text-neon-orange uppercase bg-neon-orange/10 border border-neon-orange/20 px-2 py-0.5 rounded-md w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-ping" />
            <span>{project.status}</span>
          </div>
        )}
        <h3 className="text-[20px] font-bold text-white tracking-wide mt-1 group-hover:text-neon-blue transition-colors duration-300">
          {project.name}
        </h3>
      </div>

      {/* Embedded High-Fidelity Animated Panel Mockup with Parallax */}
      <motion.div 
        className="my-4 relative z-10 rounded-lg overflow-hidden border border-slate-900"
        style={{
          x: translateXInner,
          y: translateYInner,
        }}
      >
        {renderDashboardPreview()}
      </motion.div>

      {/* Description Content */}
      <p className="text-[13px] text-slate-300 leading-relaxed font-sans mb-5 font-light">
        {project.description}
      </p>

      {/* Tech badges section */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-[10px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800/80 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Button Action */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onViewClick(project);
        }}
        className={`w-full py-2.5 rounded-xl text-[12px] font-bold font-mono tracking-wider uppercase border flex items-center justify-center gap-2 transition-all duration-300 ${
          isHovered 
            ? "bg-gradient-to-r from-neon-blue to-neon-purple border-transparent text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]" 
            : "bg-slate-950 border-slate-800 text-slate-300 hover:text-white"
        }`}
        whileTap={{ scale: 0.98 }}
      >
        <span>{project.buttonText}</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </motion.button>
    </motion.div>
  );
}
