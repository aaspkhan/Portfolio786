import React, { useState } from "react";
import { motion } from "motion/react";
import { Laptop, Code2, Database, Smartphone, Terminal, Cpu } from "lucide-react";

export default function Workspace3D() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  const floatingCards = [
    {
      id: "mern",
      title: "MERN Stack",
      desc: "MongoDB • Express • React • Node",
      icon: <Database className="w-5 h-5 text-neon-blue" />,
      color: "border-neon-blue/30 shadow-neon-blue/5",
      pos: "top-[10%] left-[-5%] lg:left-[-15%]",
      z: "translate-z-[40px]",
    },
    {
      id: "sern",
      title: "SERN Stack",
      desc: "SQL • Express • React • Node",
      icon: <Cpu className="w-5 h-5 text-neon-purple" />,
      color: "border-neon-purple/30 shadow-neon-purple/5",
      pos: "bottom-[15%] left-[-10%] lg:left-[-20%]",
      z: "translate-z-[60px]",
    },
    {
      id: "flutter",
      title: "Flutter",
      desc: "Beautiful Cross-Platform Apps",
      icon: <Smartphone className="w-5 h-5 text-neon-orange" />,
      color: "border-neon-orange/30 shadow-neon-orange/5",
      pos: "top-[15%] right-[-5%] lg:right-[-15%]",
      z: "translate-z-[50px]",
    },
    {
      id: "backend",
      title: "Scalable APIs",
      desc: "REST APIs & Databases",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/30 shadow-emerald-500/5",
      pos: "bottom-[20%] right-[-10%] lg:right-[-20%]",
      z: "translate-z-[30px]",
    },
  ];

  return (
    <div
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center perspective-1000 preserve-3d py-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="workspace-3d-container"
    >
      {/* 3D Dynamic Ambient Lights & Floor */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 filter blur-[80px] pointer-events-none transform translate-y-24 translate-z-[-100px]" />

      {/* Main 3D Perspective Stage */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center preserve-3d"
        animate={{
          rotateY: mouseOffset.x,
          rotateX: -mouseOffset.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Holographic Hologram Rings Base */}
        <div className="absolute bottom-[10%] w-72 h-36 border border-neon-blue/20 rounded-full transform -rotate-x-[75deg] scale-[1.3] flex items-center justify-center preserve-3d">
          <div className="absolute w-[80%] h-[80%] border border-dashed border-neon-purple/30 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[50%] h-[50%] border border-neon-orange/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>

        {/* Floating 3D Laptop Illustration */}
        <div className="relative w-64 h-48 preserve-3d transform -rotate-x-[15deg] rotate-y-[10deg] animate-float-slow">
          
          {/* Neon shadow floor glow */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[85%] h-5 bg-neon-blue/20 rounded-full filter blur-md transform -rotate-x-[90deg] translate-z-[-20px]" />

          {/* Laptop Base (Horizontal segment) */}
          <div className="absolute bottom-0 left-0 w-64 h-4 bg-slate-900 border-t border-r border-l border-slate-700/60 rounded-b-md transform -rotate-x-[85deg] origin-bottom preserve-3d shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            {/* Keyboard Grid Indicator */}
            <div className="absolute inset-x-4 top-1 bottom-1 bg-slate-950/80 rounded border border-slate-800/80 p-0.5 flex flex-col justify-between">
              <div className="h-1 bg-neon-blue/20 rounded w-full animate-pulse" />
              <div className="flex gap-0.5">
                <div className="h-1 bg-neon-purple/30 rounded w-1/3" />
                <div className="h-1 bg-neon-blue/30 rounded w-1/2" />
                <div className="h-1 bg-neon-orange/30 rounded w-1/6" />
              </div>
              <div className="flex gap-0.5">
                <div className="h-1 bg-slate-800 rounded w-full" />
              </div>
            </div>
            {/* Front indicator LED */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-neon-blue animate-pulse shadow-[0_0_8px_#00f0ff]" />
          </div>

          {/* Laptop Screen (Vertical angled segment) */}
          <div className="absolute bottom-0 left-0 w-64 h-44 bg-slate-950 border border-slate-700/80 rounded-t-lg transform origin-bottom rotate-x-[10deg] preserve-3d shadow-[-2px_-10px_20px_rgba(0,0,0,0.5)]">
            {/* Screen border bezel */}
            <div className="absolute inset-1.5 bg-[#07070d] rounded-t-md overflow-hidden flex flex-col border border-slate-800/40 p-2">
              
              {/* Screen Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-1 mb-1 text-[8px] text-slate-500 font-mono">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[7px] text-slate-400 pl-1">aasip_workspace.sh</span>
                </div>
                <div className="flex items-center gap-1">
                  <Laptop className="w-2.5 h-2.5 text-neon-blue" />
                  <span className="text-[7px] text-neon-blue">Active</span>
                </div>
              </div>

              {/* IDE Code Simulation inside the 3D screen */}
              <div className="flex-1 font-mono text-[7ch] text-slate-400 leading-snug overflow-hidden text-left pl-1">
                <div className="text-neon-purple font-semibold">&gt; npm run dev</div>
                <div className="text-slate-500">Ready in 250ms</div>
                <div className="text-emerald-400">&gt; Flutter app launched</div>
                <div className="text-slate-400 mt-1">const developer = &#123;</div>
                <div className="pl-2 text-slate-300">name: &apos;Aasip Khan H&apos;,</div>
                <div className="pl-2 text-neon-blue">builds: [&apos;Web&apos;, &apos;Mobile&apos;],</div>
                <div className="pl-2 text-neon-orange">ready: true</div>
                <div className="text-slate-400">&#125;;</div>
                <div className="text-slate-600 animate-pulse mt-0.5">_</div>
              </div>

              {/* Screen Base Glow reflection */}
              <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-neon-blue/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Subtle logo emblem on outer shell */}
            <div className="absolute -z-10 inset-0 bg-slate-900 border border-slate-800 rounded-t-lg flex items-center justify-center transform scale-x-[-1]">
              <Code2 className="w-8 h-8 text-slate-700/60" />
            </div>
          </div>
        </div>

        {/* Interactive Floating Tech Glass Cards */}
        {floatingCards.map((card, idx) => {
          const isHovered = hoveredCard === card.id;
          return (
            <motion.div
              key={card.id}
              className={`absolute ${card.pos} ${card.z} w-44 rounded-xl border p-3 glass-panel cursor-pointer shadow-lg`}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              animate={{
                scale: isHovered ? 1.08 : 1,
                z: isHovered ? 80 : 40,
                borderColor: isHovered ? "rgba(0,240,255,0.4)" : "rgba(255,255,255,0.08)",
                boxShadow: isHovered 
                  ? "0 10px 25px -5px rgba(0,240,255,0.25)" 
                  : "0 4px 15px -3px rgba(0,0,0,0.3)",
                y: [0, -6, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 4 + idx,
                  ease: "easeInOut"
                },
                scale: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {card.icon}
                <h4 className="text-[11px] font-bold tracking-wider text-white uppercase">
                  {card.title}
                </h4>
              </div>
              <p className="text-[10px] text-slate-400 text-left font-mono leading-relaxed">
                {card.desc}
              </p>
              
              {/* Card visual accent bar */}
              <div className={`mt-2 h-0.5 w-8 rounded bg-gradient-to-r ${
                card.id === "mern" ? "from-neon-blue to-cyan-400" :
                card.id === "sern" ? "from-neon-purple to-pink-500" :
                card.id === "flutter" ? "from-neon-orange to-amber-500" :
                "from-emerald-500 to-teal-400"
              }`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
