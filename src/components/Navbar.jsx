import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'AI Systems', id: 'aisystems' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background color transition on scroll
      if (window.scrollY > 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-10 ${isScrolled
        ? 'bg-[#ff2200] py-3.5 shadow-lg border-b border-[#ff2200]/30'
        : 'bg-transparent py-5 md:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer select-none"
        >
          <span className="font-sans font-black text-xl tracking-wider text-white">
            GOWRIRAM
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 font-sans border-b-2 pb-0.5 ${activeSection === item.id
                ? 'border-white text-white'
                : 'border-transparent text-white/75 hover:text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.03]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#ff2200] border-t border-[#e01c00]/30 shadow-xl px-6 py-4 flex flex-col gap-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full py-2.5 text-left text-sm font-semibold tracking-wider uppercase font-sans transition-all border-b border-white/10 ${activeSection === item.id
                ? 'text-white font-bold'
                : 'text-white/75 hover:text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 mt-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
