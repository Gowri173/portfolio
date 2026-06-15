import React from 'react';
import { Shield, Brain, Database } from 'lucide-react';
import heroPng from '../assets/hero.png';

const About = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-accent-fire" />,
      title: "Cognitive Infrastructure",
      desc: "Architecting orchestrator networks and agent systems that execute advanced reasoning and recursive correction loops."
    },
    {
      icon: <Database className="w-5 h-5 text-accent-orange" />,
      title: "High-Scale Cloud Systems",
      desc: "Orchestrating microservices, message queues, and high-performance serverless stacks across AWS and Azure."
    },
    {
      icon: <Shield className="w-5 h-5 text-accent-fire" />,
      title: "Robust Security Standards",
      desc: "Securing systems from data leakages, crafting multi-layer auth models, and ensuring data privacy compliant frameworks."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      <style>{`
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff4500, transparent);
          animation: scan-line 4s linear infinite;
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent-fire/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Identity Vector
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          The Engineer Behind <span className="text-gradient-fire">The Machine</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* 3-Column Immersive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">



        {/* Column 2: Bio & Profile Details */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-panel border-orange-100 p-6 rounded-3xl shadow-lg">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#4a1c1c] uppercase tracking-wider font-sans border-b border-orange-100 pb-2">
              Profile Dossier
            </h3>
            <p className="text-xs text-[#6b2d2d] font-light leading-relaxed font-sans">
              Driven by the pursuit of building high-performance systems, I operate at the intersection of robust backend engineering and cognitive automation. My work focuses on constructing secure architectures, designing automated RAG systems, and deploying multi-agent models.
            </p>
            <p className="text-xs text-[#6b2d2d] font-light leading-relaxed font-sans">
              I pursue technical excellence by engineering robust pipelines and software that scales. From implementing biometrics authentication systems at Fortune 50 entities to optimizing latency in distributed vector search systems.
            </p>
          </div>

          {/* Compact Grid Stats */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-orange-100">
            <div className="p-2.5 rounded-xl bg-orange-50/30 border border-orange-100/50 text-center">
              <div className="text-lg font-black text-[#4a1c1c] font-sans">8.26</div>
              <div className="text-[8px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5 font-sans">B.Tech IT CGPA</div>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-50/30 border border-orange-100/50 text-center">
              <div className="text-lg font-black text-[#4a1c1c] font-sans">95.29%</div>
              <div className="text-[8px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5 font-sans">Diploma CS</div>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-50/30 border border-orange-100/50 text-center">
              <div className="text-lg font-black text-[#4a1c1c] font-sans">2</div>
              <div className="text-[8px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5 font-sans">Cloud Internships</div>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-50/30 border border-orange-100/50 text-center">
              <div className="text-lg font-black text-[#4a1c1c] font-sans">AWS CCP</div>
              <div className="text-[8px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5 font-sans">Certified Cloud</div>
            </div>
          </div>
        </div>

        {/* Column 3: Tech Pillars */}
        <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="group glass-panel p-5 rounded-2xl border-orange-100 hover:border-accent-fire/40 transition-all flex items-start gap-3 flex-1"
            >
              <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 group-hover:border-accent-fire/45 transition-colors shrink-0">
                {p.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#4a1c1c] uppercase tracking-wider font-sans group-hover:text-accent-orange transition-colors">
                  {p.title}
                </h4>
                <p className="text-[10px] text-[#6b2d2d]/90 font-light leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
