import React from 'react';
import BackgroundSystem from './components/BackgroundSystem';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import AISystems from './components/AISystems';
import Skills from './components/Skills';
import CertificationsGitHub from './components/CertificationsGitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#4a1c1c] overflow-x-hidden font-sans">
      {/* Dynamic Background System (Video, Gradients, Particles Canvas) */}
      <BackgroundSystem />

      {/* Main Content Layout */}
      <div className="opacity-100">
        <Navbar />
        
        <main className="relative">
          <Hero />
          
          <div className="space-y-12">
            <About />
            <Experience />
            <Education />
            <Projects />
            <AISystems />
            <Skills />
            <CertificationsGitHub />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
