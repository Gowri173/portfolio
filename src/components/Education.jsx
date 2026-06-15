import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      major: "Information Technology",
      institution: "Velagapudi Ramakrishna Sidhartha Engineering College",
      duration: "2024 – 2027",
      location: "Vijayawada, Andhra Pradesh, India",
      metric: { label: "Current CGPA", value: "8.26  " },
      highlights: [
        "Specializing in Software Engineering, Cloud Systems, and AI Architectures.",
        "Hands-on work in Database Systems, Data Structures, and Distributed Infrastructures.",
        "Active contributor to cloud and AI development initiatives."
      ]
    },
    {
      degree: "Diploma in Computer Science",
      major: "Computer Science & Engineering",
      institution: "AANM & VVRSR Polytechnic College",
      duration: "2021 – 2024",
      location: "Gudlavalleru, Andhra Pradesh, India",
      metric: { label: "Final Percentage", value: "95.29%" },
      highlights: [
        "Graduated with State-level academic honors and distinction.",
        "Strong foundation in Object-Oriented Programming, Operating Systems, and Networking.",
        "Developed multiple minor software projects focusing on web security and database management."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent-fire/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Academic Foundation
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Education & <span className="text-gradient-fire">Credentials</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="group glass-panel border-orange-100 hover:border-accent-fire/40 p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            {/* Background card gradient spot */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent-fire/5 rounded-full blur-2xl group-hover:bg-accent-fire/10 transition-colors pointer-events-none" />

            <div>
              {/* Header section inside card */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-100 group-hover:border-accent-fire/40 transition-colors shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent-fire" />
                </div>

                {/* Metric Display */}
                <div className="p-3.5 rounded-2xl bg-orange-50/50 border border-orange-100/50 text-right font-sans">
                  <span className="block text-[8px] font-bold text-[#6b2d2d]/60 uppercase tracking-widest mb-0.5">
                    {edu.metric.label}
                  </span>
                  <span className="text-base md:text-lg font-black text-[#4a1c1c] tracking-tight">
                    {edu.metric.value}
                  </span>
                </div>
              </div>

              {/* Course Title */}
              <h3 className="text-xl md:text-2xl font-extrabold text-[#4a1c1c] font-sans leading-tight mb-1 group-hover:text-accent-orange transition-colors">
                {edu.degree}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-fire font-mono block mb-4">
                {edu.major}
              </span>

              {/* Institution and Location */}
              <div className="space-y-2 mb-6 border-b border-orange-50 pb-4">
                <div className="text-sm font-bold text-[#4a1c1c]/90 font-sans">
                  {edu.institution}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[#6b2d2d]/80 font-mono text-[10px] md:text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#6b2d2d]/60" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#6b2d2d]/60" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 mb-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6b2d2d]/80 font-sans flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-accent-orange" />
                  Key Focus Areas
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs md:text-sm text-[#6b2d2d] font-light leading-relaxed flex items-start gap-2">
                      <span className="text-accent-fire select-none mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Micro-interactive footer detailing connection status */}
            <div className="mt-4 pt-4 border-t border-orange-50 flex items-center justify-between text-[9px] font-mono text-[#6b2d2d]/60">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-accent-orange" />
                ACCREDITED_NODE
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
