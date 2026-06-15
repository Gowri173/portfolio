import React from 'react';
import { ArrowUpRight, Code, Sparkles, Terminal, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Behavioral Authentication & Identity Platform",
      category: "Infrastructure Security",
      desc: "An enterprise-grade authentication system that analyzes keyboard dynamics, cursor micro-actions, and authentication request vectors to block malicious automated session-hijackings in real-time.",
      stats: [
        { label: "Precision Rate", value: "99.8%" },
        { label: "Latency Overheard", value: "<14ms" },
        { label: "Active Nodes", value: "12K+" }
      ],
      github: "https://github.com/Gowri173",
      demo: "#",
      // Inline architecture schematic styled for Red/Orange Fire Theme
      diagram: (
        <svg viewBox="0 0 400 220" className="w-full h-full text-[#6b2d2d] font-mono text-[9px] select-none">
          {/* Grids and Nodes */}
          <rect x="10" y="10" width="380" height="200" rx="15" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(255, 69, 0, 0.2)" strokeDasharray="3 3" />
          
          {/* Signal Stream */}
          <path d="M 40 110 C 100 40, 150 180, 200 110 S 300 40, 360 110" fill="none" stroke="url(#fireGrad)" strokeWidth="2.5" className="animate-pulse" />
          
          {/* Node Points */}
          <circle cx="40" cy="110" r="6" fill="#ffffff" stroke="#ff4500" strokeWidth="2" />
          <text x="25" y="130" fill="#4a1c1c">Telemetry</text>

          <circle cx="120" cy="80" r="6" fill="#ffffff" stroke="#ff6b35" strokeWidth="2" />
          <text x="105" y="65" fill="#4a1c1c">Feature Extractor</text>

          <circle cx="200" cy="110" r="6" fill="#ffffff" stroke="#ff8c00" strokeWidth="2" />
          <text x="180" y="130" fill="#4a1c1c">Risk Model</text>

          <circle cx="280" cy="140" r="6" fill="#ffffff" stroke="#ff6b35" strokeWidth="2" />
          <text x="260" y="160" fill="#4a1c1c">Decider Engine</text>

          <circle cx="360" cy="110" r="6" fill="#ffffff" stroke="#ff4500" strokeWidth="2" />
          <text x="340" y="130" fill="#4a1c1c">Auth Payload</text>

          {/* Gradients */}
          <defs>
            <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="50%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#ff8c00" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "MedRAGnosis Cognitive Medical Assistant",
      category: "Artificial Intelligence",
      desc: "A medical question-answering assistant integrating Retrieval-Augmented Generation (RAG) with local clinician databases. Incorporates multi-stage validation filters to eliminate LLM hallucinations.",
      stats: [
        { label: "Accuracy Index", value: "94.2%" },
        { label: "Hallucination Risk", value: "<0.8%" },
        { label: "Embedding DB Size", value: "4.2M" }
      ],
      github: "https://github.com/Gowri173",
      demo: "#",
      // RAG Routing schematic styled for Red/Orange Fire Theme
      diagram: (
        <svg viewBox="0 0 400 220" className="w-full h-full text-[#6b2d2d] font-mono text-[9px] select-none">
          <rect x="10" y="10" width="380" height="200" rx="15" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(255, 140, 0, 0.2)" strokeDasharray="3 3" />
          
          {/* Database Stack */}
          <rect x="40" y="70" width="60" height="80" rx="5" fill="rgba(255, 69, 0, 0.03)" stroke="rgba(255, 69, 0, 0.3)" />
          <text x="50" y="110" fill="#4a1c1c" className="font-bold">VectorDB</text>
          
          {/* Signal arrows */}
          <line x1="100" y1="110" x2="160" y2="110" stroke="#ff4500" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="160" cy="110" r="16" fill="rgba(255, 107, 53, 0.05)" stroke="#ff6b35" />
          <text x="150" y="113" fill="#4a1c1c" className="font-bold">RAG</text>

          <line x1="176" y1="110" x2="236" y2="110" stroke="#ff6b35" strokeWidth="1.5" />
          <rect x="236" y="85" width="70" height="50" rx="8" fill="rgba(255, 69, 0, 0.03)" stroke="#ff4500" />
          <text x="248" y="113" fill="#4a1c1c">LLM Engine</text>

          <line x1="306" y1="110" x2="350" y2="110" stroke="#ff4500" strokeWidth="1.5" />
          <circle cx="356" cy="110" r="6" fill="#ff6b35" />
          <text x="338" y="130" fill="#4a1c1c">Response</text>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          System Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Product <span className="text-gradient-fire">Launches</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Projects Stack */}
      <div className="space-y-20">
        {projects.map((proj, idx) => (
          <div 
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            
            {/* Project Specs - Left (or alternative layout) */}
            <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
                <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b2d2d] font-sans">
                  {proj.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#4a1c1c] leading-tight font-sans">
                {proj.title}
              </h3>

              <p className="text-xs md:text-sm text-[#6b2d2d] font-light leading-relaxed font-sans">
                {proj.desc}
              </p>

              {/* Specs Metric list */}
              <div className="grid grid-cols-3 gap-4 border-y border-orange-100 py-4 my-2 select-none">
                {proj.stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <div className="text-xl md:text-2xl font-black text-[#4a1c1c] font-sans">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5 font-sans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold text-[#4a1c1c] hover:text-accent-fire hover:border-accent-fire/40 transition-colors flex items-center gap-1.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#6b2d2d]"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Code Telemetry
                </a>
                <a
                  href={proj.demo}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-fire/10 to-accent-orange/10 border border-accent-fire/30 text-xs font-semibold text-[#4a1c1c] hover:shadow-[0_0_15px_rgba(255,69,0,0.15)] hover:scale-[1.02] transition-all flex items-center gap-1.5"
                >
                  <Activity className="w-4 h-4 text-accent-orange" />
                  Live System
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6b2d2d]" />
                </a>
              </div>
 
            </div>
 
            {/* Architecture diagram - Right */}
            <div className="lg:col-span-7 p-6 rounded-3xl glass-panel border-orange-100 hover:border-accent-fire/20 transition-colors shadow-xl relative">
              {/* Glow spots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-fire/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="w-full h-auto aspect-[16/9] flex items-center justify-center">
                {proj.diagram}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
