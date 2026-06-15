import React from 'react';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend & Cloud",
      skills: ["Java", "Python", "C#", "SQL", "Spring Boot", ".NET Core", "AWS (Lambda, SQS, Cognito)", "Azure (AD, Pipelines)", "Docker"],
      color: "border-accent-fire text-accent-fire bg-accent-fire/5"
    },
    {
      name: "Frontend Stack",
      skills: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Redux Toolkit", "GSAP", "Framer Motion", "Vite"],
      color: "border-accent-orange text-accent-orange bg-accent-orange/5"
    },
    {
      name: "AI & Data Science",
      skills: ["RAG Systems", "Vector Databases (Pinecone, PGVector)", "LangChain", "LlamaIndex", "Multi-Agent Frameworks", "PyTorch", "Pandas"],
      color: "border-accent-gold text-accent-gold bg-accent-gold/5"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Competency Matrix
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Capabilities <span className="text-gradient-fire">Galaxy</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Traditional skill grids */}
        <div className="lg:col-span-7 space-y-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-panel border-orange-100 p-6 rounded-2xl hover:border-accent-fire/20 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-sm font-bold text-[#4a1c1c] uppercase tracking-wider mb-4 font-sans flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-fire" />
                {cat.name}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-medium hover:scale-[1.03] transition-all select-none ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Orbital Galaxy Visualization */}
        <div className="lg:col-span-5 h-[400px] relative flex items-center justify-center select-none">
          
          {/* Orbital rings (styled by index.css dashed rule) */}
          <div className="orbit-ring w-[350px] h-[350px] animate-spin [animation-duration:100s]" />
          <div className="orbit-ring w-[240px] h-[240px] animate-spin [animation-duration:60s] [animation-direction:reverse]" />
          <div className="orbit-ring w-[140px] h-[140px] animate-spin [animation-duration:30s]" />

          {/* Central Engine Core */}
          <div className="absolute w-16 h-16 rounded-full bg-white border-2 border-accent-fire flex items-center justify-center shadow-[0_0_40px_rgba(255,69,0,0.15)] z-10">
            <Sparkles className="w-5 h-5 text-accent-fire animate-pulse" />
          </div>

          {/* Orbit Nodes - Outer ring */}
          <div className="absolute top-10 left-10 p-2.5 rounded-xl bg-white border border-accent-fire text-[10px] font-mono text-[#4a1c1c] animate-orbit-slow shadow-[0_0_15px_rgba(255,69,0,0.08)]">
            AWS Cloud
          </div>
          <div className="absolute bottom-12 right-6 p-2.5 rounded-xl bg-white border border-accent-orange text-[10px] font-mono text-[#4a1c1c] animate-orbit-slow shadow-[0_0_15px_rgba(255,140,0,0.08)]">
            Multi-Agent
          </div>

          {/* Orbit Nodes - Middle ring */}
          <div className="absolute top-1/4 right-12 p-2.5 rounded-xl bg-white border border-accent-gold text-[10px] font-mono text-[#4a1c1c] animate-orbit-medium shadow-[0_0_15px_rgba(255,209,102,0.08)]">
            React / GSAP
          </div>
          <div className="absolute bottom-1/4 left-10 p-2.5 rounded-xl bg-white border border-accent-fire text-[10px] font-mono text-[#4a1c1c] animate-orbit-medium shadow-[0_0_15px_rgba(255,69,0,0.08)]">
            VectorDB
          </div>

          {/* Orbit Nodes - Inner ring */}
          <div className="absolute top-12 right-1/3 p-2 rounded-xl bg-white border border-accent-orange text-[9px] font-mono text-[#4a1c1c] animate-orbit-fast">
            Python / Java
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
