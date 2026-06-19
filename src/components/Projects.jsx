import React from 'react';
import { ArrowUpRight, Sparkles, Terminal, Activity, FileText, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Behavioral Authentication System for Web App Security",
      category: "Security · ML",
      problem: "Traditional passwords are vulnerable. A malicious actor who steals credentials gains full access. Static authentication cannot detect the difference between you and an impostor.",
      solution: "A passive, continuous authentication layer using behavioral biometrics — analyzing unique keystroke dynamics and mouse movement patterns to build a living fingerprint of the legitimate user.",
      features: [
        "Keystroke dynamics + mouse movement analysis for user fingerprinting",
        "scikit-learn anomaly detection models for real-time threat scoring",
        "Passive authentication — zero friction for legitimate users",
        "Flask API backend with continuous session monitoring"
      ],
      stats: [
        { label: "User Friction", value: "Zero" },
        { label: "Anomaly Detection", value: "ML" },
        { label: "Monitoring", value: "Real-time" }
      ],
      tags: ["Python", "Flask", "scikit-learn", "JavaScript", "SQLite", "NumPy"],
      github: "https://github.com/Gowri173/neuropass",
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
      title: "AI-Powered Medical Assistant Chatbot (RAG-Based)",
      category: "AI · RAG · Healthcare",
      problem: "Healthcare information online is fragmented and unreliable. Generic LLMs hallucinate medical details. Patients and professionals need accurate, source-grounded answers instantly.",
      solution: "A Retrieval-Augmented Generation system that grounds every response in verified medical documentation — using vector search, embeddings, and LLMs to deliver precise, cited answers.",
      features: [
        "Full RAG pipeline with document processing and vector embeddings",
        "Semantic search over medical knowledge bases via vector similarity",
        "Source-grounded responses with LLM synthesis",
        "Context-aware Q&A that cites documentation for every answer"
      ],
      stats: [
        { label: "Architecture", value: "RAG" },
        { label: "Powered", value: "LLM" },
        { label: "Grounded", value: "Source" }
      ],
      tags: ["Python", "LangChain", "LLMs", "Vector DB", "RAG", "Embeddings"],
      github: "https://github.com/Gowri173/medrag",
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
          Product Showcases
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Featured <span className="text-gradient-fire">Work</span>
        </h2>
        <p className="text-[#6b2d2d]/80 text-xs font-semibold uppercase tracking-wider font-sans mt-2">
          Each project engineered to solve a real problem.
        </p>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Projects Stack */}
      <div className="space-y-28">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="glass-panel border-orange-100 p-8 md:p-10 rounded-[36px] shadow-xl hover:border-accent-fire/30 transition-all duration-500 relative flex flex-col gap-8 animate-fadeIn"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent-fire/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top row: Header, category badge and actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-orange-100/60 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
                  <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b2d2d] font-sans">
                    {proj.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#4a1c1c] font-sans leading-tight">
                  {proj.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#4a1c1c] uppercase tracking-wider hover:text-accent-fire hover:border-accent-fire/40 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Code Telemetry
                </a>
                <a
                  href={proj.demo}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-fire/10 to-accent-orange/10 border border-accent-fire/30 text-[10px] font-bold text-[#4a1c1c] uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,69,0,0.15)] hover:scale-[1.01] transition-all flex items-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5 text-accent-orange" />
                  Live System
                  <ArrowUpRight className="w-3 h-3 text-[#6b2d2d]" />
                </a>
              </div>
            </div>

            {/* Grid for content and diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Problem/Solution specs - Left */}
              <div className="lg:col-span-7 space-y-6">

                {/* Problem Section */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#6b2d2d]/60 font-mono block">
                    [01] Problem Statement
                  </span>
                  <p className="text-xs md:text-sm text-[#6b2d2d] font-normal leading-relaxed font-sans">
                    {proj.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent-fire font-mono block">
                    [02] Engineering Solution
                  </span>
                  <p className="text-xs md:text-sm text-[#4a1c1c] font-medium leading-relaxed font-sans bg-orange-50/40 p-4 rounded-2xl border border-orange-100/50 shadow-inner">
                    {proj.solution}
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent-orange font-mono block">
                    [03] Key Telemetry Features
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#6b2d2d] font-sans">
                    {proj.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 leading-relaxed bg-white border border-orange-50 p-2.5 rounded-xl">
                        <span className="text-accent-fire select-none mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-orange-50/40 border border-orange-100/60 font-mono text-[9px] text-[#6b2d2d]/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Architecture Diagram and Metrics - Right */}
              <div className="lg:col-span-5 space-y-6">

                {/* SVG Schematic Box */}
                <div className="p-4 rounded-2xl bg-white border border-orange-100 hover:border-accent-fire/20 transition-colors shadow-sm relative">
                  <div className="absolute top-3 right-3 text-[8px] font-mono text-[#6b2d2d]/50">SCHEMATIC_NODE // V1.0</div>
                  <div className="w-full h-auto aspect-[16/10] flex items-center justify-center pt-2">
                    {proj.diagram}
                  </div>
                </div>

                {/* Stats Metric list */}
                <div className="grid grid-cols-3 gap-3">
                  {proj.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="p-3 rounded-2xl bg-orange-50/40 border border-orange-100/40 text-center shadow-inner select-none">
                      <div className="text-base md:text-lg font-black text-[#4a1c1c] font-sans">
                        {proj.category === "Security · ML" && stat.label === "User Friction" ? (
                          <span className="text-emerald-600">{stat.value}</span>
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-[8px] font-bold text-[#6b2d2d]/75 uppercase tracking-widest mt-0.5 font-sans leading-none">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Footer link to GitHub */}
      <div className="mt-20 text-center select-none">
        <a
          href="https://github.com/Gowri173"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-100 hover:border-accent-orange/30 text-xs font-bold text-[#4a1c1c] uppercase tracking-wider transition-all"
        >
          View All on GitHub
          <ArrowUpRight className="w-4 h-4 text-accent-fire animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Projects;