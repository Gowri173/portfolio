import React, { useState } from 'react';
import { Mail, Send, Terminal, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('sending');
    // Simulate telemetry transmission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background ambient glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-fire/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Transmission Node
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Mission <span className="text-gradient-fire">Control</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Control Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Mission Status & Direct CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel border-orange-100 p-8 rounded-3xl relative overflow-hidden shadow-xl">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-accent-fire uppercase tracking-widest font-mono">
              SYSTEM_LINK // ACTIVE
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4a1c1c] leading-tight font-sans">
              Let's Build Intelligent Systems Together
            </h3>
            <p className="text-sm text-[#6b2d2d] font-light leading-relaxed font-sans">
              Whether you are looking to scale cloud pipelines, orchestrate agent networks, design secure biometrics, or just collaborate on AI infrastructure - get in touch.
            </p>
          </div>

          {/* Diagnostic Console Box */}
          <div className="my-8 p-4 rounded-xl bg-orange-50/50 border border-orange-100 font-mono text-[10px] text-[#6b2d2d]/80 space-y-2 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>GOWRI_RAM_SYSTEMS: Online</span>
            </div>
            <div>&gt; INGESTION_ENDPOINT: active</div>
            <div>&gt; PORT: 8080 // SECURE TLS v1.3</div>
            {status === 'sending' && (
              <div className="text-accent-fire animate-pulse">&gt; STATUS: Transmitting telemetry data...</div>
            )}
            {status === 'success' && (
              <div className="text-emerald-600">&gt; STATUS: Payload ingested successfully!</div>
            )}
            {status === 'idle' && (
              <div className="text-[#6b2d2d]/60">&gt; STATUS: Awaiting input connection...</div>
            )}
          </div>

          {/* Quick Connect CTA links */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:gowrir559@gmail.com"
              className="btn-primary-fire group w-full py-4 text-xs font-bold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              Initiate Ingestion
            </a>

            <a
              href="https://linkedin.com/in/gowri-ram"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-4 text-xs font-bold uppercase tracking-wider text-[#4a1c1c] bg-orange-50 border border-orange-100 hover:border-accent-orange/50 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#6b2d2d] group-hover:text-accent-orange transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

        </div>

        {/* Right Side: Interactive Transmission Form */}
        <div className="lg:col-span-7 glass-panel border-orange-100 p-8 rounded-3xl shadow-xl relative">
          
          <h4 className="text-lg font-bold text-[#4a1c1c] mb-6 font-sans flex items-center gap-2">
            <Terminal className="w-5 h-5 text-accent-orange" />
            Secure Connection Form
          </h4>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mb-1.5 font-sans">
                Sender Name
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Identify yourself..."
                className="w-full px-4 py-3.5 rounded-xl bg-orange-50/20 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-sm font-sans placeholder-[#6b2d2d]/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mb-1.5 font-sans">
                Response Vector (Email)
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Enter return address..."
                className="w-full px-4 py-3.5 rounded-xl bg-orange-50/20 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-sm font-sans placeholder-[#6b2d2d]/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mb-1.5 font-sans">
                Telemetry Payload (Message)
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Structure your proposal here..."
                className="w-full px-4 py-3.5 rounded-xl bg-orange-50/20 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-sm font-sans placeholder-[#6b2d2d]/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary-fire w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Transmitting...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Payload Ingested
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Transmit Message
                </>
              )}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
