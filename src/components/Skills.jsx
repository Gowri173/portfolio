import React from 'react';
import { Sparkles, Cpu, Code, Layers, Database, Globe, Command } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "AI & ML",
      icon: <Cpu className="w-4 h-4 text-accent-fire" />,
      skills: ["Python", "TensorFlow", "scikit-learn", "LangChain", "NLTK", "RAG", "AI Agents", "Embeddings"],
      color: "border-accent-fire text-accent-fire bg-accent-fire/5"
    },
    {
      name: "Frontend Stack",
      icon: <Globe className="w-4 h-4 text-accent-orange" />,
      skills: ["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "border-accent-orange text-accent-orange bg-accent-orange/5"
    },
    {
      name: "Backend Stack",
      icon: <Code className="w-4 h-4 text-accent-fire" />,
      skills: ["Python", "Flask", "Java", "REST APIs", "SQL"],
      color: "border-accent-fire text-accent-fire bg-accent-fire/5"
    },
    {
      name: "Database Systems",
      icon: <Database className="w-4 h-4 text-accent-orange" />,
      skills: ["MySQL", "MongoDB", "SQLite", "Vector DB"],
      color: "border-accent-orange text-accent-orange bg-accent-orange/5"
    },
    {
      name: "Cloud & Tools",
      icon: <Layers className="w-4 h-4 text-accent-fire" />,
      skills: ["AWS", "Azure", "Git", "Google ADK", "MongoDB Toolkit", "Jupyter", "VS Code"],
      color: "border-accent-fire text-accent-fire bg-accent-fire/5"
    },
    {
      name: "Concepts",
      icon: <Command className="w-4 h-4 text-accent-orange" />,
      skills: ["Machine Learning", "Data Engineering", "Cybersecurity", "NLP", "Cloud Infra", "Automation"],
      color: "border-accent-orange text-accent-orange bg-accent-orange/5"
    }
  ];

  const proficiencies = [
    { name: "Python & AI/ML", value: 92 },
    { name: "LangChain / RAG Systems", value: 83 },
    { name: "AWS + Azure Cloud", value: 78 },
    { name: "React.js / JavaScript", value: 80 },
    { name: "Data Engineering", value: 76 },
    { name: "SQL / Databases", value: 84 }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center animate-fadeIn">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Technical <span className="text-gradient-fire">Arsenal</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left: Skill Grids Categories (8 Grid Columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel border-orange-100 p-5 rounded-2xl hover:border-accent-fire/20 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold text-[#4a1c1c] uppercase tracking-wider mb-3.5 font-sans flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-orange-50/50 border border-orange-100">
                    {cat.icon}
                  </div>
                  {cat.name}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono hover:scale-[1.01] transition-all select-none ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Core Proficiency Progress Bars (5 Grid Columns) */}
        <div className="lg:col-span-5 glass-panel border-orange-100 p-6 md:p-8 rounded-3xl shadow-lg flex flex-col justify-between">
          <div className="space-y-6">
            <div className="border-b border-orange-50 pb-4 mb-2">
              <h3 className="text-sm font-bold text-[#4a1c1c] uppercase tracking-wider font-sans flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-orange animate-pulse" />
                Core Proficiency
              </h3>
              <p className="text-[10px] text-[#6b2d2d]/65 font-mono mt-1">Ingested metric logs</p>
            </div>

            <div className="space-y-4">
              {proficiencies.map((prof, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-[#4a1c1c] font-sans">
                    <span>{prof.name}</span>
                    <span className="font-mono text-accent-fire font-bold">{prof.value}%</span>
                  </div>

                  {/* Custom Progress bar container */}
                  <div className="w-full h-2 rounded-full bg-orange-50 border border-orange-100/50 overflow-hidden relative p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-fire to-accent-orange shadow-[0_0_8px_rgba(255,69,0,0.2)] transition-all duration-1000"
                      style={{ width: `${prof.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>

      </div>
    </section>
  );
};

export default Skills;
