import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Microsoft Azure Intern",
      company: "Microsoft Elevate & AICTE",
      duration: "Jan 2026 – Feb 2026",
      location: "Remote",
      bullets: [
        "4-week program on Microsoft Azure cloud Emerging Technologies.",
        "Built foundational knowledge of Azure services and deployment workflows.",
        "Hands-on labs: cloud infrastructure, data processing, scalable apps."
      ],
      tags: ["Microsoft Azure", "Azure Services", "Cloud Deployment", "Emerging Tech", "Infrastructure"]
    },
    {
      role: "Data Engineering Intern",
      company: "AWS Academy (AICTE & EduSkills)",
      duration: "Oct 2025 – Dec 2025",
      location: "Virtual",
      bullets: [
        "Designed cloud-native data pipelines using AWS for ingestion, storage, and processing.",
        "Implemented scalable workflows for real-world data engineering scenarios.",
        "Deepened expertise in distributed systems and cloud-based architectures."
      ],
      tags: ["AWS Academy", "Data Pipelines", "Cloud Ingestion", "Distributed Systems", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Work <span className="text-gradient-fire">Experience</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-orange-100 ml-4 md:ml-12 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group animate-fadeIn">

            {/* Timeline Dot Indicator */}
            <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-accent-fire group-hover:bg-accent-orange transition-colors z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-fire animate-ping absolute" />
            </div>

            {/* Content Glass Panel */}
            <div className="glass-panel border-orange-100 group-hover:border-accent-fire/40 p-6 md:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl">

              {/* Background ambient lighting in card */}
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-accent-fire/5 rounded-full blur-2xl group-hover:bg-accent-fire/10 transition-colors pointer-events-none" />

              {/* Title & Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#4a1c1c] font-sans group-hover:text-accent-orange transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-fire font-mono mt-1 block">
                    {exp.company}
                  </span>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-[#6b2d2d]/80 font-mono text-[10px] md:text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#6b2d2d]/80" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#6b2d2d]/80" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Milestones description (bullets) */}
              <ul className="space-y-2 mb-6 font-sans text-xs md:text-sm text-[#6b2d2d] font-light">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-accent-fire font-mono font-bold select-none">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 rounded-full bg-orange-50/50 border border-orange-100 text-[10px] font-mono text-[#6b2d2d] hover:text-accent-fire hover:border-accent-orange/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Quote */}
      <div className="mt-20 max-w-4xl mx-auto text-center border-t border-orange-100/50 pt-10 select-none">
        <p className="text-xs md:text-sm text-[#6b2d2d] font-light font-sans max-w-xl mx-auto italic">
          "Every internship, every project, every certification — not just a line on a resume, but a building block for creating systems that matter."
        </p>
      </div>
    </section>
  );
};

export default Experience;
