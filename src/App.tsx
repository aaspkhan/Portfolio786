import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Smartphone, 
  GitBranch, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  ExternalLink,
  Layers,
  Flame,
  Globe,
  Settings
} from "lucide-react";

import ParticleBackground from "./components/ParticleBackground";
import HeroVideo from "./components/HeroVideo";
import Workspace3D from "./components/Workspace3D";
import PhoneMockup3D from "./components/PhoneMockup3D";
import ProjectCard3D from "./components/ProjectCard3D";
import TimelineJourney from "./components/TimelineJourney";
import ContactInterface, { 
  GITHUB_URL, 
  LINKEDIN_URL, 
  GOOGLE_PLAY_URL 
} from "./components/ContactInterface";
import NavigationBar from "./components/NavigationBar";
import { Project, SkillGroup, Service } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkillTab, setActiveSkillTab] = useState("all");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler for buttons
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Projects data
  const projects: Project[] = [
    {
      id: "seil-connect",
      name: "Seil Connect",
      status: "PRODUCTION READY • AVAILABLE ON GOOGLE PLAY",
      description: "Seil Connect is a production-ready mobile application built with Flutter, designed to provide a practical and modern mobile experience.",
      technologies: ["Flutter", "Dart", "Android", "Cross-Platform"],
      badges: ["Production Ready", "Flutter", "Android", "Google Play"],
      buttonText: "VIEW PROJECT",
      link: GOOGLE_PLAY_URL,
      interactiveDashboardType: "placeholder",
    },
    {
      id: "hotel-food-order",
      name: "Hotel Food Order Management System",
      description: "A full-stack web-based food ordering and management platform designed for hotels and restaurants. The system manages food items, availability, customer orders, authentication, and order workflows.",
      technologies: ["MERN Stack", "SERN Stack", "React", "Node.js", "REST API"],
      buttonText: "VIEW PROJECT",
      link: "#",
      interactiveDashboardType: "restaurant",
    },
    {
      id: "safe-serving",
      name: "Safe Serving System",
      description: "A digital system designed to improve food service management and provide a safer, more organized serving workflow.",
      technologies: ["Full Stack", "React", "Node.js", "Database", "APIs"],
      buttonText: "VIEW PROJECT",
      link: "#",
      interactiveDashboardType: "safe-serving",
    },
    {
      id: "more",
      name: "More projects are coming...",
      description: "",
      technologies: [],
      buttonText: "",
    }
  ];

  // Skills divided into groups
  const skillGroups: SkillGroup[] = [
    {
      category: "frontend",
      skills: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
      ]
    },
    {
      category: "backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Authentication" },
        { name: "Server-side development" },
      ]
    },
    {
      category: "databases",
      skills: [
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "Supabase" },
      ]
    },
    {
      category: "mobile",
      skills: [
        { name: "Flutter" },
        { name: "Dart" },
        { name: "Android" },
        { name: "Cross-platform development" },
      ]
    },
    {
      category: "other",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "API integration" },
        { name: "Deployment" },
        { name: "Cloud technologies" },
      ]
    }
  ];

  // Get filtered skills based on tab
  const getFilteredSkills = () => {
    if (activeSkillTab === "all") {
      return skillGroups.flatMap(group => group.skills.map(skill => ({ ...skill, category: group.category })));
    }
    const found = skillGroups.find(group => group.category === activeSkillTab);
    return found ? found.skills.map(skill => ({ ...skill, category: found.category })) : [];
  };

  // Services data
  const services: Service[] = [
    {
      id: "web-dev",
      number: "01",
      title: "Full Stack Web Development",
      description: "Modern, scalable web applications designed cleanly from frontend user interaction to fast backend logic.",
    },
    {
      id: "mobile-dev",
      number: "02",
      title: "Mobile App Development",
      description: "Beautiful, responsive cross-platform native mobile applications crafted with high-performance Flutter.",
    },
    {
      id: "backend-dev",
      number: "03",
      title: "Backend Development",
      description: "Secure APIs, robust token-based authentication protocols, structured databases, and scalable server systems.",
    },
    {
      id: "business-apps",
      number: "04",
      title: "Business Applications",
      description: "Tailor-made, custom digital applications engineered specifically around real-world commercial workflows.",
    },
    {
      id: "integration",
      number: "05",
      title: "Database & API Integration",
      description: "Highly reliable, optimized databases and external service integrations to empower connected platforms.",
    },
  ];

  const handleProjectView = (project: Project) => {
    if (project.id === "seil-connect") {
      window.open(GOOGLE_PLAY_URL, "_blank");
    } else {
      // For demo projects, notify via inline state or simulated logs
      const el = document.getElementById("contact");
      if (el) {
        handleScrollTo("contact");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-neon-blue/30 selection:text-white">
      {/* High-Performance Canvas Particle System */}
      <ParticleBackground />

      {/* Global Scroll-Locked Cinematic Background Video */}
      <HeroVideo />

      {/* Immersive UI Background Blurs and Dot Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[30%] bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      {/* Floating Transparent Header Navbar */}
      <NavigationBar activeSection={activeSection} />

      {/* ==========================================================
          1. HERO SECTION
          ========================================================== */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Hero Interactive Overlay */}
        <div className="relative w-full max-w-5xl mx-auto px-6 z-20 text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Elegant futuristic eyebrow label */}
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-[10px] font-bold font-mono tracking-[0.2em] text-neon-blue uppercase animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
              <span>PORTFOLIO DESKTOP ACTIVE</span>
            </div>

            <h2 className="text-[13px] font-bold font-mono tracking-[0.3em] text-slate-400 uppercase mb-2">
              HELLO, I&apos;M
            </h2>
            
            <h1 className="text-[42px] sm:text-[58px] lg:text-[76px] font-extrabold tracking-tight text-white leading-none uppercase select-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">AASIP KHAN H</span>
            </h1>

            <h3 className="text-[14px] sm:text-[18px] lg:text-[22px] font-bold font-mono tracking-wider text-neon-blue uppercase mt-4 mb-6">
              FULL STACK & MOBILE APP DEVELOPER
            </h3>

            <p className="text-[14px] sm:text-[16px] text-slate-400 max-w-xl mx-auto font-sans font-light leading-relaxed mb-8">
              I build production-ready web applications, backend systems, and beautiful cross-platform mobile experiences.
            </p>

            {/* Badges strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mb-10">
              {["MERN", "SERN", "FLUTTER", "SUPABASE", "REST APIs", "DATABASES"].map((badge) => (
                <span 
                  key={badge} 
                  className="text-[9.5px] font-bold font-mono tracking-wider text-white bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-neon-purple/40 hover:bg-slate-900/80 transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <motion.button
                onClick={() => handleScrollTo("projects")}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-mono text-[12px] font-bold tracking-wider uppercase rounded-xl hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 border border-slate-800 hover:border-neon-purple text-slate-300 hover:text-white font-mono text-[12px] font-bold tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <span>LET&apos;S CONNECT</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Dynamic Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
              EXPLORE MY WORK
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-neon-blue" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================================
          2. ABOUT ME SECTION
          ========================================================== */}
      <section 
        id="about" 
        className="relative py-24 md:py-32 border-t border-slate-900 bg-radial-glow overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#020617]/20 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text description */}
            <motion.div 
              className="lg:col-span-7 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-neon-blue" />
                <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-blue uppercase">INTRODUCTION</span>
              </div>
              
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white mb-6 uppercase">
                WHO AM I?
              </h2>

              <div className="space-y-4 text-slate-300 text-[14px] sm:text-[15px] leading-relaxed font-light font-sans">
                <p>
                  I&apos;m <strong className="text-white font-semibold">Aasip Khan H</strong>, a Full Stack Developer and Mobile Application Developer focused on building practical, scalable, and production-ready digital products.
                </p>
                <p>
                  I work across the full development lifecycle — from designing beautiful, responsive user interfaces and constructing fast server backends to database design, security audits, third-party API configurations, authorization protocols, and automated cloud deployments.
                </p>
                <p>
                  I specialize heavily in both <strong className="text-neon-blue">MERN</strong> and <strong className="text-neon-purple">SERN</strong> stack environments, alongside utilizing high-performance <strong className="text-neon-orange">Flutter</strong> to engineer modern, beautiful cross-platform native mobile applications.
                </p>
              </div>

              {/* Decorative mini technical terminal box */}
              <div className="mt-8 bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Status: Ready for client transmissions</span>
                </div>
                <div className="text-slate-600">Secure Tunnel Port: 3000</div>
              </div>
            </motion.div>

            {/* Interactive 3D CSS workspace container */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Workspace3D />
            </motion.div>

          </div>

        </div>
      </section>

      {/* ==========================================================
          3. SKILLS SECTION
          ========================================================== */}
      <section 
        id="skills" 
        className="relative py-24 border-t border-slate-900 bg-radial-blue overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-neon-purple" />
              <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-purple uppercase">ENGINEERING SPECTRUM</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white uppercase mb-4">
              TECHNICAL INTUITION
            </h2>
            <p className="text-[13px] text-slate-400 max-w-xl font-light font-sans">
              Floating tech glass cards categorized cleanly. Hover or tap to trigger glowing 3D vector alignments.
            </p>
          </motion.div>

          {/* Clean Tab Controls */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 max-w-xl mx-auto mb-10 bg-slate-950/60 p-1.5 rounded-xl border border-slate-900">
            {[
              { id: "all", label: "ALL TECH" },
              { id: "frontend", label: "FRONTEND" },
              { id: "backend", label: "BACKEND" },
              { id: "databases", label: "DATABASES" },
              { id: "mobile", label: "MOBILE" },
              { id: "other", label: "OTHER TOOLS" },
            ].map((tab) => {
              const active = activeSkillTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-[9.5px] font-mono tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                    active 
                      ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_4px_12px_rgba(0,240,255,0.15)]" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Floating glass cards layout with dynamic entries */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
            layout
          >
            <AnimatePresence mode="popLayout">
              {getFilteredSkills().map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25, delay: idx * 0.02 }}
                  whileHover={{ y: -4, borderColor: "rgba(0, 240, 255, 0.3)" }}
                  className="p-3.5 rounded-xl border border-slate-800/60 bg-[#06060f]/60 backdrop-blur-md flex flex-col justify-between h-20 shadow-md group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold font-mono tracking-wide text-white group-hover:text-neon-blue transition-colors">
                      {skill.name}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      skill.category === "frontend" ? "bg-neon-blue" :
                      skill.category === "backend" ? "bg-neon-purple" :
                      skill.category === "databases" ? "bg-cyan-400" :
                      skill.category === "mobile" ? "bg-neon-orange" :
                      "bg-emerald-400"
                    }`} />
                  </div>
                  
                  {/* Subtle decorative bottom element */}
                  <div className="flex items-center justify-between text-[7px] text-slate-500 font-mono uppercase">
                    <span>{skill.category} node</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-blue">ACTIVE</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ==========================================================
          4. PROJECTS SECTION
          ========================================================== */}
      <section 
        id="projects" 
        className="relative py-24 border-t border-slate-900 bg-radial-glow overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-neon-orange" />
              <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-orange uppercase">SELECTED ARCHITECTURES</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white uppercase mb-4">
              MY PROJECTS
            </h2>
            <p className="text-[13px] text-slate-400 max-w-xl font-light font-sans">
              Explore 3D tilt-responsive glassmorphism cards embedded with live animated component pipelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard3D 
                key={project.id} 
                project={project} 
                onViewClick={handleProjectView} 
              />
            ))}
            
            {/* Special coming soon card */}
            <ProjectCard3D 
              project={projects[3]} 
              onViewClick={() => {}} 
            />
          </div>

        </div>
      </section>

      {/* ==========================================================
          5. EXPERIENCE / DEVELOPMENT JOURNEY TIMELINE
          ========================================================== */}
      <section 
        className="relative py-24 border-t border-slate-900 bg-[#020617]/50 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-neon-blue" />
              <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-blue uppercase">OPERATIONAL LIFECYCLE</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white uppercase mb-4">
              DEVELOPMENT JOURNEY
            </h2>
            <p className="text-[13px] text-slate-400 max-w-xl font-light font-sans">
              Tracing the compiled packet flows from conceptual idea execution to secure production delivery.
            </p>
          </motion.div>

          {/* Rendering the timeline */}
          <TimelineJourney />

        </div>
      </section>

      {/* ==========================================================
          6. "PRODUCTION READY" SECTION
          ========================================================== */}
      <section 
        className="relative py-24 border-t border-slate-900 bg-radial-orange overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-6 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-neon-orange" />
                <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-orange uppercase">BUILDING REAL VALUE</span>
              </div>
              
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white mb-6 uppercase">
                FROM IDEA TO PRODUCTION
              </h2>

              <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-sans font-light mb-8">
                I focus on building real-world applications that are designed to move beyond prototypes and become usable products. Stubs and mock states are bypassed in favor of clean architectures and stable runtimes.
              </p>

              {/* Grid bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Production-ready applications",
                  "Real-world problem solving",
                  "Scalable architecture",
                  "Mobile + Web integration",
                  "Backend + Database sync",
                  "Robust API integration"
                ].map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" />
                    <span className="text-[12px] font-mono text-slate-300 tracking-wide">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive 3D Pipeline Visualization Panel */}
            <motion.div 
              className="lg:col-span-6 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-[440px] bg-slate-950/80 rounded-2xl border border-slate-800 p-6 font-mono text-[11px] text-left relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-5 text-[9.5px] text-slate-500">
                  <span>PIPELINE_SCHEMATIC.json</span>
                  <span className="text-neon-orange animate-pulse">FLOW ACTIVE</span>
                </div>

                <div className="flex flex-col gap-4 relative">
                  {/* Connected line indicator */}
                  <div className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-slate-800" />
                  
                  {[
                    { title: "IDEA", desc: "User needs / Business formulas", color: "text-neon-blue", border: "border-neon-blue/30" },
                    { title: "DEVELOPMENT", desc: "Typesafe React / Flutter / Node", color: "text-neon-purple", border: "border-neon-purple/30" },
                    { title: "TESTING", desc: "Mock payload verification", color: "text-neon-orange", border: "border-neon-orange/30" },
                    { title: "DEPLOYMENT", desc: "Automated container builds", color: "text-cyan-400", border: "border-cyan-400/30" },
                    { title: "REAL USERS", desc: "Durable active production databases", color: "text-emerald-400", border: "border-emerald-400/30 bg-emerald-500/5" },
                  ].map((node, idx) => (
                    <div key={node.title} className="flex items-start gap-4 pl-0.5 relative z-10">
                      <div className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-[9px] text-slate-500">
                        {idx + 1}
                      </div>
                      <div className={`flex-1 p-2 rounded-lg border bg-slate-950/60 ${node.border}`}>
                        <span className={`font-bold ${node.color} text-[10px] uppercase block tracking-wider`}>
                          {node.title}
                        </span>
                        <p className="text-[10px] text-slate-400 font-sans mt-0.5 font-light">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-3 bottom-3 opacity-5 pointer-events-none">
                  <Layers className="w-32 h-32 text-neon-orange" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ==========================================================
          7. PLAY STORE PROJECT SHOWCASE: SEIL CONNECT
          ========================================================== */}
      <section 
        className="relative py-24 border-t border-slate-900 bg-[#020617]/50 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive 3D Phone Mockup Showcase */}
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PhoneMockup3D />
            </motion.div>

            {/* Content info */}
            <motion.div 
              className="lg:col-span-7 text-left order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-neon-blue" />
                <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-blue uppercase">FEATURED APP EXCLUSIVE</span>
              </div>
              
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white mb-6 uppercase">
                SEIL CONNECT
              </h2>

              <div className="space-y-4 text-slate-300 text-[14px] sm:text-[15px] leading-relaxed font-light font-sans mb-8">
                <p>
                  <strong className="text-white font-semibold">Seil Connect</strong> is a production-ready mobile application built entirely with <strong className="text-neon-orange">Flutter</strong>, designed to provide a highly practical, secure, and modern mobile experience.
                </p>
                <p>
                  It highlights fluid UI transitions, native widget performance optimization, robust local cache engines, Android-compliant architecture layouts, and complete, production-ready release pipelines directly hosted on Google Play.
                </p>
              </div>

              {/* Grid information tags */}
              <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                {[
                  { label: "ENGINE", val: "Flutter / Dart" },
                  { label: "CATEGORY", val: "Mobile Application" },
                  { label: "TARGET", val: "Android / Play Store" },
                  { label: "RELEASE STATUS", val: "Production Ready" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-950 border border-slate-900 rounded-xl p-3 text-left">
                    <span className="text-[7.5px] font-mono text-slate-500 tracking-widest block uppercase">
                      {item.label}
                    </span>
                    <span className="text-[12px] font-bold text-white font-mono mt-1 block">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-mono text-[11px] font-bold tracking-wider uppercase rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>VIEW ON GOOGLE PLAY</span>
                </motion.a>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ==========================================================
          8. SERVICES SECTION
          ========================================================== */}
      <section 
        id="services" 
        className="relative py-24 border-t border-slate-900 bg-radial-glow overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-neon-purple" />
              <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-purple uppercase">OFFERINGS</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white uppercase mb-4">
              FUTURISTIC SERVICES
            </h2>
            <p className="text-[13px] text-slate-400 max-w-xl font-light font-sans">
              Clean development divisions built around real-world business systems and custom client workflows.
            </p>
          </motion.div>

          {/* Majestic Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                className="glass-panel border-slate-800/60 rounded-2xl p-6 text-left relative overflow-hidden hover:border-neon-blue/30 hover:bg-[#080814]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Underglow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-b from-neon-blue/5 to-transparent rounded-full filter blur-md" />

                <div>
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                    <span className="text-[24px] font-display font-extrabold text-slate-800 group-hover:text-neon-blue/35 transition-colors leading-none">
                      {svc.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-neon-blue group-hover:shadow-[0_0_6px_#00f0ff] transition-all" />
                  </div>
                  
                  <h3 className="text-[16px] font-bold tracking-wide text-white group-hover:text-neon-blue transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-[12px] text-slate-400 mt-2 font-light font-sans leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Simulated service availability */}
                <span className="text-[7px] font-mono text-slate-600 tracking-widest mt-6 block uppercase">
                  ACTIVE PIPELINE NODE
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================
          9. CONTACT SECTION
          ========================================================== */}
      <section 
        id="contact" 
        className="relative py-24 md:py-32 border-t border-slate-900 bg-radial-glow overflow-hidden pb-16"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-neon-purple" />
              <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-neon-purple uppercase">INITIATE DISPATCH</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-wider text-white uppercase mb-4">
              LET&apos;S BUILD SOMETHING AMAZING
            </h2>
            <p className="text-[13px] text-slate-400 max-w-xl font-light font-sans">
              Have an idea, project, or problem that needs a digital solution? Initialize the secure tunnel below.
            </p>
          </motion.div>

          {/* Majestic Interactive Form & Info Layout */}
          <ContactInterface />

        </div>
      </section>

      {/* ==========================================================
          10. FOOTER
          ========================================================== */}
      <footer className="border-t border-slate-950 py-10 bg-slate-950/80 backdrop-blur-md relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-bold text-[10px] text-white">
              AK
            </div>
            <span className="font-display font-extrabold text-[13px] tracking-wider text-white">
              AASIP KHAN H
            </span>
          </div>

          <p className="text-[11px] font-mono text-slate-500">
            © {new Date().getFullYear()} Aasip Khan H. All systems operational.
          </p>

          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">GITHUB</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">LINKEDIN</a>
            <span className="text-slate-800">|</span>
            <span className="text-emerald-400">v1.0.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
