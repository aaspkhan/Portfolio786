import React, { useState } from "react";
import { motion } from "motion/react";
import { Smartphone, Shield, Wifi, Battery, Play, Menu, Heart, Users, Activity } from "lucide-react";

export default function PhoneMockup3D() {
  const [hovered, setHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = (e.clientY - rect.top - rect.height / 2) / 8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      className="relative w-full aspect-[3/4] max-w-[340px] mx-auto flex items-center justify-center perspective-1000 preserve-3d cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      id="phone-3d-mockup"
    >
      {/* Underlying floor glow */}
      <div className="absolute bottom-[2%] w-48 h-10 bg-neon-blue/20 rounded-full filter blur-md transform -rotate-x-[80deg] translate-z-[-50px] animate-pulse" />

      <motion.div
        className="relative w-64 h-[440px] preserve-3d"
        animate={{
          rotateY: hovered ? mouseOffset.x * 1.5 : [0, 15, 0, -15, 0],
          rotateX: hovered ? -mouseOffset.y * 1.5 : [8, 4, 8, 12, 8],
          y: hovered ? -10 : [0, -12, 0],
        }}
        transition={{
          rotateY: hovered ? { type: "spring", stiffness: 100, damping: 20 } : { repeat: Infinity, duration: 12, ease: "easeInOut" },
          rotateX: hovered ? { type: "spring", stiffness: 100, damping: 20 } : { repeat: Infinity, duration: 8, ease: "easeInOut" },
          y: hovered ? { type: "spring", stiffness: 150, damping: 15 } : { repeat: Infinity, duration: 5, ease: "easeInOut" },
        }}
      >
        {/* Physical Phone Outer Case with soft glow edges */}
        <div className="absolute inset-0 bg-slate-950 border-[3.5px] border-slate-800 rounded-[32px] shadow-[0_20px_50px_rgba(0,240,255,0.15),_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-1.5 preserve-3d">
          
          {/* Edge reflection glass shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[28px] z-20" />

          {/* Top Notch Camera Element */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3.5 border border-slate-800/50">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <div className="w-8 h-1 bg-slate-800 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
          </div>

          {/* Seil Connect Screen UI Content */}
          <div className="flex-1 rounded-[24px] bg-[#050510] overflow-hidden flex flex-col relative border border-slate-900 z-10 font-sans text-left">
            
            {/* Phone Top Status Bar */}
            <div className="h-7 pt-2 px-4 flex justify-between items-center text-[8px] text-slate-400 font-mono z-20">
              <span>10:10</span>
              <div className="flex items-center gap-1">
                <Wifi className="w-2 h-2 text-neon-blue" />
                <Battery className="w-2.5 h-2.5 text-emerald-400" />
              </div>
            </div>

            {/* App Header Section */}
            <div className="px-3 py-2 border-b border-slate-900/80 flex items-center justify-between bg-slate-950/60 backdrop-blur-md z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-bold text-[9px] text-white">
                  S
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-tight text-white leading-tight">Seil Connect</h4>
                  <span className="text-[7px] text-neon-blue/80 font-mono">ONLINE</span>
                </div>
              </div>
              <Menu className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* App Internal Body (Scrollable Simulated View) */}
            <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-y-auto no-scrollbar pb-6 z-10">
              
              {/* Active Connection Stat Panel */}
              <div className="glass-panel border-neon-blue/20 rounded-xl p-2.5 flex items-center justify-between">
                <div>
                  <span className="text-[7px] text-slate-500 tracking-wider font-mono">CONNECTION SYSTEM</span>
                  <h5 className="text-[11px] font-bold text-white mt-0.5">Secure Tunnel</h5>
                </div>
                <div className="w-7 h-7 rounded-full bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30">
                  <Shield className="w-3.5 h-3.5 text-neon-blue" />
                </div>
              </div>

              {/* Connected Devices (Interactive nodes graph mockup) */}
              <div className="glass-panel rounded-xl p-2 flex flex-col gap-1.5">
                <span className="text-[6.5px] text-slate-400 font-mono tracking-wider">ACTIVE NODES</span>
                <div className="relative h-20 bg-slate-950/80 rounded-lg border border-slate-900 overflow-hidden flex items-center justify-center">
                  
                  {/* Neon node connections */}
                  <div className="absolute w-12 h-12 rounded-full border border-dashed border-neon-purple/40 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute w-6 h-6 rounded-full border border-neon-blue/40 animate-[spin_5s_linear_infinite_reverse]" />
                  
                  {/* Labeled nodes */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_6px_#00f0ff]" />
                  <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_#9d00ff]" />
                  <div className="absolute top-8 right-6 w-1 h-1 rounded-full bg-neon-orange shadow-[0_0_4px_#ff5c00]" />
                  <div className="absolute center w-3 h-3 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Activity className="w-1.5 h-1.5 text-white" />
                  </div>

                  <span className="absolute bottom-1 left-2 text-[6px] text-slate-500 font-mono">Node ID: SC-4921</span>
                </div>
              </div>

              {/* Modern Workflow Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="glass-panel rounded-lg p-2 flex flex-col justify-between">
                  <span className="text-[6px] text-slate-500 font-mono">DEVICES</span>
                  <div className="flex items-end justify-between mt-1">
                    <span className="text-[12px] font-bold text-white leading-none">05</span>
                    <Users className="w-2.5 h-2.5 text-neon-purple" />
                  </div>
                </div>
                <div className="glass-panel rounded-lg p-2 flex flex-col justify-between">
                  <span className="text-[6px] text-slate-500 font-mono">INTEGRATION</span>
                  <div className="flex items-end justify-between mt-1">
                    <span className="text-[9px] font-bold text-emerald-400 uppercase leading-none">Flutter</span>
                    <Play className="w-2.5 h-2.5 text-neon-orange rotate-90" />
                  </div>
                </div>
              </div>

              {/* Status Update Panel */}
              <div className="mt-1 bg-slate-950/90 rounded-lg p-2 border border-slate-900 text-[7px] font-mono text-slate-400 flex flex-col gap-1">
                <div className="flex justify-between text-[6.5px]">
                  <span className="text-neon-orange">SYSTEM MESSAGE</span>
                  <span>10:10:13</span>
                </div>
                <p className="leading-snug">Seil Connect engine successfully initialized in production environment.</p>
              </div>

            </div>

            {/* Smartphone Bottom Control Line */}
            <div className="absolute bottom-1 inset-x-0 h-4 flex items-center justify-center z-20">
              <div className="w-20 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Glowing neon overlay inside phone frame */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neon-blue/15 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
