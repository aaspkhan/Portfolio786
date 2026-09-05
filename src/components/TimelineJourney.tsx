import { motion } from "motion/react";
import { Lightbulb, Layers, Code, PlayCircle, CloudLightning, CheckCircle } from "lucide-react";
import { TimelineStep } from "../types";

export default function TimelineJourney() {
  const steps: TimelineStep[] = [
    {
      id: "idea",
      title: "IDEA",
      subtitle: "Brainstorm & Architecture",
      description: "Deconstructing real-world problems. Mapping database schemas, API structures, and platform architecture before coding.",
    },
    {
      id: "design",
      title: "DESIGN",
      subtitle: "UI & Interactive UX",
      description: "Crafting beautiful, accessible layouts. Defining font pairings, light/dark ratios, and high-performance interactive states.",
    },
    {
      id: "develop",
      title: "DEVELOP",
      subtitle: "MERN • SERN • Flutter",
      description: "Writing clean, modular TypeScript and Dart code. Implementing scalable API endpoints, secure auth, and robust state engines.",
    },
    {
      id: "test",
      title: "TEST",
      subtitle: "Validation & Tolerance",
      description: "End-to-end integration tests. Stress testing endpoints, catching edge-cases, and ensuring zero-crash mobile builds.",
    },
    {
      id: "deploy",
      title: "DEPLOY",
      subtitle: "Containers & Store Releases",
      description: "Deploying web products to fast cloud servers and publishing cross-platform mobile apps to Google Play.",
    },
    {
      id: "production",
      title: "PRODUCTION",
      subtitle: "Real Users & Scalable Growth",
      description: "Monitoring live environments. Maintaining active nodes, secure databases, and zero-downtime operational availability.",
    },
  ];

  const getStepIcon = (id: string, activeClass: string) => {
    switch (id) {
      case "idea": return <Lightbulb className={activeClass} />;
      case "design": return <Layers className={activeClass} />;
      case "develop": return <Code className={activeClass} />;
      case "test": return <PlayCircle className={activeClass} />;
      case "deploy": return <CloudLightning className={activeClass} />;
      case "production": return <CheckCircle className={activeClass} />;
      default: return <Code className={activeClass} />;
    }
  };

  const getStepColorGlow = (id: string) => {
    switch (id) {
      case "idea": return "shadow-[0_0_15px_rgba(0,240,255,0.3)] border-neon-blue";
      case "design": return "shadow-[0_0_15px_rgba(157,0,255,0.3)] border-neon-purple";
      case "develop": return "shadow-[0_0_15px_rgba(255,92,0,0.3)] border-neon-orange";
      case "test": return "shadow-[0_0_15px_rgba(52,211,153,0.3)] border-emerald-400";
      case "deploy": return "shadow-[0_0_15px_rgba(0,240,255,0.3)] border-neon-blue";
      case "production": return "shadow-[0_0_15px_rgba(157,0,255,0.3)] border-neon-purple";
      default: return "";
    }
  };

  const getStepLabelColor = (id: string) => {
    switch (id) {
      case "idea": return "text-neon-blue";
      case "design": return "text-neon-purple";
      case "develop": return "text-neon-orange";
      case "test": return "text-emerald-400";
      case "deploy": return "text-neon-blue";
      case "production": return "text-neon-purple";
      default: return "text-white";
    }
  };

  return (
    <div className="relative w-full py-12 px-2 max-w-5xl mx-auto">
      {/* Background Pipeline Track (Large Screens: horizontal, Mobile: vertical) */}
      <div className="absolute left-[33px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-orange opacity-25" />
      
      {/* Animated compiled packet pulsing down the timeline */}
      <motion.div 
        className="absolute left-[31px] md:left-1/2 md:-translate-x-[3px] w-2 h-8 rounded-full bg-gradient-to-b from-neon-blue to-neon-orange z-10 filter blur-[1px]"
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="flex flex-col gap-10 md:gap-14 relative z-10">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={step.id}
              className={`flex flex-row md:items-center w-full ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Left-side block on desktop, hidden on mobile in favor of standard alignment */}
              <div className="hidden md:block md:w-[45%] text-right px-6">
                {isEven ? (
                  <div>
                    <h4 className={`text-[12px] font-bold font-mono tracking-widest ${getStepLabelColor(step.id)}`}>
                      {step.subtitle}
                    </h4>
                    <p className="text-[13px] text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Central Glowing Icon Node */}
              <div className="relative flex justify-center items-start pt-1 md:pt-0 md:items-center w-[60px] md:w-[10%]">
                <motion.div
                  className={`w-11 h-11 rounded-xl bg-slate-950 border-2 flex items-center justify-center relative z-10 ${getStepColorGlow(step.id)}`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  {getStepIcon(step.id, `w-5 h-5 ${getStepLabelColor(step.id)}`)}
                  
                  {/* Subtle index tag */}
                  <span className="absolute -bottom-1 -right-1 text-[7px] font-mono bg-slate-900 border border-slate-800 text-slate-500 rounded px-1 scale-80 font-bold">
                    0{idx + 1}
                  </span>
                </motion.div>
              </div>

              {/* Right-side block (Displays on mobile for all items, and on desktop for odd items) */}
              <div className="flex-1 md:w-[45%] md:flex-initial text-left px-4 md:px-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-[18px] font-bold tracking-wider text-white">
                    {step.title}
                  </h3>
                  <span className="text-[8px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-slate-500 uppercase md:hidden">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Desktop layout check */}
                {isEven ? (
                  <div className="md:hidden">
                    <h4 className={`text-[12px] font-bold font-mono tracking-wider ${getStepLabelColor(step.id)}`}>
                      {step.subtitle}
                    </h4>
                    <p className="text-[13px] text-slate-400 font-sans mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className={`text-[12px] font-bold font-mono tracking-wider ${getStepLabelColor(step.id)}`}>
                      {step.subtitle}
                    </h4>
                    <p className="text-[13px] text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
